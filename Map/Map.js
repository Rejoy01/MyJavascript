// map Object is the collection of key-value pairs where keys and values can be of any data type

let myMap = new Map();

// Creating a Map with initial key-value pairs

let myMapWithValues = new Map([
    ['key1','value1'],
    ['key2','value2'],
    ['key3','value3']
]);

console.log(myMapWithValues);


//creating a Map from an existing array of arrays 

let arrayOfArrays = [['a',1],['b',2],['c',3]] ;

let mapFromArray = new Map(arrayOfArrays.map((data)=>(
    [data[0],data[1]]
)))

let mapFromArray2 = new Map(arrayOfArrays)

console.log(mapFromArray);
console.log(mapFromArray2);

//Map Methods 
//1. set(key,value) : Adds a new key-value pair to map
myMap.set('name','John')
myMap.set('age',23)

// get(key) returns value associated with the specified key

let name = myMap.get('name') // John


// has(key): Returns a boolean indicating whether the specified key exists in the Map.
let hasName = myMap.has('name') // true
let hasEmail = myMap.has('Email') //false

//delete(key): removes the Key-Value pair associated with the specified key
myMap.delete('age');

// size : returns the number of key-value pairs in the Map
let numItems=myMap.size;   // 1

// keys() returns iterable of keys in the Map
let keys = myMap.keys()
for(let key of keys){
    console.log(key); // name
}

//values() : returns an iterable of the values in the map

let values = myMap.values()
for(let value of values){
    console.log(value);
}

//entries() returns an iterable of key value pairs in the map
let entries = myMap.entries()

for(let [key,value] of entries) {
    console.log(key ,value);
}

//forEach(callback function)

myMap.forEach((value,key)=>
    console.log(key ,value)
)
