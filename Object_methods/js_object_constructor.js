//we need a blueprint for creating many objects of same type 
// the way ti create a object type is to use an object constructor function
// function Person is an object constructor function


function Person(first,last,age){
    this.firstName = first
    this.lastName = last
    this.age = age
}

const newObject = new Person("rejo","r",20)
console.log(newObject)
//{ firstName: 'rejo', lastName: 'r', age: 20 }

// adding an properties to an object is easy 
// you cannot add a new property to an object constructor the same way as you add a new property to an existing object

//Person.natinality = "eng"
// to add a new property we must add it to the constructor function

function person(first,last,age){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.nationality ="eng"
}

// adding a method in object constructor also same way
function Person(first,last,age){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.changename = function(value){
        this.lastName = value
    }
}

newObject.changename("hey")
console.log(newObject)
//Person {
//     firstName: 'rejo',
//     lastName: 'hey',
//     age: 20,
//     changename: [Function (anonymous)]
//   }

