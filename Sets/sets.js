//A javascript Set is a collection of unique values 

// create a set

// const letters = new Set(["a", "b", "c", "d", "e"]);

const lett = new Set()

lett.add("a")
lett.add("b")
lett.add("c")

// create a set  with variables

const newLetters = new Set()
 
const a = "a"
const b = "b"
const c = "c"

newLetters.add(a)
newLetters.add(b)
newLetters.add(c)

// foreach() method function for each Set Element
const letters = new Set(["a", "b", "c"])

let text = " ";
letters.forEach((i)=>{
    text += i + " "
})

console.log(text);
//  a b c

//The values() method returns a new iterator object containing all the values in a Set:

//letters.values()   // Returns [object Set Iterator

let txt =" "
for (const x of letters.values()){
    txt += x+" "
}  
console.log(txt);
// a b c
let C = "rejo";

