// LONGEST WORD - Return the longest word of a string

function longestWord(sen) {
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  const sorted = wordArr.sort(function (a, b) {
    return b.length - a.length;
  });
  const longestWordArr = sorted.filter(function (word) {
    return word.length === sorted[0].length;
  });
  if (longestWordArr.length === 1) {
    return longestWordArr[0];
  } else {
    return longestWordArr;
  }
}

console.log(longestWord("I love TURTLES")); // turtles
console.log(longestWord("a b dishwasher")); // dishwasher
console.log(longestWord("indubitably, unsure, plants")); // indubitably
