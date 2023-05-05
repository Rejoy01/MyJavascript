// function abc( ){
//     setTimeout(()=>{
//         console.log("callback");
//     },1000)
// }
// abc()

console.log("welcome");
// now it is asynchrous

let promise = ()=>{
                    //producing function
    return new Promise(function(resolve,reject){
        resolve("Promise is resolved");
        // reject(new Error("Rejected"));
    })
}

console.log(promise());

promise().then((result)=>{
    console.log(result);
}, function(err){
    console.log(err.message);
})

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data)=>data.json())
// .then((users)=> console.log(users))
// .catch((err)=>console.log(err.message));

// console.log(users.name);

let promis1 =()=> new Promise((resolve, reject) =>{
    resolve("resolved promise 1")
  })
let promis2 =()=> new Promise((resolve, reject) =>{
    resolve("resolved promise 2")
  })
let promis3 =()=> new Promise((resolve, reject) =>{
    resolve("resolved promise 3")
  })
  
//rejected when one promise is rejected
Promise.all([
    promis1(),
    promis2(),
    promis3(),
  ]).then((res) =>{
    console.log(res);
  }).catch((err) =>{console.log(err);})
  
// if any one is resolved it will returned
Promise.any([
    promis1(),
    promis2(),
    promis3()
]).then((res)=>{console.log(res);})
.catch((err)=>{console.log(err);})