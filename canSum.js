// Can sum??
// Write a function that takes in a target sum and numbers(arr), Return True of False based on if we can add the numbers in the array and if they equal our target sum

// SLOW way:
// const canSum = (targetSum, numbers) => {
//   if (targetSum === 0) return true;
//   if (targetSum <= 0) return false;

//   for (let num of numbers) {
//     const remainder = targetSum - num;
//     if (canSum(remainder, numbers) === true) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(canSum(0, [2, 4])); // true
// console.log(canSum(-1, [2, 4])); // false
// console.log(canSum(7, [2, 4])); // false
// console.log(canSum(7, [5, 3, 4, 7])); // true
// console.log(canSum(4940, [5, 3, 4, 7, 100, 2, 34, 45, 98, 53, 43])); // bad times

// Use MEMOIZATION to make it faster

// FAST way:
const canSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
};

console.log(canSum(0, [2, 4])); // true
console.log(canSum(-1, [2, 4])); // false
console.log(canSum(7, [2, 4])); // false
console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(4940, [5, 3, 4, 7, 100, 2, 34, 45, 98, 53, 43])); // true
