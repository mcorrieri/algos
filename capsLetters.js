//CAPITALIZE LETTERS - return a string with the first letter of every word capitalized

//Solving with a For Loop
// function capLetters(str) {
//   const strArr = str.toLowerCase().split(" "); // Make everything lowercase, split each word into an array

//   for (let i = 0; i < strArr.length; i++) {
//     strArr[i] =
//       strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
//   }
//   return strArr.join(" ");
// }

console.log(capLetters("i Love javascript")); // I Love Javascript
console.log(capLetters("donkeys are cool")); // Donkeys Are Cool
console.log(capLetters("pickles Are fun to eat")); //Pickles Are Fun To Eat

//Solving using MAP
function capLetters(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substr(1))
    .join(" ");
}
