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

console.log( Person.fullName.apply(person1, ["Oslo", "Norway"]));