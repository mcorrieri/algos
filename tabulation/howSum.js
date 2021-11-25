// How Sum? (Tabulation)
// Write a function that takes in a target sum and an array of numbers as arguments. This should return an array containing any combination of elements that add up to the targetSum, or return null if it is not possible

const howSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];

  // m iterations
  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      // n iterations
      for (let num of numbers) {
        table[i + num] = [...table[i], num];
      }
    }
  }
  return table[targetSum];
};

console.log(howSum(7, [2, 3])); // [3, 2, 2]
console.log(howSum(7, [5, 3, 4, 7])); // [4, 3]
console.log(howSum(7, [2, 4])); // null
console.log(howSum(8, [2, 3, 5])); // [2, 2, 2, 2]
console.log(howSum(300, [7, 14])); // null
