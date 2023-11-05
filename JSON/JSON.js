// A common use of JSON is to read data from a web server, and display the data in a web page.


let Student = {
    course : "MERN",
    age:23,
    isActive : true,
    topics:["html","css","js","react"]
}

let res = JSON.stringify(Student)
// convert object to JSON

let obj = JSON.parse(res)
//convert JSON to object

console.log(typeof res);

console.log(typeof obj);

console.log(obj);

console.log(res);

const ar = [1,2,3,4,5]

let min = Number.MIN_VALUE
for( let i = 0 ; i < ar.length-1; i++){
    
}