//static class method are defined on the class itself
// you cannot call a static method on an object only on an object class

//If you want to use the myCar object inside the static method, you can send it as a parameter

class Car{
    constructor(name){
        this.name = name;
    }
    static hello(x){
        return "Hello " + x.name
    }
}
const myCar = new Car("Ford")
console.log(Car.hello(myCar));