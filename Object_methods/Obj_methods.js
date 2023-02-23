let obj  ={}
obj.name = "messi"
obj.year = 2020
obj.speak = function(){
    return `My Name is ${this.name} and this is year ${this.year}`;
}