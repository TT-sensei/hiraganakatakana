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
    { char:'あ', icon:'https://koboyo.com/icons/svg/rainbow.svg',        word:'あめ',       pos:0 },
    { char:'い', icon:'https://koboyo.com/icons/svg/dog.svg',         word:'いぬ',       pos:0 },
    { char:'う', icon:'https://koboyo.com/icons/svg/dog.svg',         word:'うま',       pos:0 },
    { char:'え', icon:'https://koboyo.com/icons/svg/book.svg',    word:'えほん',     pos:0 },
    { char:'お', icon:'https://koboyo.com/icons/svg/rice.svg',    word:'おにぎり',   pos:0 },

    { char:'か', icon:'https://koboyo.com/icons/svg/dog.svg',         word:'かえる',     pos:0 },
    { char:'き', icon:'https://koboyo.com/icons/svg/mushroom.svg',       word:'きのこ',     pos:0 },
    { char:'く', icon:'https://koboyo.com/icons/svg/dog.svg',         word:'くま',       pos:0 },
    { char:'け', icon:'https://koboyo.com/icons/svg/caterpillar.svg',   word:'けむし',     pos:0 },
    { char:'こ', icon:'https://koboyo.com/icons/svg/dog.svg',         word:'こあら',     pos:0 },

    { char:'さ', icon:'https://koboyo.com/icons/svg/fish.svg',     word:'さかな',     pos:0 },
    { char:'し', icon:'https://koboyo.com/icons/svg/dog.svg',         word:'しか',       pos:0 },
    { char:'す', icon:'https://koboyo.com/icons/svg/apple.svg',    word:'すいか',     pos:0 },
    { char:'せ', icon:'https://koboyo.com/icons/svg/cookie.svg',       word:'せんべい',   pos:0 },
    { char:'そ', icon:'https://koboyo.com/icons/svg/sun.svg',     word:'そら',       pos:0 },

    { char:'た', icon:'https://koboyo.com/icons/svg/egg.svg',          word:'たまご',     pos:0 },
    { char:'ち', icon:'https://koboyo.com/icons/svg/butterfly.svg', word:'ちょう',     pos:0 },
    { char:'つ', icon:'https://koboyo.com/icons/svg/moon.svg',    word:'つき',       pos:0 },
    { char:'て', icon:'https://koboyo.com/icons/svg/mitten.svg',    word:'てぶくろ',   pos:0 },
    { char:'と', icon:'https://koboyo.com/icons/svg/dog.svg',         word:'とら',       pos:0 },

    { char:'な', icon:'https://koboyo.com/icons/svg/apple.svg',    word:'なし',       pos:0 },
    { char:'に', icon:'https://koboyo.com/icons/svg/rainbow.svg',        word:'にじ',       pos:0 },
    { char:'ぬ', icon:'https://koboyo.com/icons/svg/mitten.svg',    word:'ぬの',       pos:0 },
    { char:'ね', icon:'https://koboyo.com/icons/svg/dog.svg',         word:'ねこ',       pos:0 },
    { char:'の', icon:'https://koboyo.com/icons/svg/car.svg', word:'のりもの', pos:0 },
  ],

  // ==========================================================
  // ひらがな は〜ん
  // ==========================================================
  h2: [
    { char:'は', icon:'https://koboyo.com/icons/svg/flower.svg', word:'はな',      pos:0 },
    { char:'ひ', icon:'https://koboyo.com/icons/svg/butterfly.svg', word:'ひよこ',     pos:0 },
    { char:'ふ', icon:'https://koboyo.com/icons/svg/boat.svg',      word:'ふね',       pos:0 },
    { char:'へ', icon:'https://koboyo.com/icons/svg/dog.svg',         word:'へび',       pos:0 },
    { char:'ほ', icon:'https://koboyo.com/icons/svg/star.svg',         word:'ほし',       pos:0 },

    { char:'ま', icon:'https://koboyo.com/icons/svg/bed.svg',          word:'まくら',     pos:0 },
    { char:'み', icon:'https://koboyo.com/icons/svg/ear.svg',      word:'みみ',       pos:0 },
    { char:'む', icon:'https://koboyo.com/icons/svg/caterpillar.svg',   word:'むし',       pos:0 },
    { char:'め', icon:'https://koboyo.com/icons/svg/glasses.svg',   word:'めがね',     pos:0 },
    { char:'も', icon:'https://koboyo.com/icons/svg/apple.svg',    word:'もも',       pos:0 },

    { char:'や', icon:'https://koboyo.com/icons/svg/mountain.svg',    word:'やま',       pos:0 },
    { char:'ゆ', icon:'https://koboyo.com/icons/svg/snowflake.svg',      word:'ゆき',       pos:0 },
    { char:'よ', icon:'https://koboyo.com/icons/svg/moon.svg',  word:'よる',       pos:0 },

    { char:'ら', icon:'https://koboyo.com/icons/svg/dog.svg',         word:'らいおん',   pos:0 },
    { char:'り', icon:'https://koboyo.com/icons/svg/apple.svg',    word:'りんご',     pos:0 },
    { char:'る', icon:'https://koboyo.com/icons/svg/dog.svg',         word:'さる',       pos:1 },
    { char:'れ', icon:'https://koboyo.com/icons/svg/refrigerator.svg',      word:'れいぞうこ', pos:0 },
    { char:'ろ', icon:'https://koboyo.com/icons/svg/candle.svg', word:'ろうそく',  pos:0 },

    { char:'わ', icon:'https://koboyo.com/icons/svg/dog.svg',         word:'わに',       pos:0 },
    { char:'を', icon:'https://koboyo.com/icons/svg/dog.svg',         word:'ねこをみた', pos:2 },
    { char:'ん', icon:'https://koboyo.com/icons/svg/apple.svg',    word:'りんご',     pos:1 },
  ],

  // ==========================================================
  // カタカナ ア〜ナ
  // ==========================================================
  k1: [
    { char:'ア', icon:'https://koboyo.com/icons/svg/ice-cream.svg',       word:'アイス',       pos:0 },
    { char:'イ', icon:'https://koboyo.com/icons/svg/dolphin.svg',           word:'イルカ',       pos:0 },
    { char:'ウ', icon:'https://koboyo.com/icons/svg/hamburger.svg',   word:'ウインナー',   pos:0 },
    { char:'エ', icon:'https://koboyo.com/icons/svg/mitten.svg',      word:'エプロン',     pos:0 },
    { char:'オ', icon:'https://koboyo.com/icons/svg/omelette.svg',        word:'オムライス',   pos:0 },

    { char:'カ', icon:'https://koboyo.com/icons/svg/camera.svg',   word:'カメラ',       pos:0 },
    { char:'キ', icon:'https://koboyo.com/icons/svg/apple.svg',      word:'キウイ',       pos:0 },
    { char:'ク', icon:'https://koboyo.com/icons/svg/cookie.svg',         word:'クッキー',     pos:0 },
    { char:'ケ', icon:'https://koboyo.com/icons/svg/cake.svg',           word:'ケーキ',       pos:0 },
    { char:'コ', icon:'https://koboyo.com/icons/svg/cup.svg',     word:'コップ',       pos:0 },

    { char:'サ', icon:'https://koboyo.com/icons/svg/apple.svg',      word:'サラダ',       pos:0 },
    { char:'シ', icon:'https://koboyo.com/icons/svg/dog.svg',           word:'シマウマ',     pos:0 },
    { char:'ス', icon:'https://koboyo.com/icons/svg/skate.svg',    word:'スケート',     pos:0 },
    { char:'セ', icon:'https://koboyo.com/icons/svg/mitten.svg',      word:'セーター',     pos:0 },
    { char:'ソ', icon:'https://koboyo.com/icons/svg/mitten.svg',      word:'ソックス',     pos:0 },

    { char:'タ', icon:'https://koboyo.com/icons/svg/taxi.svg',     word:'タクシー',     pos:0 },
    { char:'チ', icon:'https://koboyo.com/icons/svg/cheese.svg',     word:'チーズ',       pos:0 },
    { char:'ツ', icon:'https://koboyo.com/icons/svg/tree.svg',           word:'ツリー',       pos:0 },
    { char:'テ', icon:'https://koboyo.com/icons/svg/television.svg',             word:'テレビ',       pos:0 },
    { char:'ト', icon:'https://koboyo.com/icons/svg/apple.svg',      word:'トマト',       pos:0 },

    { char:'ナ', icon:'https://koboyo.com/icons/svg/apple.svg',      word:'ナッツ',       pos:0 },
    { char:'ニ', icon:'https://koboyo.com/icons/svg/newspaper.svg',      word:'ニュース',     pos:0 },
    { char:'ヌ', icon:'https://koboyo.com/icons/svg/canoe.svg',         word:'カヌー',       pos:1 },
    { char:'ネ', icon:'https://koboyo.com/icons/svg/mitten.svg',      word:'ネクタイ',     pos:0 },
    { char:'ノ', icon:'https://koboyo.com/icons/svg/book.svg',           word:'ノート',       pos:0 },
  ],

  // ==========================================================
  // カタカナ ハ〜ン
  // ==========================================================
  k2: [
    { char:'ハ', icon:'https://koboyo.com/icons/svg/hamburger.svg',   word:'ハンバーガー', pos:0 },
    { char:'ヒ', icon:'https://koboyo.com/icons/svg/shield.svg',         word:'ヒーロー',     pos:0 },
    { char:'フ', icon:'https://koboyo.com/icons/svg/cheese.svg',     word:'フォーク',     pos:0 },
    { char:'ヘ', icon:'https://koboyo.com/icons/svg/helicopter.svg',         word:'ヘリコプター', pos:0 },
    { char:'ホ', icon:'https://koboyo.com/icons/svg/hotel.svg',          word:'ホテル',       pos:0 },

    { char:'マ', icon:'https://koboyo.com/icons/svg/microphone.svg',            word:'マイク',       pos:0 },
    { char:'ミ', icon:'https://koboyo.com/icons/svg/cup.svg',     word:'ミルク',       pos:0 },
    { char:'ム', icon:'https://koboyo.com/icons/svg/rubber-duck.svg',           word:'ゴム',         pos:1 },
    { char:'メ', icon:'https://koboyo.com/icons/svg/apple.svg',      word:'メロン',       pos:0 },
    { char:'モ', icon:'https://koboyo.com/icons/svg/robot.svg',      word:'モンスター',   pos:0 },

    { char:'ヤ', icon:'https://koboyo.com/icons/svg/tree.svg',           word:'ヤシ',         pos:0 },
    { char:'ユ', icon:'https://koboyo.com/icons/svg/dog.svg',           word:'ユニコーン',   pos:0 },
    { char:'ヨ', icon:'https://koboyo.com/icons/svg/boat.svg',        word:'ヨット',       pos:0 },

    { char:'ラ', icon:'https://koboyo.com/icons/svg/dog.svg',           word:'ライオン',     pos:0 },
    { char:'リ', icon:'https://koboyo.com/icons/svg/ribbon.svg', word:'リボン', pos:0 },
    { char:'ル', icon:'https://koboyo.com/icons/svg/diamond.svg',        word:'ルビー',       pos:0 },
    { char:'レ', icon:'https://koboyo.com/icons/svg/apple.svg',      word:'レモン',       pos:0 },
    { char:'ロ', icon:'https://koboyo.com/icons/svg/robot.svg',      word:'ロボット',     pos:0 },

    { char:'ワ', icon:'https://koboyo.com/icons/svg/waffle.svg',  word:'ワッフル',     pos:0 },
    { char:'ヲ', icon:'https://koboyo.com/icons/svg/dog.svg',           word:'ネコヲミタ',   pos:2 },  // 助詞「ヲ」を短い文で練習（「を」と同じアプローチ）
    { char:'ン', icon:'https://koboyo.com/icons/svg/waffle.svg',  word:'パン',         pos:1 },
  ],

};
