// capitlize every word in a string

function capitalizeWords(string) {
  return string.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
};

let result = capitalizeWords('great scott');

console.log(result);