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

// JS Array every()

