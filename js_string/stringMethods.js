// length property returns length

let text ="alkfjlkajklfj"

console.log(text.length);
//13

// three methods for extracting a part of a string

//slice (start, end)
//substring(start, end)
//substr(start,length)

//if you omit the second parameter, substring() will slice out the rest of the string.

let text2 = "Apple, Banana, Kiwi"

console.log(text2.slice(7,13)); //first pos 0 second pos 1
//banana

// substring is similar to slice 
// only difference is that values less than zero are treated as zero

let part = text2.substring(-9,5)
console.log(part);

//apple

// substr is similar to slice only difference is that second parameter specifies the length of the extracted part

// Replace () method

// replace a specified value with another

// The replace() method does not change the string it is called on.

// The replace() method returns a new string.

// The replace() method replaces only the first match

let newText = text2.replace("Apple","blueberry")
console.log(newText);
//blueberry, Banana, Kiwi

//replace() method is case sensitive use a regular expression with an /i
let newText2 = newText.replace(/BLueberry/i,"strawberry")
console.log(newText2); //strawberry, Banana, Kiwi

//To replace all matches, use a regular expression with a /g flag (global match):
let word = "hi hello world hI hello world"
let newWord = word.replace(/world/g,"Rejo")
console.log(newWord);//hi hello Rejo hi hello Rejo

let text1 = "Hello World"

// using gi will resolve the problem of casesensitive
let newWord2 = word.replaceAll(/hi/gi,"hey")
console.log(newWord2);



