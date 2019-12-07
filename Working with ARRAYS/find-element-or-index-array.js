// find an element or its index

let friends = ['benzin', 'boogarins', 'tame impala', 'pink floyd', 'benzin'];

let result = friends.find(friend => friend === 'benzin');
let result2 = friends.findIndex(friend => friend === 'boogarins');

console.log(result);
console.log(result2);


// to find multiple values in the same array

// one way (with if statement)

// function findMultipleValues(arr, value) {
//   let indices = [];
//   arr.forEach((el, i) => {
//     if (el === value) {
//       indices.push(i)
//     }
//   });
//   return indices;
// }

// another way (with logical &&)

function findMultipleValues(arr, value) {
  let indices = [];
  arr.forEach((el, i) => (el === value) && indices.push(i));
  return indices;
}

let res = findMultipleValues(friends, 'benzin');
console.log(res);