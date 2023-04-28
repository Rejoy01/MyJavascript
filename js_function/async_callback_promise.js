function abc( ){
    setTimeout(()=>{
        console.log("callback");
    },1000)
}
abc()

console.log("welcome");
// now it is asynchrous

let promise = ()=>{
                    //producing function
    return new Promise(function(resolve,reject){
        resolve("Promise is resolved")
    })
}

console.log(promise());

promise().then(()=>{
    console.log("resolved");
}, function(){
    console.log("rejected");
})