
//parameters are the names listed in the function definition
//function arguments are the real values passed to the function

function functionName(parameter1, parameter2, parameter3) {
    // code to be executed
  }

// the rest parameter (...) allow a function to treat an indefinite number of arguments
// as an array



function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
  
  let x = sum(4, 9, 16, 25, 29, 100, 66, 77);

// Argument object 
// javascript functions have a built-in object called the arguments object 
// argument object contains an array of arguments used when the function is invoked

x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
console.log(findMax(200,100,1,2,6)); 
