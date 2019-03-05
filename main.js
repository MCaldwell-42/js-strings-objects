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

const catName = () => {
    return 'killer';
}

const bucketOCats = {
    cat1: 'fluffy',
    cat2: 5,
    cat3: catName,
    cat4: {
        water: 'nope',
        sunlight: 'yep'
    }
};

//dot notation
console.log(bucketOCats.cat2);

//bracket notation
console.log(bucketOCats['cat2']);

console.log(bucketOCats.cat4.water);

let hitchhikers_guide = {
    characters: ["Zaphod", "Arthuer", "Ford", "Trillian"],
    catchphrase: "Don't Panic",
    random_facts: {
        copies_sold: 14000000,
        formats: ["radio", "TV", "film", "graphic novel"],
        ultimate_answer: {
            meaning_of_life: 42
        }
    }
};

console.log('the meaning of life is: ', hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life)

let employee = {
    name: "Jeff Winger",
    age: 37,
    department: "legal",
    hire_date: "09/22/2010",
  }

  console.log('Our company\'s lawyer is', employee.name);
  console.log('Jeff was hired on ', employee['hire_date']);
  employee.vacation_days = 20;

  let eom = 'employee_of_the_month';

  employee[eom]= false;

Answer = 1;

  const jeffSess = (divID, textToPrint) => {
    const selectedDiv = document.getElementById(divID);
    selectedDiv.innerHTML += Answer + ' ' + textToPrint;
    Answer += 1;

  }

  jeffSess('jeff', `. Our company's lawyer is ${employee.name}<br>`);
  jeffSess('jeff', `. Jeff was hired on ${employee.hire_date}`);






