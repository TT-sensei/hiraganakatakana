(() => {
  "use strict";

  // かなカナの既存データから、ひらがなで書ける語を自動収集。
  // 同じ語が複数の文字に登録されていても1回だけ扱う。
  const all = Object.values(typeof KANA_WORDS !== "undefined" ? KANA_WORDS : {}).flat();
  const words = [...new Map(all.filter(x => x && x.word).map(x => [x.word, {word:x.word, icon:x.icon || ""}])).values()]
    .filter(x => /^[ぁ-ゖー]+$/.test(x.word))
    .filter(x => x.word.length >= 2 && x.word.length <= 6)
    .filter(x => !/[っゃゅょぁぃぅぇぉゎ]/.test(x.word));;