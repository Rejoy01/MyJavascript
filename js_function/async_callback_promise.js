function abc( ){
    setTimeout(()=>{
        console.log("callback");
    },2000)
}
abc()

console.log("welcome");
// now it is asynchrous