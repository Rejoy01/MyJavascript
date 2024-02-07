localStorage.setItem("user","Entri")
localStorage.setItem("age", 22)

let res = localStorage.getItem("age")

// remove particular item
// localStorage.removeItem("age");

 console.log(res);

// get key of 0th index
console.log(localStorage.key(0));
console.log(localStorage.key(1));

// localStorage.clear();

console.log(localStorage.length);