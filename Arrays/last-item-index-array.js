
var arr1 = [2, 3, 4, 5, 7]


// remove last item of an array - 1st way

arr1.pop();
console.log(arr1);


// function to find last array - 2nd way

let findLast = (arr, func) => arr.filter(func).pop()

let arr2 = findLast(arr1, el => el > 2);

console.log(arr2);


// create array of array (input and index)

console.log(arr1.map((el, i) => [el, i]));


// function to find last based on index of array

function findLastIndex(arr, func) {
  return arr.map((el, i) => [el, i]).filter(([el, i]) => func(el, i)).pop()[1];
}

let usernames = ['joao.me', 'linceiam', 'whoiam', 'law'];

let containL = username => username.includes('lince');

console.log(findLastIndex(usernames, containL));