// removing and moving items from right or left side of array

let numbers = [23, 1, 56, 43, 2, 10];

let removeFromRight = numbers.slice(0, 5)

console.log(removeFromRight);

let removeFromLeft = numbers.slice(1)

console.log(removeFromLeft)
// notice that the original did not change the original, slice is good for cloning an array


// to choose which item in the array

let getWhateverItem = (arr, number) => arr.slice(number - 1, number)[0]

let result = getWhateverItem(numbers, 6)
console.log(result);


// shifting values in an array, "pushing it" to left or right

const sidePushArray = (arr, shift) => {
  return [...arr.slice(shift), ...arr.slice(0, shift)];
}

let result2 = sidePushArray([1, 2, 3, 4, 5], -1) // shift the second argument to move
console.log(result2);