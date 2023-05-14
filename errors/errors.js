//Range Error

//A RangeError is thrown if you use a number that outside the range of legal values

//Example
let num1 =1;

try {
    num1.toPrecision(500); // A number cannot have 500 significant digits digits
} catch (error) {
    console.log(error.name);
}

