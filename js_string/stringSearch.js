// Last Index of method return index of the last occurrence of 
// a specified text in a string

let text = "Please locate where 'locate' occurs"
console.log(text.lastIndexOf("locate"));
//21
// returns -1 if not found

// indexof() method returns index of position of first occurrence of a string

console.log(text.indexOf("locate"));
//7

// lastIndex method seacrh backwards from end to beginning secon para 15  seacrh starts at pos 15 and seacrhes to beginning
console.log(text.lastIndexOf("locate",15));

//search() method 

console.log(text.search("locate"));

console.log(text.search(/locate/));

//search() method cannot take  second argument start position 
// indexof() method cannot take powerful search values (regular expression)

// Match() method retruns an array containing th results of matching a string against a string

let text2 = "The rain in SPAIN stays mainly in the plain"

console.log(text2.match("ain"));
//     'ain',
//     index: 5,
//     input: 'The rain in SPAIN stays mainly in the plain',      
//     groups: undefined
//   ]

console.log(text2.match(/ain/g));
//[ 'ain', 'ain', 'ain' ]

const myArr = text2.match(/ain/g)

console.log(myArr.length +" "+ myArr[0]);
//3 ain

const newArr = text2.match(/ain/gi)

console.log(newArr.length +" "+ newArr);

// 4 ain,AIN,ain,ain

// The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).
let text3 = "I love cats. Cats are very easy to love. Cats are very popular."

const iterator = text3.matchAll(/cats/gi)
console.log(Array.from(iterator)); 


// includes () method

let newText = "Hello world , welcome to the universe"

console.log(text3.includes("world")); 

