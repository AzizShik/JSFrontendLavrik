function cleanStr(str) {
  return str.replace(/\s+/g, ' ').trim();
}

function wordsCount(str) {
  let realStr = cleanStr(str);
  return realStr.length > 0 ? (realStr.replace(/\S/g, '').length + 1) : 0;
}

function* getWords(str) {
  let realStr = cleanStr(str);

  if (realStr.length > 0) {
    realStr += ' ';
    let start = 0;
    let current = realStr.indexOf(' ', start); // 4

    while (current !== -1) {
      yield realStr.substring(start, current);
      start = current + 1; // 5
      current = realStr.indexOf(' ', start); //
    }
  }
}

export {
  wordsCount,
  getWords
};