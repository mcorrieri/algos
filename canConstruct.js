const canConstruct = (target, wordBank) => {
  if (target === "") {
    return true;
  }
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank) === true) {
        return true;
      }
    }
  }
  return false;
};

console.log(canConstruct("abcdef", ["ab", "cd", "ef", "abcd"]));
console.log(canConstruct("pickle", ["ab", "pi", "ck", "eeee"]));
console.log(canConstruct("bottle", ["bot", "tttt", "hey", "tle"]));
console.log(
  canConstruct("heeeeeeeeeeeeeeeeeeeeynooow", [
    "p",
    "ppp",
    "hepppppy",
    "ppppppppp",
  ])
);
