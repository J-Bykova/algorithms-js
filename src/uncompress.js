function uncompress(s) {
  let result = '';
  let i = 0;
  let j = 0;

  while (j < s.length) {
    if (isFinite(s[j])) {
      j += 1;
    } else {
      const num = Number(s.slice(i, j));
      for (let count = 0; count < num; count++) {
        result += s[j];
      }
      j += 1;
      i = j;
    }
  }

  return result;
}

console.log(uncompress('2c3a1t'));
