let name = {
  first: 'Lince',
  last: 'ecniL',
  age: 25
}

// one way
let values = Object.keys(name).map(key => name[key]);

console.log(values);

// another way
let values2 = Object.values(name);

console.log(values2);

