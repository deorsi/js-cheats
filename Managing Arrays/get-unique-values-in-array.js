// getting only unique values in array

let cavaleiros = ['shun', 'ikki', 'hyoga', 'seiya', 'shiryu', 'ikki'];


// using filter method 1
cavaleiros.filter((cavaleiro, index, array) => {
  if (array.indexOf(cavaleiro) === index) {
    console.log(cavaleiro);
    return cavaleiro;
  }
})

// using filter method 2
let newCavaleiros = cavaleiros.filter((cavaleiro, index, array) => array.indexOf(cavaleiro) === index ? cavaleiro : '');
console.log(newCavaleiros)


// using set
let set = [...new Set(cavaleiros)]

console.log(set)