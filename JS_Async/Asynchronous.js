// a funtcion running in parallel with other functions are called
// asynchronous

// a good example is javascript setTimeout

setTimeout(myFunction,3000)

function myFunction(){
    console.log("Hello world");
}

//In the example above, myFunction is used as a callback.
//myFunction is passed to setTimeout() as an argument.

// ----- SetInterval() -----

const myFunction1 = () => {
    let d = new Date()
    console.log(`${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`);
}

// setInterval(myFunction1, 2000);


// In the example above, myFunction is used as a callback.

// myFunction is passed to setInterval() as an argument.

// 1000 is the number of milliseconds between intervals, so myFunction() will be called every second.

