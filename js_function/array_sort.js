// the reverse() method reverses the elements in an array.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();

//sorting numbers will cause an error we can fix it by adding compare function

const points =[40,100,1,5,25,10]

points.sort(function(a,b){return a-b});

console.log(points);
