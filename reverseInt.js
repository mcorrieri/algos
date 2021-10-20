//REVERSE AN INTEGER

function reverseInt(int) {
  const revString = int.toString().split("").reverse().join(""); // Turns integer into a string, splits into an array by char, reverses the array, and joints into string

  return parseInt(revString); // Turn string back into integer
}

console.log(reverseInt(123)); //321
console.log(reverseInt(54321)); //12345
console.log(reverseInt(12)); //21
console.log(reverseInt(987654321)); //123456789
