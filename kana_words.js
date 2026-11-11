// ============================================================
// かなマスター 単語データ（小1最適版）
// ============================================================
// 構造: { char, icon, word, pos }
//   char : 練習する文字
//   icon : Material Symbols のアイコン名（ブラウザ間で見た目を統一）
//   word : 単語（ひらがな or カタカナ）
//   pos  : charが何文字目か（0始まり）
//
// ★ 自由に編集してください！
//   posは0始まり（1文字目=0, 2文字目=1, ...）
// ============================================================

const KANA_WORDS = {

  // ==========================================================
  // ひらがな あ〜な
  // ==========================================================
  h1: [
    { char:'あ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/ame.webp',        word:'あめ',word:'あめ',       pos:0 },
    { char:'い', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/inu.webp',         word:'いぬ',word:'いぬ',       pos:0 },
    { char:'う', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/uma.webp',         word:'うま',word:'うま',       pos:0 },
    { char:'え', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/ehon.webp',    word:'えほん',word:'えほん',     pos:0 },
    { char:'お', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/ousama.webp',      word:'おうさま', pos:0 },

    { char:'か', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/kaeru.webp',         word:'かえる',word:'かえる',     pos:0 },
    { char:'き', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/kinoko.webp',       word:'きのこ',word:'きのこ',     pos:0 },
    { char:'く', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/kuma.webp',         word:'くま',word:'くま',       pos:0 },
    { char:'け', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/kemushi.webp',   word:'けむし',word:'けむし',     pos:0 },
    { char:'こ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/koara.webp',         word:'こあら',word:'こあら',     pos:0 },
    { char:'さ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/sakana.webp',  word:'さかな',   pos:0 },
    { char:'し', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/shika.webp',         word:'しか',word:'しか',       pos:0 },
    { char:'す', icon:'https://tt-sensei.github.io/navi-character-/assets/web/items/suika.webp',    word:'すいか',word:'すいか',     pos:0 },
    { char:'せ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/semi.webp',    word:'せみ',     pos:0 },
    { char:'そ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/sora.webp',     word:'そら',word:'そら',       pos:0 },

    { char:'た', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/tamago.webp',          word:'たまご',word:'たまご',     pos:0 },
    { char:'ち', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/chou.webp', word:'ちょう',word:'ちょう',     pos:0 },
    { char:'つ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/tsuki.webp',    word:'つき',word:'つき',       pos:0 },
    { char:'て', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/tebukuro.webp',    word:'てぶくろ',   pos:0 },
    { char:'と', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/tora.webp',         word:'とら',word:'とら',       pos:0 },

    { char:'な', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/nashi.webp',    word:'なし',word:'なし',       pos:0 },
    { char:'に', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/niji.webp',        word:'にじ',word:'にじ',       pos:0 },
    { char:'ぬ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/nuigurumi.webp',      word:'ぬいぐるみ', pos:0 },
    { char:'ね', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/neko.webp',         word:'ねこ',word:'ねこ',       pos:0 },
    { char:'の', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/norimono.webp',      word:'のりもの', pos:0 },
  ],

  // ==========================================================
  // ひらがな は〜ん
  // ==========================================================
  h2: [
    { char:'は', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/hana.webp', word:'はな',word:'はな',      pos:0 },
    { char:'ひ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/himawari.webp', word:'ひまわり',   pos:0 },
    { char:'ふ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/fune.webp',      word:'ふね',word:'ふね',       pos:0 },
    { char:'へ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/hebi.webp',         word:'へび',word:'へび',       pos:0 },
    { char:'ほ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/hoshi.webp',         word:'ほし',word:'ほし',       pos:0 },
    { char:'ま', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/mame.webp', word:'まめ', pos:0 },
    { char:'み', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/mimi.webp',      word:'みみ',word:'みみ',       pos:0 },
    { char:'む', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/mushi.webp',   word:'むし',word:'むし',       pos:0 },
    { char:'め', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/megane.webp',   word:'めがね',word:'めがね',     pos:0 },
    { char:'も', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/momo.webp',    word:'もも',word:'もも',       pos:0 },

    { char:'や', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/yama.webp',    word:'やま',word:'やま',       pos:0 },
    { char:'ゆ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/yuki.webp',      word:'ゆき',word:'ゆき',       pos:0 },
    { char:'よ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/yoru.webp',  word:'よる',word:'よる',       pos:0 },

    { char:'ら', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/lion.webp',         word:'らいおん',word:'らいおん',   pos:0 },
    { char:'り', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/ribbon.webp',     word:'りぼん',   pos:0 },
    { char:'る', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/saru.webp',         word:'さる',word:'さる',       pos:1 },
    { char:'れ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/reizouko.webp',      word:'れいぞうこ',word:'れいぞうこ', pos:0 },
    { char:'ろ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/rousoku.webp', word:'ろうそく',word:'ろうそく',  pos:0 },
    { char:'わ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/waffle.webp',     word:'わっふる', pos:0 },
    { char:'を', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/neko.webp',         word:'ねこをみた',word:'ねこをみた', pos:2 },
    { char:'ん', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/ringo.webp',    word:'りんご',word:'りんご',     pos:1 },
  ],

  // ==========================================================
  // カタカナ ア〜ナ
  // ==========================================================
  k1: [
    { char:'ア', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/ice.webp',       word:'アイス',       pos:0 },
    { char:'イ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/iruka.webp',           word:'イルカ',word:'イルカ',       pos:0 },
    { char:'ウ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/wiener.webp',        word:'ウインナー',   pos:0 },
    { char:'エ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/apron.webp',      word:'エプロン',word:'エプロン',     pos:0 },
    { char:'オ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/oumu.webp', word:'オウム', pos:0 },

    { char:'カ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/camera.webp',   word:'カメラ',word:'カメラ',       pos:0 },
    { char:'キ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/kiwi.webp',      word:'キウイ',word:'キウイ',       pos:0 },
    { char:'ク', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/cookie.webp',         word:'クッキー',word:'クッキー',     pos:0 },
    { char:'ケ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/cake.webp',           word:'ケーキ',word:'ケーキ',       pos:0 },
    { char:'コ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/cup.webp',     word:'コップ',word:'コップ',       pos:0 },

    { char:'サ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/salad.webp',      word:'サラダ',word:'サラダ',       pos:0 },
    { char:'シ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/shimauma.webp',           word:'シマウマ',word:'シマウマ',     pos:0 },
    { char:'ス', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/surippa.webp', word:'スリッパ', pos:0 },
    { char:'セ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/sweater.webp',         word:'セーター',     pos:0 },
    { char:'ソ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/socks.webp',           word:'ソックス',     pos:0 },

    { char:'タ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/taxi.webp',     word:'タクシー',word:'タクシー',     pos:0 },
    { char:'チ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/choco.webp',  word:'チョコ',       pos:0 },
    { char:'ツ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/items/christmas-tree.webp',           word:'ツリー',word:'ツリー',       pos:0 },
    { char:'テ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/terebi.webp',              word:'テレビ',       pos:0 },
    { char:'ト', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/tomato.webp',      word:'トマト',word:'トマト',       pos:0 },

    { char:'ナ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/nattsu.webp',      word:'ナッツ',word:'ナッツ',       pos:0 },
    { char:'ニ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/nyuusu.webp',      word:'ニュース',word:'ニュース',     pos:0 },
    { char:'ヌ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/canoe.webp',         word:'カヌー',word:'カヌー',       pos:1 },
    { char:'ネ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/nekutai.webp',      word:'ネクタイ',word:'ネクタイ',     pos:0 },
    { char:'ノ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/items/note.webp',           word:'ノート',word:'ノート',       pos:0 },
  ],

  // ==========================================================
  // カタカナ ハ〜ン
  // ==========================================================
  k2: [
    { char:'ハ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/hamburger.webp',   word:'ハンバーガー',word:'ハンバーガー', pos:0 },
    { char:'ヒ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/hero.webp', word:'ヒーロー', pos:0 },
    { char:'フ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/fork.webp', word:'フォーク', pos:0 },
    { char:'ヘ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/helicopter.webp',         word:'ヘリコプター',word:'ヘリコプター', pos:0 },
    { char:'ホ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/hotel.webp',          word:'ホテル',word:'ホテル',       pos:0 },
    { char:'マ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/mic.webp',             word:'マイク',       pos:0 },
    { char:'ミ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/milk.webp', word:'ミルク', pos:0 },
    { char:'ム', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/mushi.webp',             word:'ムシ',         pos:0 },
    { char:'メ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/melon.webp',      word:'メロン',word:'メロン',       pos:0 },
    { char:'モ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/monster.webp', word:'モンスター', pos:0 },

    { char:'ヤ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/yashi.webp',           word:'ヤシ',word:'ヤシ',         pos:0 },
    { char:'ユ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/unicorn.webp',           word:'ユニコーン',word:'ユニコーン',   pos:0 },
    { char:'ヨ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/yacht.webp',        word:'ヨット',word:'ヨット',       pos:0 },

    { char:'ラ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/lion.webp',           word:'ライオン',word:'ライオン',     pos:0 },
    { char:'リ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/ribbon.webp', word:'リボン',word:'リボン', pos:0 },
    { char:'ル', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/ruby.webp',         word:'ルビー',       pos:0 },
    { char:'レ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/lemon.webp',      word:'レモン',word:'レモン',       pos:0 },
    { char:'ロ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/robot.webp',      word:'ロボット',word:'ロボット',     pos:0 },

    { char:'ワ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/waffle.webp',  word:'ワッフル',word:'ワッフル',     pos:0 },
    { char:'ヲ', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/neko.webp',           word:'ネコヲミタ',word:'ネコヲミタ',   pos:2 },  // 助詞「ヲ」を短い文で練習（「を」と同じアプローチ）
    { char:'ン', icon:'https://tt-sensei.github.io/navi-character-/assets/web/words/pan.webp',        word:'パン',         pos:1 }
  ],

};
