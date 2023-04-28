//A closure is a function having access to the parent scope, even after the parent function has closed.


function increment() {
    let counter = 0;
    counter += 1;
    return counter;
  }
  
  // Call add() 3 times
console.log(increment()); 
console.log(increment()); 
console.log(increment()); 
// here value of counter is one 
// to overcome this we use closures 
// closure is a function having access to the parent scope, even after the parent function

const add = (function () {
    let counter = 0;
    return function () {counter += 1; return counter}
  })();
  
console.log(add());  
console.log(add());  
console.log(add());  
  

// promise.any()
// promise.all()

l