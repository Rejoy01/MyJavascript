
function sum(a, b,...args) {
    console.log(a+b);
    console.log(args);
}

sum(2,5,7,8,9)

// 2 5 are assigned to a b and other are assigned to a array 

function sub(){
    for(var i of arguments){
        console.log(i);
    }
    console.log("length of the arguments "+arguments.length);
}

sub(1,2,3,4,5)

let arr = [20,30,60,10,22]

let res = Math.max(...arr)
// spread operator allow us to call elements seperately

console.log(res);