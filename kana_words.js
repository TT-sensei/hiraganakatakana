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
    { char:'あ', icon:'rainy',        word:'あめ',       pos:0 },
    { char:'い', icon:'pets',         word:'いぬ',       pos:0 },
    { char:'う', icon:'pets',         word:'うま',       pos:0 },
    { char:'え', icon:'menu_book',    word:'えほん',     pos:0 },
    { char:'お', icon:'rice_bowl',    word:'おにぎり',   pos:0 },

    { char:'か', icon:'pets',         word:'かえる',     pos:0 },
    { char:'き', icon:'forest',       word:'きのこ',     pos:0 },
    { char:'く', icon:'pets',         word:'くま',       pos:0 },
    { char:'け', icon:'bug_report',   word:'けむし',     pos:0 },
    { char:'こ', icon:'pets',         word:'こあら',     pos:0 },

    { char:'さ', icon:'set_meal',     word:'さかな',     pos:0 },
    { char:'し', icon:'pets',         word:'しか',       pos:0 },
    { char:'す', icon:'nutrition',    word:'すいか',     pos:0 },
    { char:'せ', icon:'cookie',       word:'せんべい',   pos:0 },
    { char:'そ', icon:'wb_sunny',     word:'そら',       pos:0 },

    { char:'た', icon:'egg',          word:'たまご',     pos:0 },
    { char:'ち', icon:'flutter_dash', word:'ちょう',     pos:0 },
    { char:'つ', icon:'dark_mode',    word:'つき',       pos:0 },
    { char:'て', icon:'checkroom',    word:'てぶくろ',   pos:0 },
    { char:'と', icon:'pets',         word:'とら',       pos:0 },

    { char:'な', icon:'nutrition',    word:'なし',       pos:0 },
    { char:'に', icon:'rainy',        word:'にじ',       pos:0 },
    { char:'ぬ', icon:'checkroom',    word:'ぬの',       pos:0 },
    { char:'ね', icon:'pets',         word:'ねこ',       pos:0 },
    { char:'の', icon:'directions_car', word:'のりもの', pos:0 },
  ],

  // ==========================================================
  // ひらがな は〜ん
  // ==========================================================
  h2: [
    { char:'は', icon:'local_florist', word:'はな',      pos:0 },
    { char:'ひ', icon:'flutter_dash', word:'ひよこ',     pos:0 },
    { char:'ふ', icon:'sailing',      word:'ふね',       pos:0 },
    { char:'へ', icon:'pets',         word:'へび',       pos:0 },
    { char:'ほ', icon:'star',         word:'ほし',       pos:0 },

    { char:'ま', icon:'bed',          word:'まくら',     pos:0 },
    { char:'み', icon:'hearing',      word:'みみ',       pos:0 },
    { char:'む', icon:'bug_report',   word:'むし',       pos:0 },
    { char:'め', icon:'visibility',   word:'めがね',     pos:0 },
    { char:'も', icon:'nutrition',    word:'もも',       pos:0 },

    { char:'や', icon:'landscape',    word:'やま',       pos:0 },
    { char:'ゆ', icon:'ac_unit',      word:'ゆき',       pos:0 },
    { char:'よ', icon:'nights_stay',  word:'よる',       pos:0 },

    { char:'ら', icon:'pets',         word:'らいおん',   pos:0 },
    { char:'り', icon:'nutrition',    word:'りんご',     pos:0 },
    { char:'る', icon:'pets',         word:'さる',       pos:1 },
    { char:'れ', icon:'kitchen',      word:'れいぞうこ', pos:0 },
    { char:'ろ', icon:'emoji_objects', word:'ろうそく',  pos:0 },

    { char:'わ', icon:'pets',         word:'わに',       pos:0 },
    { char:'を', icon:'pets',         word:'ねこをみた', pos:2 },
    { char:'ん', icon:'nutrition',    word:'りんご',     pos:1 },
  ],

  // ==========================================================
  // カタカナ ア〜ナ
  // ==========================================================
  k1: [
    { char:'ア', icon:'icecream',       word:'アイス',       pos:0 },
    { char:'イ', icon:'pool',           word:'イルカ',       pos:0 },
    { char:'ウ', icon:'lunch_dining',   word:'ウインナー',   pos:0 },
    { char:'エ', icon:'checkroom',      word:'エプロン',     pos:0 },
    { char:'オ', icon:'skillet',        word:'オムライス',   pos:0 },

    { char:'カ', icon:'photo_camera',   word:'カメラ',       pos:0 },
    { char:'キ', icon:'nutrition',      word:'キウイ',       pos:0 },
    { char:'ク', icon:'cookie',         word:'クッキー',     pos:0 },
    { char:'ケ', icon:'cake',           word:'ケーキ',       pos:0 },
    { char:'コ', icon:'local_cafe',     word:'コップ',       pos:0 },

    { char:'サ', icon:'nutrition',      word:'サラダ',       pos:0 },
    { char:'シ', icon:'pets',           word:'シマウマ',     pos:0 },
    { char:'ス', icon:'ice_skating',    word:'スケート',     pos:0 },
    { char:'セ', icon:'checkroom',      word:'セーター',     pos:0 },
    { char:'ソ', icon:'checkroom',      word:'ソックス',     pos:0 },

    { char:'タ', icon:'local_taxi',     word:'タクシー',     pos:0 },
    { char:'チ', icon:'restaurant',     word:'チーズ',       pos:0 },
    { char:'ツ', icon:'park',           word:'ツリー',       pos:0 },
    { char:'テ', icon:'tv',             word:'テレビ',       pos:0 },
    { char:'ト', icon:'nutrition',      word:'トマト',       pos:0 },

    { char:'ナ', icon:'nutrition',      word:'ナッツ',       pos:0 },
    { char:'ニ', icon:'newspaper',      word:'ニュース',     pos:0 },
    { char:'ヌ', icon:'rowing',         word:'カヌー',       pos:1 },
    { char:'ネ', icon:'checkroom',      word:'ネクタイ',     pos:0 },
    { char:'ノ', icon:'book',           word:'ノート',       pos:0 },
  ],

  // ==========================================================
  // カタカナ ハ〜ン
  // ==========================================================
  k2: [
    { char:'ハ', icon:'lunch_dining',   word:'ハンバーガー', pos:0 },
    { char:'ヒ', icon:'shield',         word:'ヒーロー',     pos:0 },
    { char:'フ', icon:'restaurant',     word:'フォーク',     pos:0 },
    { char:'ヘ', icon:'flight',         word:'ヘリコプター', pos:0 },
    { char:'ホ', icon:'hotel',          word:'ホテル',       pos:0 },

    { char:'マ', icon:'mic',            word:'マイク',       pos:0 },
    { char:'ミ', icon:'local_cafe',     word:'ミルク',       pos:0 },
    { char:'ム', icon:'toys',           word:'ゴム',         pos:1 },
    { char:'メ', icon:'nutrition',      word:'メロン',       pos:0 },
    { char:'モ', icon:'smart_toy',      word:'モンスター',   pos:0 },

    { char:'ヤ', icon:'park',           word:'ヤシ',         pos:0 },
    { char:'ユ', icon:'pets',           word:'ユニコーン',   pos:0 },
    { char:'ヨ', icon:'sailing',        word:'ヨット',       pos:0 },

    { char:'ラ', icon:'pets',           word:'ライオン',     pos:0 },
    { char:'リ', icon:'featured_seasonal_and_gifts', word:'リボン', pos:0 },
    { char:'ル', icon:'diamond',        word:'ルビー',       pos:0 },
    { char:'レ', icon:'nutrition',      word:'レモン',       pos:0 },
    { char:'ロ', icon:'smart_toy',      word:'ロボット',     pos:0 },

    { char:'ワ', icon:'bakery_dining',  word:'ワッフル',     pos:0 },
    { char:'ヲ', icon:'pets',           word:'ネコヲミタ',   pos:2 },  // 助詞「ヲ」を短い文で練習（「を」と同じアプローチ）
    { char:'ン', icon:'bakery_dining',  word:'パン',         pos:1 },
  ],

};
