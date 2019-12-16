// Capitalize the first word in string

// 1st way
function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

let result = capitalize('great scott');

console.log(result);

// 2nd way

function capitalize2(string) {
  return `${string[0].toUpperCase()}${string.slice(1)}`;
}

let result2 = capitalize2('great scott');

console.log(result2);

// 3rd way

const capitalize3 = ([first, ...rest]) => first.toUpperCase() + rest.join('');

let result3 = capitalize3("great scott");

console.log(result3);