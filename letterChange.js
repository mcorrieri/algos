// LETTER CHANGE - Change every letter of the string to the letter that follows it, while capitalizing all vowels ('z' should turn to 'a')

function letterChange(str) {
  let newStr = str.toLowerCase().replace(/[a-z]/gi, (char) => {
    if (char === "z" || char === "Z") {
      return "a";
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });
  newStr = newStr.replace(/a|e|i|o|u/gi, (vowel) => vowel.toUpperCase());
  return newStr;
}

console.log(letterChange("abc")); // bcd
console.log(letterChange("hotdog")); // IpUEph
console.log(letterChange("zabcde")); //AbcdEf
console.log(letterChange("ZZZZaaaa")); // AAAAbbbb
