function person(First,Last , Age, EyeColor){
    this.firstName = First;
    this.lastName = Last;
    this.age = Age;
    this.eyeColor = EyeColor;
    this.language = "English"
}

const employee1 = new person("Rejo","Wilson",25,"Blue")

console.log(employee1);