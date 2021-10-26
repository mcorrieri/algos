// SLOW
// const fib = (n) => {
//   if (n <= 2) return 1;
//   return fib(n - 1) + fib(n - 2);
// };

// console.log(fib(6));
// console.log(fib(7));
// console.log(fib(8));
// console.log(fib(104)); // This takes a long time...if only there was a way to make it faster

// Using memoization!

// In computing, memoization or memoisation is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

// FAST using memoization
const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(54));
console.log(fib(104));
