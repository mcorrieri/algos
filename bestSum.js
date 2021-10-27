// Best sum
// Same problem as howSum however, return the shortest array of elements to solve the problem

// Slow:
// const bestSum = (targetSum, numbers) => {
//   if (targetSum === 0) return [];
//   if (targetSum < 0) return null;

//   let shortestCombo = null;

//   for (let num of numbers) {
//     const remainder = targetSum - num;
//     const remainderCombo = bestSum(remainder, numbers);
//     if (remainderCombo !== null) {
//       const combination = [...remainderCombo, num];
//       if (shortestCombo == null || combination.length < shortestCombo.length) {
//         shortestCombo = combination;
//       }
//     }
//   }
//   return shortestCombo;
// };

// Fast
const bestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombo = null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombo = bestSum(remainder, numbers, memo);
    if (remainderCombo !== null) {
      const combination = [...remainderCombo, num];
      if (shortestCombo == null || combination.length < shortestCombo.length) {
        shortestCombo = combination;
      }
    }
  }
  memo[targetSum] = shortestCombo;
  return shortestCombo;
};

console.log(bestSum(7, [5, 3, 4, 7])); // [7]
console.log(bestSum(8, [2, 3, 5])); // [3, 5]
console.log(bestSum(100, [1, 2, 5, 25])); //...takes a long time (without memo) [25, 25, 25, 25]
