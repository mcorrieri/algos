function reverseString(str) {
  const strArr = str.split(""); //splits the string into an array by char
  strArr.reverse(); //reverses order of the array
  return strArr.join(""); //joins the arr back into a string
}

console.log(reverseString("howdy"));
console.log(reverseString("cat"));
console.log(reverseString("cheese"));

//We can also clean this up into one line

// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

//Lastly, we can use a for loop to reverse a string

// function reverseString(str) {
//   let revString = "";
//   for (let i = 0; i <= str.length - 1; i++) {
//     revString = str[i] + revString;
//   }
//   return revString;
// }
