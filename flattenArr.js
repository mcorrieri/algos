// FLATTEN ARRAYS - Turn an array of arrays into one array

function flattenArr(arrays) {
  // solution 1
  //   return [].concat.apply([], arrays);
  // solution 2
  return [].concat(...arrays);
}

console.log(flattenArr([[1, 2], [3, 4], [5]])); // [1, 2, 3, 4, 5]
console.log(flattenArr([[1], [8], [7]])); // [1, 8, 7]
console.log(flattenArr([[68, 68, 68], [7], [13, 29]])); // [68, 68, 68, 7, 13, 29]
