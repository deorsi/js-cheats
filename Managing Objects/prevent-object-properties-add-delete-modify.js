var user = {
  name: 'Lince',
  email: 'lince@email.com'
};

// To see the default values

Object.getOwnPropertyDescriptor(user);


//Prevent object properties from being added
Object.preventExtensions(user); //this permits you to delete but not to add.


// Prevent object properties from being added and deletes
Object.seal(user) // this seal the object not allowing to add or delete properties.

// Prevent object properties from being added, deletes or modify
Object.freeze(user) // this freezes the properties not allowing to modifying anything.

