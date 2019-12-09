
// Computed properties

// simple example one
let key = window.prompt('Set property name'); // type the key name

let obj = {
  [key]: 1,
}

  // simple pratical example 2 - you can try on the dev tools


  // elements
  < !DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>pratical example</title>
      </head>
      <body>
        <input name="username" placeholder="type your username" />
        <input name="password" placeholder="type your password" />
      </body>
    </html>

// console
var username = document.querySelector('[name="username"]');
var password = document.querySelector('[name="password"]');

let state = {};

const keyUp = event => {
  const value = event.target.value;
  const name = event.targe.name;

  state[name] = value;
}

username.addEventListener('keyup', onKeyUp);
password.addEventListener('keyup', onKeyUp);

// see the state
state;