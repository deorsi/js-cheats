// remove / delete items from array

let ages = [15, 14, 17, 18, 19, 28, 35, 50];


// with splice method you 
// 1st arg is where you want to start removing (0 remove all, etc)
// 2st arg is how many items you want to remove 
// splice also gives the values removed

let removedAges = ages.splice(0, 1)

console.log(ages);
console.log(removedAges);

// slice also remove items
let sliceAges = ages.slice(0, 1);

console.log(sliceAges) // but it doesn't change the original array, splice does.


// with splice you can also add as many elements as you want

let addAges = ages.splice(1, 1, 'fifteen', 01, 2, 'anything');

console.log(ages)


// 1) use
let name = 'Lince Ecnil'.split('');

name.splice(0, 1);
name.splice(name.length - 1, 1);

console.log(name.join(''));


// 2) use
let age = [15, 14, 17, 18, 19, 28, 35, 50];

// let filterAge = age.filter(el => el < 18).map(el =>{
//   age.splice(age.indexOf(el), 1)
//   return el;
// })

// 3 or use
const filterAge = (arr, fn) => {
  return arr.filter(fn).map(el => {
    arr.splice(arr.indexOf(el), 1)
    return el;
  });
}

let underAge = filterAge(age, num => num < 18);

console.log(underAge);
console.log(age);