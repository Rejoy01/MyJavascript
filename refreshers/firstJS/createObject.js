const person = {
    name: 'John',
    age: 30,
    city : "Newyork"
}



const MyArray =  Object.values(person)

console.log(MyArray);

const Fruits = {Bananas:300,Orange:200,Apple:500}

let text = ""

for(let [fruits , Value] of Object.entries(Fruits)){
    text += fruits + " : " + Value + "\n"
}

console.log(text);

//JavaScript objects can be converted to a string with JSON method JSON.stringify().

let string = JSON.stringify(person)

console.log(string);