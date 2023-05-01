// Class methods are created with the same syntax as object methods.

// Use the keyword class to create a class.

// Always add a constructor() method.

// Then add any number of methods.

//Syntax

// class ClassName {
//     constructor() { ... }
//     method_1() { ... }
//     method_2() { ... }
//     method_3() { ... }
//   }

class Car {
    constructor(name , year){
        this.name = name;
        this.year = year;
    }
    age(){
        const date = new Date()
        return date.getFullYear() - this.year
    }
}

const myCar = new Car("FORD",2014)

console.log("my car is "+ myCar.age()+" years old");

//my car is 9 years old

class User{
    setName(name){
        this.name = name
    }
    getName(){
        return this.name
    }
}

let obj = new User();

obj.setName("arun");
console.log(obj.getName());