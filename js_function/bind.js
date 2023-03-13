// with bind() method an object can borrow a method from another object

const Person = {
    firstName : 'John',
    lastName :'doe',
    fullName : function(){
        return this.firstName + ' ' + this.lastName
    }
}

const member = {
    firstName:"nelson",
    lastName:"mandela"
}

let fullName = Person.fullName.bind(member)
// here it return as a funtion 
// so we call them like calling function
console.log(fullName());


const person = {
    firstName:"John",
    lastName: "Doe",
    display: function () {
      let x
      x = this.firstName + " " + this.lastName;
      console.log(x); 
    }
  }
  
// setTimeout(person.display, 3000);
// it will gives u output as undefined

  // it can be solved by using bind method
let display = person.display.bind(person)

setTimeout(display, 3000);
