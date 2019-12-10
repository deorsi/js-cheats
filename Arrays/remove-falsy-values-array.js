// falsy value = values that when converted to a boolean always become false.
// js falsy values = '', 0, null, undefined and NaN.

// try yourself
if ('') {
  console.log('truthy value');
} else {
  console.log('falsy value');
}

// removing falsy values in array

var trueValues = [12, 01, 1102, NaN, undefined, 90, '', 0, null]

var newTrueValues = trueValues.filter(trueValues => trueValues);

// var newTrueValues = trueValues.filter(trueValues => Boolean(trueValues)); // this is what the line above is doing

console.log(newTrueValues); // will console log only 4 trueValues