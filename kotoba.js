(() => {
  "use strict";

  // かなカナの既存データから、ひらがなで書ける語を自動収集。
  // 同じ語が複数の文字に登録されていても1回だけ扱う。
  const all = Object.values(window.KANA_WORDS || {}).flat();
  const words = [...new Set(all.map(x => x.word).filter(Boolean))]
    .filter(w => /^[ぁ-ゖー]+$/.test(w))
    .filter(w => w.length >= 2 && w.length <= 6)
    .filter(w => !/[っゃゅょぁぃぅぇぉゎ]/.test(w))
    .map(word => ({word}));

  // 小1で扱いやすい語を先頭に。残りはデータ順。
  const preferred = [
    "ねこ","いぬ","うま","えほん","かえる","きのこ","くま","こあら",
    "さかな","しか","すいか","そら","たまご","ちょう","つき","とら",
    "なし","にじ","はな","ふね","へび","ほし","まめ","みみ","むし",
    "めがね","もも","やま","ゆき","よる","りぼん","りんご"
  ];
  const order = new Map(preferred.map((w,i)=>[w,i]));
  words.sort((a,b)=>(order.has(a.word)?order.get(a.word):9999)-(order.has(b.word)?order.get(b.word):9999)||a.word.localeCompare(b.word,"ja"));

  const stateKey = "tt-kotoba-write-v1";
  const saved = JSON.parse(localStorage.getItem(stateKey) || "{}");
  let index = Number.isInteger(saved.index) ? saved.index : 0;
  let current = 0;
  let strokes = [];
  let strokeIndex = 0;
  let drawing = false;
  let userPts = [];
  let drawLength = 0;
  let last = null;
  let ctxGuide,ctxFx,ctxDraw,cW=0;
  let refCache = {};
  let animFrame = null;
  let messageTimer = null;

  const $ = id => document.getElementById(id);
  const wordEl=$("word"),meaningEl=$("meaning"),progressEl=$("progress"),charEl=$("currentChar");
  const msgEl=$("message"),doneCard=$("doneCard"),doneWord=$("doneWord");

  function save(){localStorage.setItem(stateKey,JSON.stringify({index}));}
  function speak(text){
    if(!window.speechSynthesis)return;
    speechSynthesis.cancel();
    const u=new SpeechSynthesisUtterance(text);u.lang="ja-JP";u.rate=.82;u.pitch=1.15;
    speechSynthesis.speak(u);
  }
  function resize(){
    const wrap=$("canvasWrap");cW=wrap.clientWidth;
    ["guide","fx","draw"].forEach(id=>{const c=$(id);c.width=cW;c.height=cW});
    ctxGuide=$("guide").getContext("2d");ctxFx=$("fx").getContext("2d");ctxDraw=$("draw").getContext("2d");
    drawGrid(); if(strokes.length)drawCompleted();
  }
  function drawGrid(){
    ctxGuide.clearRect(0,0,cW,cW);
    ctxGuide.strokeStyle="rgba(255,200,160,.34)";ctxGuide.lineWidth=1;ctxGuide.setLineDash([5,5]);
    ctxGuide.beginPath();ctxGuide.moveTo(cW/2,8);ctxGuide.lineTo(cW/2,cW-8);ctxGuide.moveTo(8,cW/2);ctxGuide.lineTo(cW-8,cW/2);ctxGuide.stroke();ctxGuide.setLineDash([]);
  }
  function xy(e){
    const r=$("draw").getBoundingClientRect();
    return {x:(e.clientX-r.left)*(cW/r.width),y:(e.clientY-r.top)*(cW/r.height)};
  }
  function svgPathPoints(d,N=32){
    const key=d+"|"+cW;if(refCache[key])return refCache[key];
    const p=document.createElementNS("http://www.w3.org/2000/svg","path");p.setAttribute("d",d);
    const holder=document.createElementNS("http://www.w3.org/2000/svg","svg");holder.style.cssText="position:absolute;left:-9999px;width:1px;height:1px";
    document.body.appendChild(holder);holder.appendChild(p);
    const len=p.getTotalLength(),out=[],scale=cW/109;
    for(let i=0;i<N;i++){const q=p.getPointAtLength(len*i/(N-1));out.push({x:q.x*scale,y:q.y*scale})}
    holder.remove();refCache[key]=out;return out;
  }
  function resampleUser(N=32){
    if(userPts.length<2)return userPts;
    const ds=[0];for(let i=1;i<userPts.length;i++)ds.push(ds[i-1]+Math.hypot(userPts[i].x-userPts[i-1].x,userPts[i].y-userPts[i-1].y));
    const total=ds[ds.length-1];if(total<1)return userPts;const out=[];
    for(let i=0;i<N;i++){const t=total*i/(N-1);let lo=0,hi=ds.length-1;while(lo<hi-1){const m=(lo+hi)>>1;if(ds[m]<=t)lo=m;else hi=m}
      const z=ds[lo]===ds[hi]?0:(t-ds[lo])/(ds[hi]-ds[lo]);
      out.push({x:userPts[lo]+0,y:userPts[lo].y+(userPts[hi].y-userPts[lo].y)*z});
      out[i].x=userPts[lo].x+(userPts[hi].x-userPts[lo].x)*z;
    } return out;
  }
  function dtw(a,b){
    const n=a.length,m=b.length,D=Array.from({length:n+1},()=>new Float32Array(m+1).fill(Infinity));D[0][0]=0;
    for(let i=1;i<=n;i++)for(let j=1;j<=m;j++){const d=Math.hypot(a[i-1].x-b[j-1].x,a[i-1].y-b[j-1].y);D[i][j]=d+Math.min(D[i-1][j],D[i][j-1],D[i-1][j-1])}
    return D[n][m]/Math.max(n,m);
  }
  function endPoint(d){
    const p=document.createElementNS("http://www.w3.org/2000/svg","path");p.setAttribute("d",d);
    const h=document.createElementNS("http://www.w3.org/2000/svg","svg");h.style.cssText="position:absolute;left:-9999px;width:1px;height:1px";document.body.appendChild(h);h.appendChild(p);
    const len=p.getTotalLength(),q=p.getPointAtLength(len),r={x:q.x*cW/109,y:q.y*cW/109};h.remove();return r;
  }
  function startPoint(d){
    const p=document.createElementNS("http://www.w3.org/2000/svg","path");p.setAttribute("d",d);
    const h=document.createElementNS("http://www.w3.org/2000/svg","svg");h.style.cssText="position:absolute;left:-9999px;width:1px;height:1px";document.body.appendChild(h);h.appendChild(p);
    const q=p.getPointAtLength(0),r={x:q.x*cW/109,y:q.y*cW/109};h.remove();return r;
  }
  function drawCompleted(){
    ctxFx.clearRect(0,0,cW,cW);const sc=cW/109;ctxFx.save();ctxFx.scale(sc,sc);
    ctxFx.strokeStyle="#2a3a50";ctxFx.lineWidth=6/sc;ctxFx.lineCap="round";ctxFx.lineJoin="round";
    for(let i=0;i<strokeIndex;i++){ctxFx.beginPath();ctxFx.stroke(new Path2D(strokes[i]))}ctxFx.restore();
  }
  function showHint(){
    if(strokeIndex>=strokes.length)return;
    const sc=cW/109;ctxFx.save();ctxFx.scale(sc,sc);ctxFx.strokeStyle="rgba(255,123,47,.55)";ctxFx.lineWidth=5/sc;ctxFx.lineCap="round";ctxFx.lineJoin="round";
    ctxFx.stroke(new Path2D(strokes[strokeIndex]));ctxFx.restore();
    clearTimeout(messageTimer);messageTimer=setTimeout(()=>{drawCompleted();startDot()},900);
  }
  let dotFrame=0,dotPhase=0;
  function startDot(){
    cancelAnimationFrame(dotFrame);if(strokeIndex>=strokes.length)return;
    const st=startPoint(strokes[strokeIndex]);
    const tick=()=>{dotPhase+=.08;drawCompleted();const p=.5+.5*Math.sin(dotPhase),r=cW*.045+cW*.015*p;
      ctxFx.beginPath();ctxFx.arc(st.x,st.y,r,0,Math.PI*2);ctxFx.fillStyle="rgba(255,123,47,.8)";ctxFx.fill();
      dotFrame=requestAnimationFrame(tick)};dotFrame=requestAnimationFrame(tick);
  }
  function setMessage(t,color){msgEl.textContent=t;msgEl.style.color=color||"var(--green)"}
  async function loadChar(ch){
    cancelAnimationFrame(dotFrame);strokes=[];strokeIndex=0;userPts=[];drawLength=0;last=null;refCache={};
    setMessage("おてほんを よういしています…","var(--mid)");drawGrid();
    try{
      const hex=ch.codePointAt(0).toString(16).padStart(5,"0");
      const url="https://cdn.jsdelivr.net/gh/KanjiVG/kanjivg@master/kanji/"+hex+".svg";
      const res=await fetch(url);if(!res.ok)throw new Error("KanjiVG");
      const text=await res.text();const doc=new DOMParser().parseFromString(text,"image/svg+xml");
      const sg=doc.querySelector('[id^="kvg:StrokePaths"]');strokes=sg?[...sg.querySelectorAll("path")].map(p=>p.getAttribute("d")):[];
      const styled=text.replace("</svg>","<style>path{stroke:rgba(255,190,140,.52)!important;stroke-width:9!important;fill:none!important}text{fill:#ffad7a!important}</style></svg>");
      const blob=URL.createObjectURL(new Blob([styled],{type:"image/svg+xml;charset=utf-8"}));
      await new Promise(resolve=>{const img=new Image();img.onload=()=>{ctxGuide.clearRect(0,0,cW,cW);drawGrid();ctxGuide.drawImage(img,0,0,cW,cW);URL.revokeObjectURL(blob);resolve()};img.onerror=()=>{URL.revokeObjectURL(blob);resolve()};img.src=blob});
      setMessage("うすい せんを なぞってみよう","var(--green)");startDot();
    }catch(e){strokes=[];setMessage("おてほんを よみこめませんでした","var(--orange)")}
  }
  function render(){
    if(!words.length){setMessage("ことばが ありません","var(--orange)");return}
    if(index<0)index=words.length-1;if(index>=words.length)index=0;save();
    const item=words[index];wordEl.textContent=item.word;doneWord.textContent=item.word;meaningEl.textContent="";
    progressEl.innerHTML=[...item.word].map((_,i)=>'<i class="'+(i<current?'done ':i===current?'current':'')+'"></i>').join("");
    charEl.textContent=[...item.word][current];
    $("stepText").textContent=(current+1)+"もじめ";
    doneCard.hidden=current<item.word.length;
    $("canvasWrap").style.display=current<item.word.length?"block":"none";
    if(current<item.word.length)loadChar([...item.word][current]);else setMessage("ことばが かけたよ！","var(--green)");
  }
  function completeChar(){
    strokeIndex=strokes.length;drawCompleted();cancelAnimationFrame(dotFrame);
    speak([...words[index].word][current]);
    current++;
    if(current<[...words[index].word].length){
      progressEl.innerHTML=[...words[index].word].map((_,i)=>'<i class="'+(i<current?'done ':i===current?'current':'')+'"></i>').join("");
      charEl.textContent=[...words[index].word][current];$("stepText").textContent=(current+1)+"もじめ";
      setTimeout(()=>render(),650);
    }else{render()}
  }
  function evaluate(x,y){
    if(!strokes.length||strokeIndex>=strokes.length)return;
    const ref=svgPathPoints(strokes[strokeIndex]),ur=resampleUser(32),rl=ref.reduce((a,p,i)=>i?a+Math.hypot(p.x-ref[i-1].x,p.y-ref[i-1].y):0,0);
    if(drawLength<rl*.25){setMessage("もうすこし ながく かいてね","var(--orange)");showHint();resetDraw();return}
    const u0=ur[0],u1=ur[ur.length-1],r0=ref[0],r1=ref[ref.length-1];
    const uvx=u1.x-u0.x,uvy=u1.y-u0.y,rvx=r1.x-r0.x,rvy=r1.y-r0.y;
    const denom=Math.hypot(uvx,uvy)*Math.hypot(rvx,rvy);const dir=denom?((uvx*rvx+uvy*rvy)/denom):1;
    const score=dtw(ur,ref),ep=endPoint(strokes[strokeIndex]),ed=Math.hypot(x-ep.x,y-ep.y);
    resetDraw();
    if(dir<-.3){setMessage("かく むきに きをつけてね","var(--orange)");showHint();return}
    if(score<cW*.20&&(ed<cW*.31||score<cW*.12)){completeChar()}
    else{setMessage("おしい！ もういちど","var(--orange)");showHint()}
  }
  function resetDraw(){drawing=false;userPts=[];drawLength=0;last=null;ctxDraw.clearRect(0,0,cW,cW)}
  function bind(){
    const c=$("draw");
    c.addEventListener("pointerdown",e=>{if(strokeIndex>=strokes.length)return;e.preventDefault();const p=xy(e);const st=startPoint(strokes[strokeIndex]);if(Math.hypot(p.x-st.x,p.y-st.y)>cW*.24){setMessage("オレンジの てんから かこう","var(--orange)");return}drawing=true;userPts=[p];last=p;drawLength=0;cancelAnimationFrame(dotFrame);c.setPointerCapture?.(e.pointerId)});
    c.addEventListener("pointermove",e=>{if(!drawing)return;e.preventDefault();const p=xy(e);drawLength+=Math.hypot(p.x-last.x,p.y-last.y);last=p;userPts.push(p);ctxDraw.lineWidth=cW*.04;ctxDraw.lineCap="round";ctxDraw.lineJoin="round";ctxDraw.strokeStyle="rgba(56,189,248,.9)";ctxDraw.beginPath();ctxDraw.moveTo(userPts[userPts.length-2].x,userPts[userPts.length-2].y);ctxDraw.lineTo(p.x,p.y);ctxDraw.stroke()});
    c.addEventListener("pointerup",e=>{if(!drawing)return;const p=xy(e);drawLength+=Math.hypot(p.x-last.x,p.y-last.y);evaluate(p.x,p.y)});
    c.addEventListener("pointercancel",()=>resetDraw());
    $("hintBtn").onclick=showHint;$("clearBtn").onclick=()=>{resetDraw();drawCompleted();startDot();setMessage("オレンジの てんから かいてみよう","var(--green)")};
    $("soundTop").onclick=()=>speak(words[index].word);
    $("nextBtn").onclick=()=>{index=(index+1)%words.length;current=0;render()};
    $("prevBtn").onclick=()=>{index=(index-1+words.length)%words.length;current=0;render()};
    $("randomBtn").onclick=()=>{index=Math.floor(Math.random()*words.length);current=0;render()};
    window.addEventListener("resize",()=>{resize();if(current<[...words[index].word].length)loadChar([...words[index].word][current])});
  }
  resize();bind();render();
})();