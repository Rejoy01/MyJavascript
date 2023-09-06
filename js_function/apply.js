// apply method is also similar to call method only difference 
// is it accpt arguments as an array wher call method takes arguments seperately

const Person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }

const person1 = {
    firstName :"Jhon",
    lastName:"Doe"
}

const person2 = {
  firstName :"Rejo",
  lastName:"Wilson"
}

console.log( Person.fullName.apply(person1, ["Oslo", "Norway"]));

console.log(Person.fullName.apply(person2,["kochi","India"]));