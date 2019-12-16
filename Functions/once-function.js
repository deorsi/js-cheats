// creating a function that can only be called once
// imagine you want to submit something with a button

var once = func => {
  let called = false;
  return function () {
    if (!called) {
      called = true;
      return func();
    }
  }
}

let onClick = () => console.log('clicked!') // this will log only once
let button = document.querySelector('button');

button.addEventListener('click', once(onClick))

// using args

var once = (func, args) => {
  let called = false;
  return function () {
    if (!called) {
      called = true;
      return func(args);
    }
  }
}

let onClick = text => console.log(text) // this will log only once
let button = document.querySelector('button');

button.addEventListener('click', once(onClick, "clicked!"))

// using multiple args

var once = (func, ...args) => {
  let called = false;
  return function () {
    if (!called) {
      called = true;
      return func(...args);
    }
  }
}

let onClick = (text, time) => console.log(`${text} at ${time}`) // this will log only once
let button = document.querySelector('button');

button.addEventListener('click', once(onClick, "Form submitted!", new Date(Date.now())))