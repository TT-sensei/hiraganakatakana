(() => {
  "use strict";

  const all = Object.values(typeof KANA_WORDS !== "undefined" ? KANA_WORDS : {}).flat();
  const allWords = [...new Map(all.filter(x => x && x.word).map(x => [x.word, {word:x.word, icon:x.icon || ""}])).values()];
  const initialType = new URLSearchParams(location.search).get("type");
  let wordType = initialType === "kata" ? "kata" : "hira";
  let words = [];
  function buildWordList(){
    const re = wordType === "kata" ? /^[ァ-ヺー]+$/ : /^[ぁ-ゖー]+$/;
    words = allWords.filter(x => re.test(x.word))
      .filter(x => x.word.length >= 2 && x.word.length <= 6)
      .filter(x => !/[っゃゅょぁぃぅぇぉゎッャュョァィゥェォヮ]/.test(x.word));
  }
  let wordIndex = 0;
  let charIndex = 0;
  let curWord = null;
  let curChar = "";
  let ctxBg, ctxFx, ctxDr;
  let cW = 0;
  let strokes = [];
  let currentStroke = 0;
  let drawing = false;
  let animating = false;
  let isLoading = false;
  let drawLength = 0;
  let lastX = null, lastY = null;
  let userPts = [];
  let strokeScores = [];
  let sparkles = [];
  let isSparkling = false;
  let startDotRaf = null, startDotPhase = 0;
  let currentStrokePts = [];
  let toastTimer = null;
  let wordTransitionTimer = null;
  const svgCache = {};
  let strokeRefCache = {};
  const TOLERANCE_RATIO = 0.22;
  const _svgM = (() => {
    const s = document.createElementNS("http://www.w3.org/2000/svg","svg");
    s.style.cssText = "position:absolute;left:-9999px;top:-9999px;width:1px;height:1px;opacity:0;pointer-events:none;";
    document.body.appendChild(s);
    return s;
  })();

  const NAV_FEEDBACK = {
    encourage: [
      "https://tt-sensei.github.io/navi-character-/assets/web/characters/sora/fullbody/thumbs-up.webp",
      "https://tt-sensei.github.io/navi-character-/assets/web/characters/nami/fullbody/waving.webp",
      "https://tt-sensei.github.io/navi-character-/assets/web/characters/saku/fullbody/heart-hands.webp"
    ],
    correct: [
      "https://tt-sensei.github.io/navi-character-/assets/web/characters/kai/fullbody/correct.webp",
      "https://tt-sensei.github.io/navi-character-/assets/web/characters/tsuki/fullbody/correct.webp",
      "https://tt-sensei.github.io/navi-character-/assets/web/characters/riku/fullbody/correct.webp"
    ],
    retry: [
      "https://tt-sensei.github.io/navi-character-/assets/web/characters/nami/fullbody/retry.webp",
      "https://tt-sensei.github.io/navi-character-/assets/web/characters/riku/fullbody/retry.webp",
      "https://tt-sensei.github.io/navi-character-/assets/web/characters/saku/fullbody/retry.webp"
    ],
    hint: [
      "https://tt-sensei.github.io/navi-character-/assets/web/characters/kai/fullbody/hint.webp",
      "https://tt-sensei.github.io/navi-character-/assets/web/characters/tsuki/fullbody/hint.webp"
    ]
  };

  function $(id){ return document.getElementById(id); }
  function speak(text){
    if(!window.speechSynthesis) return;
    speechSynthesis.cancel();
    const u=new SpeechSynthesisUtterance(text);
    u.lang="ja-JP"; u.rate=.85; u.pitch=1.2;
    speechSynthesis.speak(u);
  }
  let AC;
  function snd(t){
    try{
      if(!AC) AC=new(window.AudioContext||window.webkitAudioContext)();
      if(AC.state==="suspended") AC.resume();
      const now=AC.currentTime;
      const o=(f,w,d,v=.1,s=now)=>{
        const os=AC.createOscillator(),g=AC.createGain();
        os.type=w; os.frequency.setValueAtTime(f,s);
        g.gain.setValueAtTime(v,s); g.gain.exponentialRampToValueAtTime(.01,s+d);
        os.connect(g); g.connect(AC.destination); os.start(s); os.stop(s+d);
      };
      if(t==="stroke"){
        o(520,"sine",.06,.18,now); o(1040,"sine",.18,.13,now+.04); o(1560,"sine",.12,.06,now+.09);
      }else if(t==="error") o(200,"sawtooth",.25,.15);
      else if(t==="click") o(500,"triangle",.1,.08);
      else if(t==="complete"){
        [[0,880,.08,.18],[.07,1108,.08,.15],[.13,1318,.1,.15],[.2,1760,.18,.12],[.28,2093,.15,.1],[.33,1760,.12,.08]]
          .forEach(([off,f,d,v])=>o(f,"sine",d,v,now+off));
      }
    }catch(e){}
  }

  function setWordType(type){
    wordType=type; buildWordList();
    wordIndex=Math.floor(Math.random()*Math.max(words.length,1));
    $("hiraBtn").classList.toggle("active",type==="hira");
    $("kataBtn").classList.toggle("active",type==="kata");
    if(words.length) loadWord(wordIndex);
  }

  function renderWords(){
    $("word").textContent = curWord.word;
    $("currentChar").textContent = curChar;
    $("stepText").textContent = (charIndex+1) + " / " + curWord.word.length;
    $("wordIcon").hidden = !curWord.icon;
    if(curWord.icon) $("wordIcon").src = curWord.icon;
    const p=$("progress"); p.innerHTML="";
    [...curWord.word].forEach((_,i)=>{
      const dot=document.createElement("i");
      if(i<charIndex) dot.className="done";
      else if(i===charIndex) dot.className="current";
      p.appendChild(dot);
    });
  }

  function renderHintIcon(icon){
    if(!icon) return "💡";
    if(icon.startsWith("https://koboyo.com/icons/svg/")){
      return '<img class="hint-icon-lg" src="'+icon+'" alt="" aria-hidden="true">';
    }
    return '<span class="hint-icon-lg">'+icon+"</span>";
  }

  function updateHint(){
    $("hintArea").innerHTML = renderHintIcon(curWord.icon) +
      '<div class="hint-word-box"><span class="hint-char">'+curChar+
      '</span><button id="soundBtn" class="sound-btn" aria-label="もじをきく">🔊</button></div>';
    $("soundBtn").onclick=()=>{snd("click");speak(curChar);};
  }

  function setMsg(t,c){
    const el=$("message"); el.textContent=t; el.style.color=c||"var(--green)";
    const img=$("navFeedback");
    const s=String(t);
    const group=/かんぺき|いいぞ|できたよ|かけたね|クリア/.test(s)?"correct":
      /もういちど|おしい|きをつけて|ながく/.test(s)?"retry":
      /じゅんび|なぞろう|かく むき/.test(s)?"hint":"encourage";
    if(img){
      const list=NAV_FEEDBACK[group];
      img.src=list[Math.floor(Math.random()*list.length)];
      img.style.animation="none"; void img.offsetWidth;
      img.style.animation="navFeedbackIn .25s ease both";
    }
  }

  function resizeCanvas(){
    const wrap=$("canvasWrap");
    if(!wrap) return;
    wrap.style.width="";
    wrap.style.height="";
  }

  function getXY(e,canvas){
    const r=canvas.getBoundingClientRect();
    const cx=e.touches?e.touches[0].clientX:e.clientX;
    const cy=e.touches?e.touches[0].clientY:e.clientY;
    return {x:(cx-r.left)*(cW/r.width),y:(cy-r.top)*(cW/r.height)};
  }

  function initCanvas(){
    const wrap=$("canvasWrap");
    resizeCanvas();
    cW=wrap.offsetWidth;
    ["canvasBg","canvasFx","canvasDr"].forEach(id=>{
      const c=$(id); c.width=cW; c.height=cW;
    });
    ctxBg=$("canvasBg").getContext("2d");
    ctxFx=$("canvasFx").getContext("2d");
    ctxDr=$("canvasDr").getContext("2d");
    drawGrid();
    strokes=[]; currentStroke=0; drawing=false; animating=false;
    drawLength=0; lastX=null; lastY=null; stopStartDot();
    const drC=$("canvasDr");
    drC.onpointerdown=e=>{
      if(animating||isLoading) return;
      const {x,y}=getXY(e,drC);
      if(strokes.length&&currentStroke<strokes.length&&!checkStart(x,y)) return;
      drawing=true; drawLength=0; lastX=x; lastY=y;
      userPts=[{x,y}]; currentStrokePts=[{x,y}]; stopStartDot();
      ctxDr.beginPath(); ctxDr.moveTo(x,y);
    };
    drC.onpointermove=e=>{
      if(!drawing) return;
      e.preventDefault();
      const {x,y}=getXY(e,drC);
      trackDraw(x,y); userPts.push({x,y}); currentStrokePts.push({x,y});
      ctxDr.lineTo(x,y); ctxDr.lineCap="round"; ctxDr.lineJoin="round";
      ctxDr.lineWidth=cW*.04; ctxDr.strokeStyle="rgba(56,189,248,.9)"; ctxDr.stroke();
      if(userPts.length%4===0){addSparkle(x,y);if(!isSparkling&&sparkles.length){isSparkling=true;drawSparkles();}}
    };
    drC.onpointerup=e=>{
      if(!drawing)return;
      drawing=false; const {x,y}=getXY(e,drC); trackDraw(x,y); evalEnd(x,y);
    };
    drC.onpointerleave=()=>{
      if(!drawing)return;
      drawing=false; evalEnd(lastX??0,lastY??0);
    };
  }

  function trackDraw(x,y){if(lastX!==null)drawLength+=Math.hypot(x-lastX,y-lastY);lastX=x;lastY=y;}

  function drawGrid(){
    ctxBg.clearRect(0,0,cW,cW);
    ctxBg.strokeStyle="rgba(255,200,160,.4)"; ctxBg.lineWidth=1; ctxBg.setLineDash([4,4]);
    ctxBg.beginPath(); ctxBg.moveTo(cW/2,4); ctxBg.lineTo(cW/2,cW-4);
    ctxBg.moveTo(4,cW/2); ctxBg.lineTo(cW-4,cW/2); ctxBg.stroke(); ctxBg.setLineDash([]);
  }

  async function loadKanjiVG(){
    try{
      const hex=curChar.codePointAt(0).toString(16).padStart(5,"0");
      const url="https://cdn.jsdelivr.net/gh/KanjiVG/kanjivg@master/kanji/"+hex+".svg";
      if(!svgCache[hex]){
        const res=await fetch(url); if(!res.ok) throw new Error();
        svgCache[hex]=await res.text();
      }
      const svgText=svgCache[hex];
      const doc=new DOMParser().parseFromString(svgText,"image/svg+xml");
      const sg=doc.querySelector('[id^="kvg:StrokePaths"]');
      strokes=sg?[...sg.querySelectorAll("path")].map(p=>p.getAttribute("d")):[];
      currentStroke=0; drawLength=0; lastX=null; lastY=null; strokeRefCache={};
      if(strokes.length) startStartDot();
      // 書き順データだけ取得し、練習画面にはお手本のオレンジ線を表示しない。
      // スタート位置の番号と、おてほんボタンからのヒントだけで確認できるようにする。
      ctxBg.clearRect(0,0,cW,cW);
      drawGrid();
    }catch(e){
      console.warn(curChar+" KanjiVGなし");
      strokes=[]; currentStroke=0;
    }
  }

  function resamplePath(d,N=32){
    if(strokeRefCache[d]) return strokeRefCache[d];
    const p=document.createElementNS("http://www.w3.org/2000/svg","path");
    p.setAttribute("d",d); _svgM.appendChild(p);
    const len=p.getTotalLength(),sc=cW/109,pts=[];
    for(let i=0;i<N;i++){const pt=p.getPointAtLength(len*i/(N-1));pts.push({x:pt.x*sc,y:pt.y*sc});}
    _svgM.removeChild(p); strokeRefCache[d]=pts; return pts;
  }
  function dtwDistance(s1,s2){
    const n=s1.length,m=s2.length;
    const dt=Array.from({length:n+1},()=>new Float32Array(m+1).fill(Infinity));
    dt[0][0]=0;
    for(let i=1;i<=n;i++)for(let j=1;j<=m;j++){
      const d=Math.hypot(s1[i-1].x-s2[j-1].x,s1[i-1].y-s2[j-1].y);
      dt[i][j]=d+Math.min(dt[i-1][j],dt[i][j-1],dt[i-1][j-1]);
    }
    return dt[n][m]/Math.max(n,m);
  }
  function resampleUserPts(N=32){
    if(userPts.length<2)return userPts;
    const ds=[0];
    for(let i=1;i<userPts.length;i++)ds.push(ds[i-1]+Math.hypot(userPts[i].x-userPts[i-1].x,userPts[i].y-userPts[i-1].y));
    const total=ds[ds.length-1]; if(total<1)return userPts;
    const res=[];
    for(let i=0;i<N;i++){
      const tgt=total*i/(N-1); let lo=0,hi=ds.length-1;
      while(lo<hi-1){const mid=(lo+hi)>>1;if(ds[mid]<=tgt)lo=mid;else hi=mid;}
      const t=ds[lo]===ds[hi]?0:(tgt-ds[lo])/(ds[hi]-ds[lo]);
      res.push({x:userPts[lo].x+(userPts[hi].x-userPts[lo].x)*t,y:userPts[lo].y+(userPts[hi].y-userPts[lo].y)*t});
    }
    return res;
  }
  function getSVGPt(d,ratio){
    const p=document.createElementNS("http://www.w3.org/2000/svg","path");
    p.setAttribute("d",d);_svgM.appendChild(p);
    const len=p.getTotalLength(),pt=p.getPointAtLength(len*ratio),sc=cW/109;
    const r={x:pt.x*sc,y:pt.y*sc};_svgM.removeChild(p);return r;
  }
  function checkStart(x,y){
    if(!strokes.length||currentStroke>=strokes.length)return false;
    const st=getSVGPt(strokes[currentStroke],0);
    return Math.hypot(x-st.x,y-st.y)<cW*TOLERANCE_RATIO;
  }
  function checkDirection(ur,ref){
    const N=ur.length;if(N<4)return true;
    const uVx=ur[N-1].x-ur[0].x,uVy=ur[N-1].y-ur[0].y;
    const M=ref.length,rVx=ref[M-1].x-ref[0].x,rVy=ref[M-1].y-ref[0].y;
    const dot=uVx*rVx+uVy*rVy,uL=Math.hypot(uVx,uVy),rL=Math.hypot(rVx,rVy);
    if(uL<1||rL<1)return true;
    return dot/(uL*rL)>-.3;
  }
  function resetStrokeScores(){strokeScores=[];}
  function dtwToScore(d){if(d<=cW*.06)return 1;if(d<=cW*.12)return .67;if(d<=cW*.20)return .33;return 0;}
  function calcStars(){if(!strokeScores.length)return 1;const avg=strokeScores.reduce((a,b)=>a+b,0)/strokeScores.length;return avg>=.85?3:avg>=.55?2:1;}
  function isStrokeTooShort(dl,rl){return dl<rl*.25;}

  function evalEnd(x,y){
    ctxDr.clearRect(0,0,cW,cW);
    if(!strokes.length){snd("stroke");setMsg("かけたね！","var(--green)");completeChar();return;}
    if(currentStroke>=strokes.length)return;
    const pd=strokes[currentStroke],ref=resamplePath(pd,32);
    const refLen=ref.reduce((a,p,i)=>i===0?0:a+Math.hypot(p.x-ref[i-1].x,p.y-ref[i-1].y),0);
    if(isStrokeTooShort(drawLength,refLen)){
      snd("error");setMsg("もうすこし ながく かいてね","var(--red)");showHint(currentStroke);
      drawLength=0;lastX=null;lastY=null;userPts=[];return;
    }
    const ur=resampleUserPts(32);
    if(!checkDirection(ur,ref)){
      snd("error");setMsg("かく むきに きをつけてね","var(--red)");showHint(currentStroke);
      drawLength=0;lastX=null;lastY=null;userPts=[];return;
    }
    const dtw=dtwDistance(ur,ref),endRef=getSVGPt(pd,1),endDist=Math.hypot(x-endRef.x,y-endRef.y);
    const ok=dtw<cW*.20&&(endDist<cW*TOLERANCE_RATIO*1.4||dtw<cW*.20*.60);
    drawLength=0;lastX=null;lastY=null;userPts=[];
    if(ok){
      strokeScores.push(dtwToScore(dtw));snd("stroke");currentStroke++;redrawFx();
      const sc=dtwToScore(dtw);showStrokeToast(sc);
      if(sc>=1)setMsg("かんぺき！","var(--purple)");
      else if(sc>=.67)setMsg("いいぞ！","var(--green)");
      else setMsg("できたよ!","#8A5E00");
      if(currentStroke>=strokes.length) completeChar();
    }else{
      snd("error");setMsg("おしい！ もういちど","var(--red)");showHint(currentStroke);
    }
  }

  function completeChar(){
    if(animating) return;
    animating=true;
    snd("complete"); stopStartDot();
    const stars=calcStars();
    // 「かなを書く」と同じスター（XP）データに加算する
    // 1文字につき1回だけ加算し、同じ文字を書き直しても二重加算しない。
    const xp = parseInt(localStorage.getItem("km_xp") || "0", 10) || 0;
    localStorage.setItem("km_xp", String(xp + stars));
    showResult(stars);
    speak(curChar);
    setTimeout(()=>{
      charIndex++;
      if(charIndex < curWord.word.length){
        loadCurrentChar();
      }else{
        finishWord();
      }
    },280);
  }

  function showResult(stars){
    $("resultStars").textContent="★".repeat(stars);
    $("resultLabel").textContent=stars===3?"はなまる！":stars===2?"すごい！":"クリア！";
    $("resultBanner").classList.add("show");
    setTimeout(()=>$("resultBanner").classList.remove("show"),700);
    for(let i=0;i<(stars===3?28:stars===2?18:8);i++)setTimeout(()=>{
      const el=document.createElement("span");el.className="confetti";
      el.style.left=(30+Math.random()*40)+"%";el.style.top=(35+Math.random()*20)+"%";
      el.style.setProperty("--dx",(Math.random()*180-90)+"px");
      el.style.setProperty("--dy",(Math.random()*150-70)+"px");
      $("canvasWrap").appendChild(el);setTimeout(()=>el.remove(),900);
    },i*12);
  }

  function finishWord(){
    $("doneWord").textContent=curWord.word;
    $("doneCard").hidden=false;
    $("message").textContent="ことばを ぜんぶ かけたよ！";
    $("message").style.color="var(--green)";
    if(wordTransitionTimer) clearTimeout(wordTransitionTimer);
    wordTransitionTimer=setTimeout(()=>{
      wordTransitionTimer=null;
      animating=false;
      $("doneCard").hidden=true;
      nextWord();
    },900);
  }

  function loadCurrentChar(){
    $("doneCard").hidden=true;
    curChar=[...curWord.word][charIndex];
    renderWords(); updateHint();
    resetStrokeScores(); currentStrokePts=[]; userPts=[]; sparkles=[]; isSparkling=false;
    $("resultBanner").classList.remove("show");
    initCanvas(); isLoading=true; $("canvasDr").style.cursor="wait";
    setMsg("じゅんびちゅう…","var(--mid)");
    loadKanjiVG().then(()=>{
      isLoading=false; $("canvasDr").style.cursor="crosshair";
      setMsg("うすいせんを なぞろう","var(--green)");
    });
  }

  function loadWord(index){
    wordIndex=(index+words.length)%words.length;
    curWord=words[wordIndex]; charIndex=0;
    $("wordIcon").hidden=!curWord.icon;
    loadCurrentChar();
  }

  function nextWord(){if(wordTransitionTimer){clearTimeout(wordTransitionTimer);wordTransitionTimer=null;}animating=false;snd("click");loadWord(wordIndex+1);}
  function prevWord(){snd("click");loadWord(wordIndex-1);}
  function randomWord(){snd("click");loadWord(Math.floor(Math.random()*words.length));}

  function doRetry(){
    if(isLoading)return;
    currentStroke=0;drawing=false;drawLength=0;lastX=null;lastY=null;userPts=[];
    currentStrokePts=[];sparkles=[];isSparkling=false;resetStrokeScores();stopStartDot();
    $("resultBanner").classList.remove("show");ctxFx.clearRect(0,0,cW,cW);ctxDr.clearRect(0,0,cW,cW);
    setMsg("うすいせんを なぞろう","var(--green)");
    if(strokes.length)startStartDot();
  }

  function showHint(idx){
    if(idx>=strokes.length)return;
    const sc=cW/109;
    ctxFx.save();ctxFx.scale(sc,sc);ctxFx.strokeStyle="rgba(255,60,80,.5)";ctxFx.lineWidth=4/sc;
    ctxFx.lineCap="round";ctxFx.lineJoin="round";ctxFx.beginPath();ctxFx.stroke(new Path2D(strokes[idx]));ctxFx.restore();
    setTimeout(()=>redrawFx(),1000);
  }

  function startStartDot(){
    stopStartDot(); if(!strokes.length||currentStroke>=strokes.length)return;
    const st=getSVGPt(strokes[currentStroke],0);startDotPhase=0;
    function tick(){
      startDotPhase+=.07;ctxFx.clearRect(0,0,cW,cW);
      const sc=cW/109;ctxFx.save();ctxFx.scale(sc,sc);ctxFx.strokeStyle="#2A3A50";ctxFx.lineWidth=6/sc;ctxFx.lineCap="round";ctxFx.lineJoin="round";
      for(let i=0;i<currentStroke;i++){ctxFx.beginPath();ctxFx.stroke(new Path2D(strokes[i]));}
      ctxFx.restore();
      const pulse=.5+.5*Math.sin(startDotPhase),r=cW*.045+cW*.018*pulse,alpha=.55+.35*pulse;
      ctxFx.save();ctxFx.beginPath();ctxFx.arc(st.x,st.y,r*1.6,0,Math.PI*2);ctxFx.strokeStyle="rgba(255,110,30,"+(alpha*.4)+")";ctxFx.lineWidth=2;ctxFx.stroke();
      ctxFx.beginPath();ctxFx.arc(st.x,st.y,r,0,Math.PI*2);ctxFx.fillStyle="rgba(255,110,30,"+alpha+")";ctxFx.fill();
      ctxFx.fillStyle="white";ctxFx.font="bold "+(r*1.1)+"px sans-serif";ctxFx.textAlign="center";ctxFx.textBaseline="middle";ctxFx.fillText(currentStroke+1,st.x,st.y+1);ctxFx.restore();
      startDotRaf=requestAnimationFrame(tick);
    }
    startDotRaf=requestAnimationFrame(tick);
  }
  function stopStartDot(){if(startDotRaf){cancelAnimationFrame(startDotRaf);startDotRaf=null;}}

  function redrawFx(){
    ctxFx.clearRect(0,0,cW,cW);if(!strokes.length)return;
    const sc=cW/109;ctxFx.save();ctxFx.scale(sc,sc);ctxFx.strokeStyle="#2A3A50";ctxFx.lineWidth=6/sc;ctxFx.lineCap="round";ctxFx.lineJoin="round";
    for(let i=0;i<currentStroke;i++){ctxFx.beginPath();ctxFx.stroke(new Path2D(strokes[i]));}
    ctxFx.restore();if(currentStroke<strokes.length)startStartDot();else stopStartDot();
  }

  function addSparkle(x,y){
    for(let i=0;i<2;i++)sparkles.push({x,y,vx:(Math.random()-.5)*4,vy:(Math.random()-.5)*4,life:1,r:Math.random()*4+2});
  }
  function drawSparkles(){
    if(!sparkles.length){isSparkling=false;return;}
    sparkles=sparkles.filter(s=>s.life>0);ctxDr.clearRect(0,0,cW,cW);
    if(drawing&&userPts.length>1){ctxDr.beginPath();ctxDr.moveTo(userPts[0].x,userPts[0].y);ctxDr.lineCap="round";ctxDr.lineJoin="round";ctxDr.lineWidth=cW*.04;ctxDr.strokeStyle="rgba(56,189,248,.9)";userPts.forEach(p=>ctxDr.lineTo(p.x,p.y));ctxDr.stroke();}
    sparkles.forEach(s=>{ctxDr.save();ctxDr.globalAlpha=s.life;ctxDr.fillStyle="#ffb347";ctxDr.beginPath();ctxDr.arc(s.x,s.y,s.r,0,Math.PI*2);ctxDr.fill();ctxDr.restore();s.x+=s.vx;s.y+=s.vy;s.life-=.06;});
    requestAnimationFrame(drawSparkles);
  }

  function showStrokeToast(score){
    const t=$("strokeToast");if(!t)return;
    t.textContent=score>=1?"かんぺき！":score>=.67?"いいぞ！":"できたよ！";
    t.style.animation="none";void t.offsetWidth;t.style.animation="toastIn .22s cubic-bezier(.2,1.4,.4,1) forwards";
    if(toastTimer)clearTimeout(toastTimer);toastTimer=setTimeout(()=>{t.style.animation="toastOut .28s ease forwards";},600);
  }

  $("hiraBtn").onclick=()=>{snd("click");setWordType("hira");};
  $("kataBtn").onclick=()=>{snd("click");setWordType("kata");};
  $("hintBtn").onclick=()=>{snd("click");showHint(currentStroke);};
  $("clearBtn").onclick=()=>{snd("click");doRetry();};
  $("nextBtn").onclick=nextWord;
  $("prevBtn").onclick=prevWord;
  $("randomBtn").onclick=randomWord;
  $("soundTop").onclick=()=>{snd("click");speak(curWord?curWord.word:"");};

  window.addEventListener("resize",()=>{
    requestAnimationFrame(()=>{
      const old=cW; resizeCanvas(); const w=$("canvasWrap").offsetWidth;
      if(w>0&&w!==old&&curChar){loadCurrentChar();}
    });
  });

  document.addEventListener("gesturestart",e=>e.preventDefault(),{passive:false});
  document.addEventListener("gesturechange",e=>e.preventDefault(),{passive:false});
  document.addEventListener("gestureend",e=>e.preventDefault(),{passive:false});

  buildWordList();
  if(words.length) loadWord(Math.floor(Math.random()*words.length));
  else {
    $("word").textContent="ことばが ありません";
    $("currentChar").textContent="—";
  }
})();