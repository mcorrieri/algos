// VALIDATING A PALINDROME- return true if our input is a palindrome, false if not

function isPalindrome(str) {
  const revString = str.split("").reverse().join(""); //reverses the string

  return revString === str; //strict equality operator compares our string and reversed string, returns true or false
}

console.log(isPalindrome("hat")); // false
console.log(isPalindrome("pickle")); // false
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("level")); // true
