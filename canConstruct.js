// Can Construct
// Show true or false depending on if we are able to create the target using the elements in the word bank

// Slower way
// const canConstruct = (target, wordBank) => {
//   if (target === "") {
//     return true;
//   }
//   for (let word of wordBank) {
//     if (target.indexOf(word) === 0) {
//       const suffix = target.slice(word.length);
//       if (canConstruct(suffix, wordBank) === true) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

// Fast way using memoization
const canConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return true;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank, memo) === true) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
};

console.log(canConstruct("abcdef", ["ab", "cd", "ef", "abcd"])); // true
console.log(canConstruct("pickle", ["ab", "pi", "ck", "eeee"])); // false
console.log(canConstruct("bottle", ["bot", "tttt", "hey", "tle"])); // true
console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeey", [
    "eee",
    "eeeeeee",
    "eeeeeeeeeeee",
    "eeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  ]) // false
);
