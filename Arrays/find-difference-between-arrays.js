// Find the difference between 2 arrays (non shared values)

let pokeBlue = ['blastoise', 'mew', 'mr. mime', 'eevee', 'pikachu', 'eevee']; // 1st
let pokeRed = ['charizard', 'mew', 'mr. mime', 'pikachu', 'tokepi']; // 2nd


// search for the same values (what has in common)
let result = pokeBlue.filter(el => pokeRed.includes(el));
console.log(result);


// search for difference from 1st to 2nd (what has in 1st that don't in 2nd)
let result2 = pokeBlue.filter(el => !pokeRed.includes(el));
console.log(result2);


// search for difference from 1st to 2nd (what has in 1st that don't in 2nd without repeated values)
let result3 = [...new Set(pokeBlue)].filter(el => !pokeRed.includes(el));
console.log(result3);


