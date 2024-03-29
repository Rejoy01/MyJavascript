// The meaning of Encapsulation, is to make sure that "sensitive" data is hidden from users. To achieve this, you must:

// declare class variables/attributes as private
// provide public get and set methods to access and update the value of a private variable

// In JavaScript, encapsulation can be implemented using various techniques such as:

// Closures: Hiding variables within a function scope to achieve data privacy.
// Private variables: Using functions to create private variables that are inaccessible from outside the function.
// Accessors (getters and setters): Controlling access to object properties through methods.


class MyClass{
    #privateField = 10;

    getPrivateField (){
        return this.#privateField;
    }

    setPrivateField(newValue){
        this.#privateField = newValue
    }
}

const Obj = new MyClass()

// get
console.log(Obj.getPrivateField());

//set 
Obj.setPrivateField(20);

console.log("New Value - ",Obj.getPrivateField());



// class MyClass {
//     constructor() {
//         let privateVariable = 10;

//         this.getPrivateVariable = function() {
//             return privateVariable;
//         };

//         this.setPrivateVariable = function(newValue) {
//             privateVariable = newValue;
//         };
//     }
// }

// let obj = new MyClass();
// console.log(obj.privateVariable); // This will output undefined
// console.log(obj.getPrivateVariable()); // This will output 10
// obj.setPrivateVariable(20);
// console.log(obj.getPrivateVariable()); // This will output 20