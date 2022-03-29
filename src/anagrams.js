const s1 = 'cats';
const s2 = 'tacs';

const anagrams = (s1, s2) => {
  if (s1.length !== s2.length) {
    return false;
  }

  const dict1 = {}
  for (const char of s1) {
    if (!(char in dict1)) {
      dict1[char] = 0;
    }
    dict1[char]++;
  }

  const dict2 = {}
  for (const char of s2) {
    if (!(char in dict2)) {
      dict2[char] = 0;
    }
    dict2[char]++;
  }

  for (const char in dict1) {
    if (dict1[char] !== dict2[char]) {
      return false;
    }
  }

  return true;
};


console.log(anagrams(s1, s2));
