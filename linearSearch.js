// Linear Search Algorithm
// We use the forEach method to loop through each element in our search array
// the if statement checks each element in the array to see if it matches our desired value
// if we find an element that matcches our desired value, print the value name and it's location

const linearSearch = (searchArr) => {
  const value = "Mickey";

  searchArr.forEach((element, index) => {
    if (element === value) {
      console.log(value, "has been found at index:", index);
    }
  });
};

console.log(linearSearch(["Leaf", "fronk", "Mikey", "Mickey", "Duey"])); // 4
// console.log(
//   linearSearch([
//     "darby",
//     "fronk",
//     "Mikey",
//     "Mickey",
//     "Duaey",
//     "Rob",
//     "Dio",
//     "Duey",
//   ]) // 7
// );
// console.log(linearSearch(["Mike", "Duey", "Brian"])); // 1
