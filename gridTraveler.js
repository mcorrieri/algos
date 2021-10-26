// GRID TRAVELER
// Calculate how many options you have to get to the end of a grid if only moving down or right

// SLOW Way:

const gridTraveler = (m, n) => {
  if (m === 1 || n === 1) return 1; // If the grid rows or columns is 1 we just move once
  if (m === 0 || n === 0) return 0; // Cannot have a grid if rows or columns = 0
  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1); // Brute force recursion
};

// console.log(gridTraveler(2, 3)); // 3
// console.log(gridTraveler(4, 4)); // 20
// console.log(gridTraveler(142, 14)); // ...this is gonna take a while...hm how to make it faster

// Using memoization!

// In computing, memoization or memoisation is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

// FAST way:

const gridTraveler = (m, n, memo = {}) => {
  const key = m + "" + n;

  if (key in memo) return memo[key];
  if (m === 1 || n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  return memo[key];
};

console.log(gridTraveler(2, 3)); // 3
console.log(gridTraveler(4, 4)); // 20
console.log(gridTraveler(142, 14)); // big ole number AND QUICK
