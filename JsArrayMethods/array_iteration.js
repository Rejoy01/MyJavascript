//map  method

// Map method method create a new array by performing  a function on each array element
// Map method does not execute the function for array elements without values
// Map method does not change the oringal array

const array = [1,2,3,4,5,6]



const newArray = array.map((arr,)=>{
  return arr*2 
})

console.log(newArray)
//[ 2, 4, 6, 8, 10, 12 ]

// using Foreach method



for(var i = 0 ; i<array.length;i++){
  if (array[i] == 2){
    console.log("from for loop method----match found")
  }
}


array.forEach((arr)=>{
  if(arr==1){
    console.log("using foreach method----match found")
  }
})

//output
// from for loop method----match found
//using foreach method----match found

// Filter Methods 

// filter methods create a new array with array elements that pass a test

const arrayFiltered =  array.filter((ele)=>{
    return ele > 3
})
console.log(array);
console.log(`${array}---arrayFiltered -----${arrayFiltered}`)
// 4,5,6

// reduce method runs a function on each array element to produce a single value
const numbers = [45,4,9,16,25]

let sum = numbers.reduce((total,value)=>{
    return total + value
})
console.log(sum); //99

// JS Array SOME ()method

var employee= [
[01,"ram","10 years",35],
[02,"anil","2 years",25],
[03,"nikhil","4 years",28],
[04,"nikhil","4 years",25]
]

let res = employee.some((emp)=>emp[1]=="anil")
let neWres = employee.some((emp)=>emp[1]=="george") //false

console.log(res);
// return true

//Find Method Returns the value that satisfies the condition
let Res = employee.find((emp)=>emp[0]=== 03);

console.log(Res);
// [ 3, 'nikhil', '4 years', 28 ] it

// find index  indexOf () Method is used
// if there is no matching element returns -1

let num= [1,2,3,4,5,6]
console.log(num.indexOf(6)); // 5

let NUm = [10,20,30,40]

let FIndres = NUm.findIndex((num)=> num > 20)

console.log(FIndres);