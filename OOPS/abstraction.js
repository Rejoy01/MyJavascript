// Abstraction in JavaScript involves hiding the complexity and showing only the essential features,
//  providing a clear interface without revealing the internal implementation details

function Animal(name, sound) {

    // Public methods using 'this'
    this.getName = function () {
        return name;
    };

    this.makeSound = function () {
        return sound;
    };
}

// Creating instances
let dog = new Animal('Dog', 'Woof');
let cat = new Animal('Cat', 'Meow');

// Using abstraction
console.log(dog.getName()); // Output: "Dog"
console.log(cat.makeSound()); // Output: "Meow"

function NewAnimal(name, sound) {

    // Public methods using 'this'
    this.getName = function () {
        return name;
    };

    this.makeSound = function () {
        return sound;
    };
}

// Creating instances
let dog1 = new NewAnimal('Dog', 'Woof');
let cat2 = new NewAnimal('Cat', 'Meow');