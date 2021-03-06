// Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

// A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.

function shapeArea(n) {
  let area = 1;
  for (let i = n; i > 1; i--) {
    area += (i - 1) * 4;
  }
  return area;
}

// console.log(shapeArea(1)); // 1
// console.log(shapeArea(2)); // 5
console.log(shapeArea(5)); // 41
