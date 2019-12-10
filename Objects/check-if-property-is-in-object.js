// Check if a property is in Object

var user = {
  name: 'Lince',
  address: {
    street: 'Doc Emmett Brown',
    city: 'Great Scott'
  }
};

let property = 'name' in user; // or address will return true and inherit properties

console.log(property)

let property2 = 'city' in user.address; // or street will return true and inherit properties

console.log(property2)

let property3 = user.hasOwnProperty('address'); // this way we don't get inherit property from Object console.dir({})

console.log(property3)
