// iterate over a string

let string = "great scott";

for (let i = 0; i < string.length; i++) {
  console.log(string.charAt(i));
}

// with index

for (let i = 0; i < string.length; i++) {
  console.log(string.charAt(i), i);
}

// shorter way, for in

for (let s in string) {
  console.log(string.charAt(s))
}


// shorter way with different sintax, for in

for (let s in string) {
  console.log(string[s])
}

// for of

for (let s of string) {
  console.log(s)
}


// to get the indices, add a new step

let newString = string.split("");

newString;

for (let [i, n] of newString.entries()) {
  console.log(n, i)
}