let Student = {
    course : "MERN",
    age:23,
    isActive : true,
    topics:["html","css","js","react"]
}

let res = JSON.stringify(Student)
// convert object from JSON

let obj = JSON.parse(res)
//convert JSON to object

console.log(typeof res);

console.log(typeof obj);
console.log(obj);