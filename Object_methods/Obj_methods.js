let obj  ={}
obj.name = "messi"
obj.year = 2020
obj.speak = function(){
    return `My Name is ${this.name} and this is year ${this.year}`;
}

//Copying an Object

let newObj = obj;
obj.year = 2023
console.log(newObj.year);
console.log(newObj.speak());

// Shallow Copying

/// top level properties copy using Object.assign() method

let copyObject = Object.assign({}, obj);
copyObject.name = "Ronaldo";

console.log("result of shallow copying-----"+ copyObject.speak());
///
console.log("there wont be any change in parent object------"+ obj.speak());


//Deep Copying 
// if you just need to copy only properties which are not functions there is an efficient method

let DeepCopyObj = JSON.parse(JSON.stringify(obj));
console.log( DeepCopyObj);

//Object.create
// object.create you can choose what will be the prototype of your new object

let createObj = Object.create(obj);
console.log( createObj) // {}

createObj.name = "Rehana"
console.log(createObj.speak())
// My Name is Rehana and this is year 2023

//Object.entries()

// returns an array of key-value pairs of object enumerable properties

let person = {name:"rejo",age:20}
let entries = Object.entries(person)
console.log(entries) //

//[ [ 'name', 'rejo' ], [ 'age', 20 ] ]

