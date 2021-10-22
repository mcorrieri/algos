function isPalindromic(str) {
  let letterCount = {}; // create empty object
  for (
    let i = 0;
    i < str.length;
    i++ // loop through ever letter in string
  )
    if (letterCount[str[i]]) {
      // if the letter is a key inside our object
      letterCount[str[i]] += 1; // add 1 to the counter
    } else {
      letterCount[str[i]] = 1; // otherwise, create a new couter for the new letter
    }

  let oddCounter = 0; // create counter

  for (let letter in letterCount) {
    // loop through every key in our object
    if (letterCount[letter] % 2 === 1) {
      // if the counter is an odd number
      oddCounter++; // add one to the counter
    }
  }
  return oddCounter <= 1; // return true if there is one or zero odd number of letters
}

console.log(isPalindromic("cat")); // false
console.log(isPalindromic("pickle")); // false
console.log(isPalindromic("madam")); // true
console.log(isPalindromic("nursesrun")); // true
