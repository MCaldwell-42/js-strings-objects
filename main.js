console.log('Im in main.js');

const printToDom =(divID, textToPrint) => {
    const selectedDiv = document.getElementById(divID);
    selectedDiv.innerHTML += textToPrint;
};

const iAmThursty = (num) => {
// do some stuff
// under 21? 'drink some water'
//over 21? Under 65? Have a beer!
//over 65? 'take a nap'
if (num < 21) {
    return 'drink some water!';
} else if (num > 20 && num < 65) {
    return 'BEERS!';
} else if (num > 65) {
    return 'take a nap!';
}
};

console.log(iAmThursty(55));
printToDom('thirsty', iAmThursty(67));


const quote = 'Winter Is Coming';
console.log(quote.indexOf('is')); // returns 7 (place it starts)
console.log(quote.indexOf('Roar')); //returns -1 bc dont exist

//bonus = printToDom function