// making a range of numbers as an array

// [0, 1, 2, 3, 4]

let range = Array.from({ length: 5 }, (value, index) => index);

console.log(range);

// [1, 2, 3, 4, 5]

let range2 = Array.from({ length: 5 }, (value, index) => index + 1);

console.log(range2);

// another example

let range3 = Array.from({ length: 10 }, (value, index) => index * 2);

console.log(range3);

// binary example

let range4 = Array.from({ length: 10 }, (value, index) => index % 2);

console.log(range4);

// boolean example

let range5 = Array.from({ length: 10 }, (value, index) => index % 2 === 0);

console.log(range5);