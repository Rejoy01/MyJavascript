const fruits = ["Banana", "Orange", "Apple", "Mango"]

// for deleting an element from an array
let fruit = fruits.pop()

// Adding an value to fruits
fruits.push("Greenapple")

// removes an element from the begining of the array

//shift method return value that was shifted out
var Fruits = fruits.shift()
console.log(Fruits);
//result = banana

fruits.shift()

console.log(fruits);

//[ 'Orange', 'Apple', 'Greenapple' ]
// "Banana" is removed

//Unshift method 

fruits.unshift("lemon")
console.log(fruits);

fruits[0] = "Kiwi"

fruits[fruits.length] = "blueberry"

console.log(fruits);

const person = ["man1","man2","man3"]

//merging or concatenating arrays

const myGirls = ["cecilie","lone"]
const myBoys = ["emil","tobias","Linus"]
const arr3 = ["Robin", "Morgan"];
const myChildren = myGirls.concat(myBoys)

console.log(myChildren);

const Array1 = myGirls.concat(myBoys,arr3)

console.log(Array1);

let Children2 = myChildren.concat("peter")
console.log(Children2);
console.log(myChildren);

//splice() method can be used to add new items to array
//first argument defines position new element to be added

fruits.splice(1,0,"pineapple","camery")
console.log(fruits);

//[ 'Kiwi', 'pineapple', 'camery', 'Apple', 'Greenapple', 'blueberry' ]


// 2nd argument defines how many elements should be removed
fruits.splice(1,1,"strawberry","mango")
console.log(fruits);

    // ['Kiwi','strawberry','mango','camery','Apple','Greenapple','blueberry']
   
fruits.splice(1,1)
console.log(fruits);

//slice method slice out a piece of an array into new array
console.log(fruits.slice(1));
//[ 'mango', 'camery', 'Apple', 'Greenapple', 'blueberry' ]

//slice method can take two argument start and end positions
console.log(fruits.slice(1,4));
//[ 'mango', 'camery', 'Apple' ]

