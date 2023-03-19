// I will Call Back Later

// a callback is a function passed as an argument to another function
// this technique allows a function to call another function
// a callback function can run after another function has finished

function myDisplayer(some) {
   console.log(some);
  }
  
  function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
  }
  
  let result = myCalculator(5, 5);
  myDisplayer(result)

//we have to call two function 

//Suppose you want to do a calculation, and then display the result.

//You could call a calculator function (myCalculator), save the result, and then call another function (myDisplayer) to display the result:


function myDisplayer1(some) {
    console.log(some);
  }
  
  function myCalculator2(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator2(5, 5, myDisplayer1)

//Using a callback, you could call the calculator function (myCalculator) with a callback (myCallback), and let the calculator function run the callback after the calculation is finished:
