// ANAGRAMS - Return true if both inputs are considered anagrams, false if they are not

function isAnagram(str1, str2) {
  // strictly compare str1 to str2
  return formatStr(str1) === formatStr(str2);
}

function formatStr(str) {
  // replace words using regex, turn to lowercase, split into an array, sort the array, join back into string
  // Line 14 for example: "cdeir" from 'cider' === "cdeir" from 'cried' so it is an Anagram
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

console.log(isAnagram("cider", "cried")); // true
console.log(isAnagram("night", "thing")); // true
console.log(isAnagram("hotdog", "bathtub")); // false
console.log(isAnagram("huh", "bella")); // false

console.log(formatStr("cried"));
console.log(formatStr("cider"));
