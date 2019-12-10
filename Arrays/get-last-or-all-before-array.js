
let pokemon = ['bulbasaur', 'blastoise', 'mr. mime', 'eevee', 'pikachu', 'eevee', 'mewtwo', 'togepi', 'psyduck', 'Ponyta', 'Cubone', 'Ditto', 'mew'];


// getting last item in array

let lastPokemon = pokemon[pokemon.length - 1]

console.log(lastPokemon);


// getting everything before last item in array - 1st way

let beforeLastPokemon = pokemon.slice(0, pokemon.length - 1);

console.log(beforeLastPokemon);

// getting everything before last item in array - 2nd way

let beforeLastPokemon2 = pokemon.slice(0, -1);

console.log(beforeLastPokemon2);