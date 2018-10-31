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

console.log(loaf.hydration());

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
    console.log(`${prop}: ${object1[prop]}`)
}



// Create an object with a property called meals which is an array 
// of strings: 'breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'.
// Use console.log to show the name of a hobbit's fourth meal of the day.
// Don't forget that humans and hobbits count from 1, but computers count from 0.

const food = {
    meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'],
};

console.log(food.meals[3])