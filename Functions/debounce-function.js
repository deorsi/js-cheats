// Debounce function, a function that can only be called after a certain amount of time

const debounce = (func, milisec) => {
  let timeout;
  return function (args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(args), milisec);
  }
};

const onResize = () => {
  console.log(window.innerHeight, window.innerWidth);
}

window.addEventListener('resize', debounce(onResize, 500));


// with event objects

const debounce = (func, milisec) => {
  let timeout;
  return function (args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(args), milisec);
  }
};

const onResize = (event) => {
  console.log(event, window.innerHeight, window.innerWidth);
}

window.addEventListener('resize', debounce(onResize, 500));