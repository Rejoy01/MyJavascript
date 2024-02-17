const fruits = ["Banana","Orange","Apple","Mango"]

// Array Pop Method
//remove last element from an array
fruits.pop()

// array adds a new element to an array
fruits.push("Kiwi")

//removes first element from an array
fruits.shift()

//adds a new element to an array at the beginning
fruits.unshift("Lemon")

// array index

fruits[0] = "kiwi"
//adds a element at 0 the index

//The length property provides an easy way to append a new element to an array:
 
fruits[fruits.length] = "strawberry"

// The concat() method creates a new array by merging (concatenating) existing arrays:

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

// const myChildren = myGirls.concat(myBoys);

// merging an array with values
const arr1 = ["Emil", "Tobias", "Linus"];
const myChildren = arr1.concat("Peter"); 

// splice method 

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

// add new element ast index 2 and parameter defines how many elements should be removed

//the slice() method can take two arguments like slice(1, 3).

const fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits2.slice(1, 3);

const fruits3 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus1 = fruits3.slice(1, 3);
