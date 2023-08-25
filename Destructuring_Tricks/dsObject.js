const user = {firstname: 'John', lastname: 'sam'}

const user2 = {Job : "software dev", exp:3}

const user3 = {Job : "manager", exp:10}

const user4 = {Name : "test",age:24}

const {firstname,lastname} = user

const {Job,exp} = user3

// var Name = user4.Name
// var age = user4.age
const {Name,age} = user4;

console.log(Name);


console.log(firstname);

console.log(Job,exp);

