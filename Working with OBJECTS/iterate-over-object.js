var username = {
  first: 'Lince',
  last: 'Ethos'
};


// FOR IN

// to list props 
for (let u in username) {
  console.log(u);
}

// to list props and values
for (let u in username) {
  if (username.hasOwnProperty(u)) {
    console.log(u, username[u]);
  }
}

// FOR OF

// to list props and values
for (let u of Object.keys(username)) {
  console.log(u, username[u]);
}

// USING ES7 feature Object.entries to list props and values

Object.entries(username).forEach(([key, value]) => console.log(key, value));


