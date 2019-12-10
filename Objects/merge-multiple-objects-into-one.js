let defaultUser = {
  name: '',
  email: '',
  subscribed: true
};

let actualUser = {
  name: 'Lince',
  email: 'lince@email.com'
};


// First way
let userData = Object.assign(defaultUser, actualUser);

console.log(userData);

let user2 = {
  phone: '333-666-999'
}

userData = Object.assign(defaultUser, actualUser, user2);

console.log(userData);


// Second way using ES7/ES8 - Object spread

let userData2 = { ...defaultUser, ...actualUser };
console.log(userData2);