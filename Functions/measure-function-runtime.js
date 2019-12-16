// Measuring time for function to run
// use the dev tools to try

const getUserData = async (user) => await fetch(`https://api.github.com/users/${user}`)

let time = (func, ...args) => {
  console.time('time');
  let result = func(...args);
  console.timeEnd('time');
  return result;
};

time(() => getUserData('any github user'));