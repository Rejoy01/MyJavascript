// variables  defined with const cannot be reassigned

// variables defined with const cannot be redeclared

// variables defined with const cannot have Block Scope

// use const for declaring a new array , object , fn ,Regexp

// you can change elements of const array
// you can change properties of const object

// const array

const cars = ["a", "b", "c", "d", "e"]

cars.push("f")
cars[6] = "g";

console.log(cars);


// const object

const Car = {type:"Fiat",model:"500",color:"white"}

//change properties 
Car.color = "white";
//add a property
Car.owner = "Owner";

console.log(Car);
