// Copy | Clone array

let cavaleiros = ['ikki', 'hyoga', 'shiryu', 'shun'];


// 1st copy
let newCavaleiros = cavaleiros.slice(0);
newCavaleiros.push('seiya');

console.log(newCavaleiros);

// 2nd copy
let newCavaleiros2 = [].concat(cavaleiros);
newCavaleiros2.push('seiya');

console.log(newCavaleiros2);

// best way in my opinion (ES6)
// let newCavaleiros3 = [...cavaleiros, 'seiya']; works this way at the end
let newCavaleiros3 = ['marin', ...cavaleiros] // and this way at the beggining

console.log(newCavaleiros3);