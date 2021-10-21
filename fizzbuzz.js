// Classic Fizzbuzz - Print a list of numbers, for multiples of 3 print 'fizz', for multiples of 5 print 'buzz', if a
// multiple of 3 and 5 print 'FizzBuzz'

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    // A for loop that prints 1 to 100
    if (i % 3 === 0 && i % 5 === 0) {
      // If the number is a multiple of 3 and 5 print "Fizzbuzz"
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      // If the number is a multiple of 3 print "fizz"
      console.log("fizz");
    } else if (i % 5 === 0) {
      // If the number is a multiple of 5 print "buzz"
      console.log("buzz");
    } else {
      // Otherwise print the number
      console.log(i);
    }
  }
}

console.log(fizzBuzz());
