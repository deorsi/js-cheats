
// Convert object to an array

var person = { name: 'Lince', age: 33 };


// Using forEach
var arr = [];

Object.keys(person).forEach(key => arr.push([key, person[key]]));

console.log(arr);

// Using map
var result = Object.keys(person).map(key => [key, person[key]]);

console.log(result);


// using Object.entries

console.log(Object.entries(person));
