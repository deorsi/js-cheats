// Check if string contains substring

const URL = "https://api.github.com/users/wesbos";

// returning a boolean, use includes()

let containsWord = URL.includes('user');

console.log(containsWord);


// returning where the substring starts, use indexOf()

const containsWord2 = URL.indexOf('user') // to transform into a boolean just put -> > -1;

console.log(containsWord2);


// check to see if its at the beginning, startsWith()

const containsWord3 = URL.startsWith('https')

console.log(containsWord3);


// check to see if its at the ending, endsWith()

const containsWord4 = URL.endsWith('wesbos')

console.log(containsWord4);

