// Polymorphism means "many forms", and it occurs when we have many objects that are related to each other by inheritance.

// Inheritance lets us inherit attributes and methods from another object. Polymorphism uses those methods to perform different tasks. 
//This allows us to perform a single action in different ways


const vehicle = {
    start : function(){
        return "vehicle is started";
    }
}

const car = Object.create(vehicle)

car.start = function(){
    return "Car engine starting...";
}

const boat  = Object.create(vehicle)

boat.start = function(){
    return "Boat motor starting...";
}

// Using polymorphism
console.log(car.start()); // Output: "Car engine starting..."
console.log(boat.start()); // Output: "Boat motor starting..."
console.log(vehicle.start()); // Output: "Generic vehicle starting..."