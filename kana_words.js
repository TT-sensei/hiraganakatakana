// ============================================================
// かなマスター 単語データ（小1最適版）
// ============================================================
// 構造: { char, emoji, word, pos }
//   char : 練習する文字
//   emoji: 絵文字（ヒント）
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
    { char:'あ', emoji:'🌧️', word:'あめ',       pos:0 },
    { char:'い', emoji:'🐶',  word:'いぬ',       pos:0 },
    { char:'う', emoji:'🐴',  word:'うま',       pos:0 },
    { char:'え', emoji:'📖',  word:'えほん',     pos:0 },
    { char:'お', emoji:'🍙',  word:'おにぎり',   pos:0 },

    { char:'か', emoji:'🐸',  word:'かえる',     pos:0 },
    { char:'き', emoji:'🍄',  word:'きのこ',     pos:0 },
    { char:'く', emoji:'🐻',  word:'くま',       pos:0 },
    { char:'け', emoji:'🐛',  word:'けむし',     pos:0 },
    { char:'こ', emoji:'🐨',  word:'こあら',     pos:0 },

    { char:'さ', emoji:'🐟',  word:'さかな',     pos:0 },
    { char:'し', emoji:'🦌',  word:'しか',       pos:0 },
    { char:'す', emoji:'🍉',  word:'すいか',     pos:0 },
    { char:'せ', emoji:'🍘',  word:'せんべい',   pos:0 },
    { char:'そ', emoji:'🌌',  word:'そら',       pos:0 },

    { char:'た', emoji:'🥚',  word:'たまご',     pos:0 },
    { char:'ち', emoji:'🦋',  word:'ちょう',     pos:0 },
    { char:'つ', emoji:'🌙',  word:'つき',       pos:0 },
    { char:'て', emoji:'🧤',  word:'てぶくろ',   pos:0 },
    { char:'と', emoji:'🐯',  word:'とら',       pos:0 },

    { char:'な', emoji:'🍐',  word:'なし',       pos:0 },
    { char:'に', emoji:'🌈',  word:'にじ',       pos:0 },
    { char:'ぬ', emoji:'🧵',  word:'ぬの',       pos:0 },
    { char:'ね', emoji:'🐈',  word:'ねこ',       pos:0 },
    { char:'の', emoji:'🚗',  word:'のりもの',   pos:0 },
  ],

  // ==========================================================
  // ひらがな は〜ん
  // ==========================================================
  h2: [
    { char:'は', emoji:'🌸',  word:'はな',       pos:0 },
    { char:'ひ', emoji:'🐤',  word:'ひよこ',     pos:0 },
    { char:'ふ', emoji:'🚢',  word:'ふね',       pos:0 },
    { char:'へ', emoji:'🐍',  word:'へび',       pos:0 },
    { char:'ほ', emoji:'⭐',  word:'ほし',       pos:0 },

    { char:'ま', emoji:'🛏️',  word:'まくら',     pos:0 },
    { char:'み', emoji:'👂',  word:'みみ',       pos:0 },
    { char:'む', emoji:'🪲',  word:'むし',       pos:0 },
    { char:'め', emoji:'👓',  word:'めがね',     pos:0 },
    { char:'も', emoji:'🍑',  word:'もも',       pos:0 },

    { char:'や', emoji:'🏔️', word:'やま',       pos:0 },
    { char:'ゆ', emoji:'❄️',  word:'ゆき',       pos:0 },
    { char:'よ', emoji:'🌃',  word:'よる',       pos:0 },

    { char:'ら', emoji:'🦁',  word:'らいおん',   pos:0 },
    { char:'り', emoji:'🍎',  word:'りんご',     pos:0 },
    { char:'る', emoji:'🐒',  word:'さる',       pos:1 },
    { char:'れ', emoji:'🧊',  word:'れいぞうこ', pos:0 },
    { char:'ろ', emoji:'🕯️', word:'ろうそく',   pos:0 },

    { char:'わ', emoji:'🐊',  word:'わに',       pos:0 },
    { char:'を', emoji:'🐈',  word:'ねこをみた', pos:2 },
    { char:'ん', emoji:'🍎',  word:'りんご',     pos:1 },
  ],

  // ==========================================================
  // カタカナ ア〜ナ
  // ==========================================================
  k1: [
    { char:'ア', emoji:'🍦',  word:'アイス',       pos:0 },
    { char:'イ', emoji:'🐬',  word:'イルカ',       pos:0 },
    { char:'ウ', emoji:'🌭',  word:'ウインナー',   pos:0 },
    { char:'エ', emoji:'👗',  word:'エプロン',     pos:0 },
    { char:'オ', emoji:'🍳',  word:'オムライス',   pos:0 },

    { char:'カ', emoji:'📷',  word:'カメラ',       pos:0 },
    { char:'キ', emoji:'🥝',  word:'キウイ',       pos:0 },
    { char:'ク', emoji:'🍪',  word:'クッキー',     pos:0 },
    { char:'ケ', emoji:'🍰',  word:'ケーキ',       pos:0 },
    { char:'コ', emoji:'🥛',  word:'コップ',       pos:0 },

    { char:'サ', emoji:'🥗',  word:'サラダ',       pos:0 },
    { char:'シ', emoji:'🦓',  word:'シマウマ',     pos:0 },
    { char:'ス', emoji:'⛸️', word:'スケート',     pos:0 },
    { char:'セ', emoji:'🧶',  word:'セーター',     pos:0 },
    { char:'ソ', emoji:'🧦',  word:'ソックス',     pos:0 },

    { char:'タ', emoji:'🚕',  word:'タクシー',     pos:0 },
    { char:'チ', emoji:'🧀',  word:'チーズ',       pos:0 },
    { char:'ツ', emoji:'🎄',  word:'ツリー',       pos:0 },
    { char:'テ', emoji:'📺',  word:'テレビ',       pos:0 },
    { char:'ト', emoji:'🍅',  word:'トマト',       pos:0 },

    { char:'ナ', emoji:'🥜',  word:'ナッツ',       pos:0 },
    { char:'ニ', emoji:'📰',  word:'ニュース',     pos:0 },
    { char:'ヌ', emoji:'🛶',  word:'カヌー',       pos:1 },
    { char:'ネ', emoji:'👔',  word:'ネクタイ',     pos:0 },
    { char:'ノ', emoji:'📓',  word:'ノート',       pos:0 },
  ],

  // ==========================================================
  // カタカナ ハ〜ン
  // ==========================================================
  k2: [
    { char:'ハ', emoji:'🍔',  word:'ハンバーガー', pos:0 },
    { char:'ヒ', emoji:'🦸',  word:'ヒーロー',     pos:0 },
    { char:'フ', emoji:'🍴',  word:'フォーク',     pos:0 },
    { char:'ヘ', emoji:'🚁',  word:'ヘリコプター', pos:0 },
    { char:'ホ', emoji:'🏨',  word:'ホテル',       pos:0 },

    { char:'マ', emoji:'🎤',  word:'マイク',       pos:0 },
    { char:'ミ', emoji:'🥛',  word:'ミルク',       pos:0 },
    { char:'ム', emoji:'🌕',  word:'ムーン',       pos:0 },
    { char:'メ', emoji:'🍈',  word:'メロン',       pos:0 },
    { char:'モ', emoji:'👾',  word:'モンスター',   pos:0 },

    { char:'ヤ', emoji:'🌴',  word:'ヤシ',         pos:0 },
    { char:'ユ', emoji:'🦄',  word:'ユニコーン',   pos:0 },
    { char:'ヨ', emoji:'⛵',  word:'ヨット',       pos:0 },

    { char:'ラ', emoji:'🦁',  word:'ライオン',     pos:0 },
    { char:'リ', emoji:'🎀',  word:'リボン',       pos:0 },
    { char:'ル', emoji:'💎',  word:'ルビー',       pos:0 },
    { char:'レ', emoji:'🍋',  word:'レモン',       pos:0 },
    { char:'ロ', emoji:'🤖',  word:'ロボット',     pos:0 },

    { char:'ワ', emoji:'🧇',  word:'ワッフル',     pos:0 },
    { char:'ヲ', emoji:'🐈',  word:'ネコヲミタ',   pos:2 },  // 助詞「ヲ」を短い文で練習（「を」と同じアプローチ）
    { char:'ン', emoji:'🍞',  word:'パン',         pos:1 },
  ],

};
