const person = {
    name : 'John',
    age:30,
    city:"New York"
}

console.log(person)

// But Displaying a JavaScript object will output [object Object].
// document.getElementById("demo").innerHTML = person;

//output
// [object Object]


// Some common solutions to display JavaScript objects are:

// Displaying the Object Properties by name
// Displaying the Object Properties in a Loop
// Displaying the Object using Object.values()
// Displaying the Object using JSON.stringify()


// Displaying the Object Properties by name
// document.getElementById("demo").innerHTML =
// person.name + "," + person.age + "," + person.city

// Displaying the Object Properties in a Loop

let txt = ""

for (let x in person){
    txt += person[x] + " "
}

console.log(txt)

// object can be converted to array using Object.values()

const myArray = Object.values(person)
console.log(myArray)

// javascript object can be converted JSON Format 

const newObject = JSON.stringify(person)
console.log(newObject)