const array = [1,1,2,3,6,6,3,1]

const uniqueArray = [...new Set(array)]

console.log(uniqueArray);

// result [1,2,3,6]

// Conver to Boolean

const isTrue = !0;
const alsoFalse = !!0;

console.log(isTrue);
//true
console.log(alsoFalse);
//flase

// convert to string

const val = 5 +"";
console.log(typeof(val));

//string

//convert to int
let int = "15";
int = +int;

console.log(typeof(int));

//convert float to int

const float = 19.040| 0;

console.log(float);

// remove last digit 

const last = 1553 /10 | 0;

//result : 155 ;
console.log(last);

//truncate an array

let value = [0,1,2,3,4,5];
value.length = 3;

console.log(value);
//result = [0,1,2] 