// To create  a class inheritance use the extends keyword
// A class with a class inheritance inherits all the methods from another class

class Car{
    constructor(brand){
        this.carname = brand
    }
    present() {
        return 'I have ' + this.carname 
    }
}

class Model extends Car{
    constructor(brand,model){
        super(brand)
        this.model = model
    }
    show(){
        return this.present() +' ,it is a ' + this.model
    }
}

const myCar = new Model("Ford","Mustang")

console.log(myCar.show());

// super method refers to parent class
// by Calling super method in the constructor method we call parents constructor method and gets access to parent
// properties and methods


//Getters and setters

// To add getters and setters in the class use the get and set keywords
class newCar{
    constructor(brand){
        this.carname = brand
    }
    get cnam(){
        return this.carname
    }
    set cnam(x){
        this.carname = x
    }

}

const CarOne = new newCar("BMW")
console.log(CarOne.cnam);

CarOne.cnam = "Tata"
console.log(CarOne.cnam);
