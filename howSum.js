// How Sum?
// Write a function that takes in a target sum and an array of numbers as arguments. This should return an array containing any combination of elements that add up to the targetSum, or return null if it is not possible

// SLOW way:
// const howSum = (targetSum, numbers) => {
//   if (targetSum === 0) return [];
//   if (targetSum < 0) return null;

//   for (let num of numbers) {
//     const remainder = targetSum - num;
//     const remainderRes = howSum(remainder, numbers);
//     if (remainderRes !== null) {
//       return [...remainderRes, num];
//     }
//   }
//   return null;
// };

// console.log(howSum(7, [2, 3])); // [3, 2, 2]
// console.log(howSum(7, [5, 3, 4, 7])); // [4, 3]
// console.log(howSum(7, [2, 4])); // null
// console.log(howSum(300, [7, 14])); // ...takes a long time

// FAST:
const howSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderRes = howSum(remainder, numbers, memo);
    if (remainderRes !== null) {
      memo[targetSum] = [...remainderRes, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
};

console.log(howSum(7, [2, 3])); // [3, 2, 2]
console.log(howSum(7, [5, 3, 4, 7])); // [4, 3]
console.log(howSum(7, [2, 4])); // null
console.log(howSum(300, [7, 14])); // null
