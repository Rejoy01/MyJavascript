// with call method a object can use a method belonging to another object

const person = {
    fullName:function(){
        return this.firstName + " " + this.lastName 
    }
}

const person1 ={
    firstName:"jhon",
    lastName:"Doe"
}

const person2 ={
    firstName:"Mary",
    lastName:"Doe"
}

console.log(person.fullName.call(person1)); 

//jhon Doe

console.log(person.fullName.call(person2)); 
// Mary Doe

// Call method can also accpt arguments

// const person = {
//     fullName:function(){
//         return this.firstName + " " + this.lastName + city + country
//     }
// }

//console.log(person.fullName.call(person2,"oslo","norway")); 

