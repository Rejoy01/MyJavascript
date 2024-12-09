// find length

let Word = "Javascript";
let length = Word.length;

console.log(length);

let FirstFiveWord = Word.slice(0, 5)

console.log(FirstFiveWord);

//Case Conversion

let Word2 = "JAVaScRIPT";

console.log(Word2.toLocaleUpperCase());

const Check = (a,b)=>{

    a.toLocaleUpperCase() === b.toLocaleUpperCase() ? console.log("Both words are same") : console.log("Both words are no same");

}

Check(Word,Word2)


// Extract the word "JavaScript" from the string "Learn JavaScript Programming" using slice().

let str = "Learn JavaScript Programming";

