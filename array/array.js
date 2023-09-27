//JavaScript variables can be objects. Arrays are special kinds of objects.

// Because of this, you can have variables of different types in the same Array.

// You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:

const myFn =()=>{
    console.log("welcome");
}

const myCars =["volvo","Tata","Kia"]

const myArray = []

myArray[0] = Date.now;
myArray[1] = myFn;
myArray[2] = myCars;

console.log(myArray);

// return(myArray[1]());
//welcome

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// accessing last element of array

console.log(fruits[fruits.length-1]);



// adding ele
fruits.push("Lemon")

// new ele can be also add bylength property
fruits[fruits.length-1] = "Guvi" 

fruits.forEach((e)=>{
    console.log(e);
})

// difference between array and object .....array use numbered index whereas object use named index

console.log(typeof(fruits)); 
// typeof returns value as object type

// to slove that
Array.isArray(fruits)