const HEROES = [
    { id: 1, name: 'Captain America', squad: 'Avengers' },
    { id: 2, name: 'Iron Man', squad: 'Avengers' },
    { id: 3, name: 'Spiderman', squad: 'Avengers' },
    { id: 4, name: 'Superman', squad: 'Justice League' },
    { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
    { id: 6, name: 'Aquaman', squad: 'Justice League' },
    { id: 7, name: 'Hulk', squad: 'Avengers' },
  ];

// Create an object called loaf using an object
//  initializer ({}) with two properties: flour, 
//  which should be set to 300 and water which should be set to 210.
// Use console.log to print the flour and water properties.
// Add an empty method to the loaf object called hydration.
// Fill in the body of the method to return the hydration 
// of the loaf (the water divided by the flour multiplied by 100).
// Call the hydration method and use console.log to print the result.

let loaf = {
    flour: 300,
    water: 210,
    hydration: function() {
        return (this.water / this.flour) * 100;
    }
};

//console.log(loaf.hydration());

// Create an object with five properties: 
// foo, bar, fum, quux, and spam. Give each property a unique value of your choosing.
// Loop over the object using for ... in
// Use console.log to show each property name and its associated value.

const object1 = {
    foo: 'red',
    bar: 'blue',
    fum: 'yellow',
    quux: 'brown',
    spam: 'orange',
}

for (const prop in object1) {
    //console.log(`${prop}: ${object1[prop]}`)
}



// Create an object with a property called meals which is an array 
// of strings: 'breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'.
// Use console.log to show the name of a hobbit's fourth meal of the day.
// Don't forget that humans and hobbits count from 1, but computers count from 0.

const food = {
    meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'],
};

//console.log(food.meals[3])


// Create 3-5 objects, each with a name and a jobTitle.
// Use people you know, or characters from fiction, or your own inventions.
// Store these objects in an array.
// Iterate over the array and use console.log 
// to show each person's job title and name.

const jobCreator = (name, jobTitle) => {
    return {
        name,
        'Job title': jobTitle,
    }
}

let randy = jobCreator('Randy', 'Coder');
let codey = jobCreator('Codey', 'Coder');
let rich = jobCreator('Rich', 'Teacher');

let people = [];
people.push(randy, codey, rich);

//people.forEach(person => console.log(`${person['Job title']}: ${person.name}`));

// Expand on the previous example by adding a boss property to 
// everyone except the owner of the company.
// Change the iteration to print out messages in this format: 
// "${title} ${name} reports to ${boss}.". 
// For example: Junior Engineer Bob reports to Fred..
// What gets printed out for the owner?
// Adjust the message so that people with no boss 
// display "${title} ${name} doesn't report to anybody." 
// - for example, Founder John doesn't report to anybody.

 
people.map(person => {
    if (person.name !== 'Rich') {
        person.boss = 'Rich'
        person.message = function() {
            //console.log(`${this['Job title']} ${this.name} reports to ${this.boss}.`);
        }
    } else {
        person.message = function() {
            //console.log(`${this['Job title']} ${this.name} doesn't report to anybody.`);
        }
    }
});

//people.forEach(person => console.log(person.message()));

// Redo your Cracking the Code problem from String Drills 
// but this time use an object as your cipher. 
// Additionally, create a decodeWords function that 
// utilizes your decode function to accept a single string of words, 
// and then return the fully decoded message as a string.

const decode = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
}

const decodeWords = (message) => {
    words = message.split(" ");
    let decoded = "";

    words.forEach( word => {
        if(decode.hasOwnProperty(word[0])) {
            decoded += word[decode[word[0]]];
        }
        else decoded += ' ';
    })
    return decoded;
}

const myMessage = 'craft block argon meter bells brown croon droop';

//console.log(decodeWords(myMessage));


const createCharacter = (name, race, origin, attack, defense, weapon) => {
    return {
        name: name,
        race: race,
        origin: origin,
        attack: attack || Math.round(Math.random(1, 9) * 10),
        defense: defense || Math.round(Math.random(1, 9) * 10),
        weapon: weapon || 'sword',
        describe: function() {
            return `${name} is a ${race} from ${origin} who uses a ${weapon}.`
        },
        evaluateFight: function(character) {
            let x = this.attack - character.defense;
            let y = character.attack - this.defense;

            if(x < 0 ) {
                x = 0;
            }
            if(y < 0) {
                y = 0;
            }
            return `Your opponent takes ${x} damage and you receive ${y} damage`
        }
    }
}

let characters = [createCharacter('Gandalf','Wizard','Middle Earth', 9, 9,'Staff'), createCharacter('Bilbo', 'Hobbit', 'The Shire'), createCharacter('Frodo', 'Hobbit', 'The Shire'), createCharacter('Aragorn', 'Man', 'Dunnedain'), createCharacter('Legolas', 'Elf', 'Woodland Realm')];

characters.push(createCharacter('Arwen', 'Elf', 'Rivendell'));

let myChar = characters.find( character => character.name === 'Aragorn');
//console.log(myChar.describe());

let hobbits = characters.filter( character => character.race === "Hobbit");
//console.log(hobbits);

let highAtk = characters.filter( character => character.attack > 5);
//console.log(highAtk);

//console.log(myChar.evaluateFight(myChar));

const findOne = (arr, query) => {
    arr.forEach( object => {
        for( const prop in object) {
                let val = prop;
                if(prop == query.hasOwnProperty(val)) {
                    console.log('works');
                    if(object[prop] != query[prop]) {
                        return null
                    }
                }
        }
        return object
    })
}

console.log(findOne(HEROES, { id: 1 }));