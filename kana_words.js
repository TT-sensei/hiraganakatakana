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
    { char:'あ', icon:'emoji:🌧️',        word:'あめ',word:'あめ',       pos:0 },
    { char:'い', icon:'https://koboyo.com/icons/svg/dog.svg',         word:'いぬ',word:'いぬ',       pos:0 },
    { char:'う', icon:'emoji:🐎',         word:'うま',word:'うま',       pos:0 },
    { char:'え', icon:'https://koboyo.com/icons/svg/child-picture-book.svg',    word:'えほん',word:'えほん',     pos:0 },
    { char:'お', icon:'emoji:🍙',    word:'おにぎり',word:'おにぎり',   pos:0 },

    { char:'か', icon:'https://koboyo.com/icons/svg/frog.svg',         word:'かえる',word:'かえる',     pos:0 },
    { char:'き', icon:'https://koboyo.com/icons/svg/mushroom.svg',       word:'きのこ',word:'きのこ',     pos:0 },
    { char:'く', icon:'https://koboyo.com/icons/svg/bear.svg',         word:'くま',word:'くま',       pos:0 },
    { char:'け', icon:'https://koboyo.com/icons/svg/caterpillar.svg',   word:'けむし',word:'けむし',     pos:0 },
    { char:'こ', icon:'https://koboyo.com/icons/svg/koala.svg',         word:'こあら',word:'こあら',     pos:0 },

    { char:'さ', icon:'https://koboyo.com/icons/svg/fish.svg',     word:'さかな',word:'さかな',     pos:0 },
    { char:'し', icon:'https://koboyo.com/icons/svg/deer.svg',         word:'しか',word:'しか',       pos:0 },
    { char:'す', icon:'emoji:🍉',    word:'すいか',word:'すいか',     pos:0 },
    { char:'せ', icon:'emoji:🍘',       word:'せんべい',word:'せんべい',   pos:0 },
    { char:'そ', icon:'emoji:🌤️',     word:'そら',word:'そら',       pos:0 },

    { char:'た', icon:'https://koboyo.com/icons/svg/egg.svg',          word:'たまご',word:'たまご',     pos:0 },
    { char:'ち', icon:'https://koboyo.com/icons/svg/butterfly.svg', word:'ちょう',word:'ちょう',     pos:0 },
    { char:'つ', icon:'https://koboyo.com/icons/svg/moon.svg',    word:'つき',word:'つき',       pos:0 },
    { char:'て', icon:'https://koboyo.com/icons/svg/mitten.svg',    word:'てぶくろ',word:'てぶくろ',   pos:0 },
    { char:'と', icon:'emoji:🐯',         word:'とら',word:'とら',       pos:0 },

    { char:'な', icon:'https://koboyo.com/icons/svg/pear.svg',    word:'なし',word:'なし',       pos:0 },
    { char:'に', icon:'https://koboyo.com/icons/svg/rainbow.svg',        word:'にじ',word:'にじ',       pos:0 },
    { char:'ぬ', icon:'emoji:🧵',    word:'ぬの',word:'ぬの',       pos:0 },
    { char:'ね', icon:'https://koboyo.com/icons/svg/cat.svg',         word:'ねこ',word:'ねこ',       pos:0 },
    { char:'の', icon:'https://koboyo.com/icons/svg/vehicle.svg', word:'のりもの',word:'のりもの', pos:0 },
  ],

  // ==========================================================
  // ひらがな は〜ん
  // ==========================================================
  h2: [
    { char:'は', icon:'https://koboyo.com/icons/svg/flower.svg', word:'はな',word:'はな',      pos:0 },
    { char:'ひ', icon:'emoji:🐥', word:'ひよこ',word:'ひよこ',     pos:0 },
    { char:'ふ', icon:'https://koboyo.com/icons/svg/boat.svg',      word:'ふね',word:'ふね',       pos:0 },
    { char:'へ', icon:'emoji:🐍',         word:'へび',word:'へび',       pos:0 },
    { char:'ほ', icon:'https://koboyo.com/icons/svg/star.svg',         word:'ほし',word:'ほし',       pos:0 },

    { char:'ま', icon:'emoji:🛏️',          word:'まくら',word:'まくら',     pos:0 },
    { char:'み', icon:'https://koboyo.com/icons/svg/ear.svg',      word:'みみ',word:'みみ',       pos:0 },
    { char:'む', icon:'https://koboyo.com/icons/svg/bug.svg',   word:'むし',word:'むし',       pos:0 },
    { char:'め', icon:'https://koboyo.com/icons/svg/glasses.svg',   word:'めがね',word:'めがね',     pos:0 },
    { char:'も', icon:'emoji:🍑',    word:'もも',word:'もも',       pos:0 },

    { char:'や', icon:'https://koboyo.com/icons/svg/mountain.svg',    word:'やま',word:'やま',       pos:0 },
    { char:'ゆ', icon:'emoji:❄️',      word:'ゆき',word:'ゆき',       pos:0 },
    { char:'よ', icon:'emoji:🌙',  word:'よる',word:'よる',       pos:0 },

    { char:'ら', icon:'https://koboyo.com/icons/svg/lion.svg',         word:'らいおん',word:'らいおん',   pos:0 },
    { char:'り', icon:'https://koboyo.com/icons/svg/apple.svg',    word:'りんご',word:'りんご',     pos:0 },
    { char:'る', icon:'emoji:🐒',         word:'さる',word:'さる',       pos:1 },
    { char:'れ', icon:'https://koboyo.com/icons/svg/refrigerator.svg',      word:'れいぞうこ',word:'れいぞうこ', pos:0 },
    { char:'ろ', icon:'https://koboyo.com/icons/svg/candle.svg', word:'ろうそく',word:'ろうそく',  pos:0 },

    { char:'わ', icon:'emoji:🐊',         word:'わに',word:'わに',       pos:0 },
    { char:'を', icon:'https://koboyo.com/icons/svg/cat.svg',         word:'ねこをみた',word:'ねこをみた', pos:2 },
    { char:'ん', icon:'https://koboyo.com/icons/svg/apple.svg',    word:'りんご',word:'りんご',     pos:1 },
  ],

  // ==========================================================
  // カタカナ ア〜ナ
  // ==========================================================
  k1: [
    { char:'ア', icon:'https://koboyo.com/icons/svg/ice-cream.svg',       word:'アイス',word:'アイス',       pos:0 },
    { char:'イ', icon:'https://koboyo.com/icons/svg/dolphin.svg',           word:'イルカ',word:'イルカ',       pos:0 },
    { char:'ウ', icon:'emoji:🌭',   word:'ウインナー',word:'ウインナー',   pos:0 },
    { char:'エ', icon:'https://koboyo.com/icons/svg/apron.svg',      word:'エプロン',word:'エプロン',     pos:0 },
    { char:'オ', icon:'emoji:🍳',        word:'オムライス',word:'オムライス',   pos:0 },

    { char:'カ', icon:'https://koboyo.com/icons/svg/camera.svg',   word:'カメラ',word:'カメラ',       pos:0 },
    { char:'キ', icon:'emoji:🥝',      word:'キウイ',word:'キウイ',       pos:0 },
    { char:'ク', icon:'https://koboyo.com/icons/svg/cookie.svg',         word:'クッキー',word:'クッキー',     pos:0 },
    { char:'ケ', icon:'https://koboyo.com/icons/svg/cake.svg',           word:'ケーキ',word:'ケーキ',       pos:0 },
    { char:'コ', icon:'https://koboyo.com/icons/svg/cup.svg',     word:'コップ',word:'コップ',       pos:0 },

    { char:'サ', icon:'https://koboyo.com/icons/svg/salad.svg',      word:'サラダ',word:'サラダ',       pos:0 },
    { char:'シ', icon:'emoji:🦓',           word:'シマウマ',word:'シマウマ',     pos:0 },
    { char:'ス', icon:'https://koboyo.com/icons/svg/skate.svg',    word:'スケート',word:'スケート',     pos:0 },
    { char:'セ', icon:'https://koboyo.com/icons/svg/sweater.svg',      word:'セーター',word:'セーター',     pos:0 },
    { char:'ソ', icon:'https://koboyo.com/icons/svg/sock.svg',      word:'ソックス',word:'ソックス',     pos:0 },

    { char:'タ', icon:'https://koboyo.com/icons/svg/taxi.svg',     word:'タクシー',word:'タクシー',     pos:0 },
    { char:'チ', icon:'https://koboyo.com/icons/svg/cheese.svg',     word:'チーズ',word:'チーズ',       pos:0 },
    { char:'ツ', icon:'https://koboyo.com/icons/svg/tree.svg',           word:'ツリー',word:'ツリー',       pos:0 },
    { char:'テ', icon:'https://koboyo.com/icons/svg/television.svg',             word:'テレビ',word:'テレビ',       pos:0 },
    { char:'ト', icon:'emoji:🍅',      word:'トマト',word:'トマト',       pos:0 },

    { char:'ナ', icon:'emoji:🥜',      word:'ナッツ',word:'ナッツ',       pos:0 },
    { char:'ニ', icon:'https://koboyo.com/icons/svg/newspaper.svg',      word:'ニュース',word:'ニュース',     pos:0 },
    { char:'ヌ', icon:'https://koboyo.com/icons/svg/canoe.svg',         word:'カヌー',word:'カヌー',       pos:1 },
    { char:'ネ', icon:'https://koboyo.com/icons/svg/tie.svg',      word:'ネクタイ',word:'ネクタイ',     pos:0 },
    { char:'ノ', icon:'https://koboyo.com/icons/svg/notebook.svg',           word:'ノート',word:'ノート',       pos:0 },
  ],

  // ==========================================================
  // カタカナ ハ〜ン
  // ==========================================================
  k2: [
    { char:'ハ', icon:'https://koboyo.com/icons/svg/hamburger.svg',   word:'ハンバーガー',word:'ハンバーガー', pos:0 },
    { char:'ヒ', icon:'emoji:🦸',         word:'ヒーロー',word:'ヒーロー',     pos:0 },
    { char:'フ', icon:'https://koboyo.com/icons/svg/fork.svg',     word:'フォーク',word:'フォーク',     pos:0 },
    { char:'ヘ', icon:'https://koboyo.com/icons/svg/helicopter.svg',         word:'ヘリコプター',word:'ヘリコプター', pos:0 },
    { char:'ホ', icon:'https://koboyo.com/icons/svg/hotel.svg',          word:'ホテル',word:'ホテル',       pos:0 },

    { char:'マ', icon:'https://koboyo.com/icons/svg/microphone.svg',            word:'マイク',word:'マイク',       pos:0 },
    { char:'ミ', icon:'emoji:🥛',     word:'ミルク',word:'ミルク',       pos:0 },
    { char:'ム', icon:'emoji:🧽',           word:'ゴム',word:'ゴム',         pos:1 },
    { char:'メ', icon:'emoji:🍈',      word:'メロン',word:'メロン',       pos:0 },
    { char:'モ', icon:'emoji:👾',      word:'モンスター',word:'モンスター',   pos:0 },

    { char:'ヤ', icon:'emoji:🌴',           word:'ヤシ',word:'ヤシ',         pos:0 },
    { char:'ユ', icon:'emoji:🦄',           word:'ユニコーン',word:'ユニコーン',   pos:0 },
    { char:'ヨ', icon:'https://koboyo.com/icons/svg/yacht.svg',        word:'ヨット',word:'ヨット',       pos:0 },

    { char:'ラ', icon:'https://koboyo.com/icons/svg/lion.svg',           word:'ライオン',word:'ライオン',     pos:0 },
    { char:'リ', icon:'https://koboyo.com/icons/svg/ribbon.svg', word:'リボン',word:'リボン', pos:0 },
    { char:'ル', icon:'emoji:💎',        word:'ルビー',word:'ルビー',       pos:0 },
    { char:'レ', icon:'emoji:🍋',      word:'レモン',word:'レモン',       pos:0 },
    { char:'ロ', icon:'https://koboyo.com/icons/svg/robot.svg',      word:'ロボット',word:'ロボット',     pos:0 },

    { char:'ワ', icon:'https://koboyo.com/icons/svg/waffle.svg',  word:'ワッフル',word:'ワッフル',     pos:0 },
    { char:'ヲ', icon:'https://koboyo.com/icons/svg/cat.svg',           word:'ネコヲミタ',word:'ネコヲミタ',   pos:2 },  // 助詞「ヲ」を短い文で練習（「を」と同じアプローチ）
    { char:'ン', icon:'https://koboyo.com/icons/svg/bread.svg',  word:'パン',word:'パン',         pos:1 },
  ],

};
