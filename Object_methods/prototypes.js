function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }

// we cannot add a property to an existing object constructor

//prototype inheritence 

//All Javascript objects inherit properties and methods from the prototype

// The javascript prototype property allows you to add new properties to object constructors


Person.prototype.nationality = "English"

const NewPerson = new Person("Rejo","wilson",24,"blue")

console.log(NewPerson.nationality);

//English

let swift = {
  name:"swift",
  price:"8 lakhs",
  getPrice:function(){
    console.log(this.price);
  }
}

let glanza = {
  name:"glanza",
  price:"10 lakhs"
}

// prototype inheritance
glanza.__proto__ = swift

swift.getPrice()

glanza.getPrice()