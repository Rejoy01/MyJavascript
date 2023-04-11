let x = 10 ;
let y = 30 ;

let arr1 = [10,20,30];
let arr2 = [60,70,80];


            //arguments
function sum(value1,value2,display){ //function which receives callback fn is hiher Order function
    console.log('this is sum fn');
    let x = value1 + value2;
    display(x)
}

function display(total){
    console.log(`Total is ${total}`);
}


sum(x,y,display); //Arguments //callbackfn

// In arrow function this keyword can't be used

// In normal fn this keyword refers to the object which it belongs to