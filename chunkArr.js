// CHUNK ARRAY - Separate array into chunks

function chunkArr(arr, size) {
  //pass in our array and the size of the chunk arrays we want
  const chunkedArr = []; // initialize empty array
  arr.forEach(function (val) {
    // loop through the arr
    const last = chunkedArr[chunkedArr.length - 1]; // get the last element
    if (!last || last.length === size) {
      // check if it is not last or if the last element length is equal to size
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });
  return chunkedArr;
}

console.log(chunkArr([1, 2, 3, 4, 5, 6, 7, 8], 2)); // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log(chunkArr([4, 5, 6], 3)); // [[4, 5, 6]]
console.log(chunkArr([9, 9, 9, 9, 9, 9, 9, 9], 4)); // [9, 9, 9, 9], [9, 9, 9, 9]
