// fill array with a value

let cardNumber = '4242 4242 4242 4242'
let hideCard = cardNumber.split('').filter(num => num !== ' ');

console.log(hideCard.fill('*', 4, hideCard.length - 4).join('')); // this will return 4242********4242