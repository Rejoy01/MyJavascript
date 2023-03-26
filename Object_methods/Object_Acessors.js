// Getters and setters allow you to get and set object properties via methods

//

const person = {
    name: 'John',
    age: 34,
    language: 'English',
    get lang(){
        return this.language
    }

}

console.log(person.lang)

// setter methood will set the value
const person2 = {
    name: 'rejo',
    age: 30,
    language: '',
    set lang(value){
         this.language = value
    }

}

person2.lang = 'Hindi'
console.log(person2.language);
console.log(person2);