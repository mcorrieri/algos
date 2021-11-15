// Calculate how many options you have to get to the end of a grid if only moving down or right

const gridTravel = (m, n) => {
  const table = Array(m + 1)
    .fill(Array(n + 1))
    .map(() => Array(n + 1).fill(0)); // create an array of arrays
  table[1][1] = 1; // set index 1 or both inner and outer arrays to 1
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const current = table[i][j];
      if (j + 1 <= n) table[i][j + 1] += current; // add our value to index right
      if (i + 1 <= m) table[i + 1][j] += current; // add our value to index below
    }
  }
  //   console.log(table);
  return table[m][n];
};

console.log(gridTravel(1, 1)); // 1
console.log(gridTravel(2, 3)); // 3
console.log(gridTravel(3, 2)); // 3
console.log(gridTravel(3, 3)); // 6
console.log(gridTravel(18, 18)); // 23336...
