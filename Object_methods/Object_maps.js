// map holds key-value pairswhere key can be any datatype
//map remembers the otiginal insertion order of the keys
// A map has a prorperty that represents the size of the map

//new map
const fruits = new Map([
    ["apple",200],
    ["orange",300],
    ["banana",200],
])

console.log(fruits)

const fruits2 = new Map();

fruits2.set("apple",500);
fruits2.set("blueberry",200);

console.log(fruits2)

// get method returns value of a key in map

console.log(fruits2.get("blueberry")); 

//200

//fruits . size returns number of elements in map

console.log(fruits.size);
//3

fruits.delete("apples");

fruits.clear()

console.log(fruits)

//{}

//returns true if a key exists in map
console.log(fruits2.has("apple"))

//true

//returns values

fruits2.values()
