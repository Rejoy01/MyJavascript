// dom method to select html element using id
document.getElementById("title").innerHTML = "Title From Script"

let res = document.getElementsByClassName("classValue")
//accessing elements with same class name
res[0].innerHTML = "sub heading from script"
res[1].innerHTML = "Script LInk"

let Tag = document.getElementsByTagName("h2")
console.log(Tag);
// select first element with classname text
document.querySelector(".text").innerHTML = "Updated Content"
// select all elements of a tag
//document.querySelectorAll("a").innerHTML = "updated Link"

//select all a tag with classname demo
let aTags = document.querySelectorAll("a.texts")

console.log(aTags);