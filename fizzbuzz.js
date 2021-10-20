// Classic Fizzbuzz - Print a list of numbers, for multiples of 3 print 'fizz', for multiples of 5 print 'buzz', if a
// multiple of 3 and 5 print 'FizzBuzz'

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

console.log(fizzBuzz());
