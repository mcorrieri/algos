// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// inputArray = [3, 6, -2, -5, 7, 3];

function solution(inputArray) {
  let max = inputArray[0] * inputArray[1]; // set a base max

  // loop through comparing each product of adjacent elements
  // check if the new product is greater than previous, if so set the max variable to new product
  for (let i = 0; i < inputArray.length; i++) {
    let x = inputArray[i] * inputArray[i + 1];
    if (x > max) {
      max = x;
    }
  }
  return max;
}

// console.log(solution([3, 6, -2, -5, 7, 3])); // 21
console.log(solution([3, 1, 2, 1, 200])); // 200
