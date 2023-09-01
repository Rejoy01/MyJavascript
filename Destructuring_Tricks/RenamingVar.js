const user = {firstname: 'John', lastname: 'sam'}

// const fname = user.firstname
// const lname = user.lastname

const {firstname:fname, lastname:lname} = user;
console.log(fname);

const user2 = {firstname:"test",lastname : 'test2'}

const {firstname:first, lastname:last} = user2
const {firstname:name} = user2
const {firstname:newName} = user2
console.log(first,last);

//jhon

