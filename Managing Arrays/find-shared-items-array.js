// find shared values in two arrays;

let cavaleiros = ['ikki', 'seiya', 'hyoga', 'mu', 'shaka'];
let cavaleirosGold = ['mu', 'aldebaran', 'shaka', 'saga'];


let shared = cavaleiros.filter(cavaleiro => cavaleirosGold.includes(cavaleiro));

console.log(shared);


