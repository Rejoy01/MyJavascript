//Range Error

//A RangeError is thrown if you use a number that outside the range of legal values

//Example
let num1 =1;

try {
    num1.toPrecision(500); // A number cannot have 500 significant digits digits
} catch (error) {
    console.log(error.name);
}

//syntax error
try {
    eval("alert('Hello)");// missing ' will produce syntax error
} catch (error) {
    console.log(error.name);
}

// ReferenceError

// occur if u use  (reference) a variable that has not been declared
let x = 5;
try {
    x = y + 1;
} catch (error) {
    console.log(error.name);
}

//Type error

let num = 1;
try {
    num.toUpperCase(); // you cannot convert a number to upper case
} catch (error) {
    console.log(error.name);
}