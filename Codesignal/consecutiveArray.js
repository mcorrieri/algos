// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

function missingStatues(statues) {
  let x = 0;

  // Sort statue input in DESC order (large => small)
  statues.sort((a, b) => b - a);

  // starting at first element loop through and subtract element by adjacent element
  for (let i = 0; i < statues.length - 1; i++) {
    x += statues[i] - statues[i + 1] - 1;
  }
  return x;
}

// need to order statues
// check if each statute is +1 the previous
// return number of statues missing

// console.log(missingStatues([5, 4, 6])); // 0
console.log(missingStatues([0, 3])); // 2
// console.log(missingStatues([6, 2, 3, 8])); // 3
