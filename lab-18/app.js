// Object Literals, Pseudo Classes and methods
let person1 = {
    name: 'Randy',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}`)
    }
}

let person2 = {
    name: 'Sabrina',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}`)
    }
}

let person3 = {
    name: 'Alexandra',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}`)
    }
}

let person4 = {
    name: 'Vibha',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}`)
    }
}

let person5 = {
    name: 'Adam',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}`)
    }
}

/* person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello(); */

// ES5
function Person(name, city, age) {
    this.name = name;
    this.city = city;
    this.age = age;
}

Person.prototype.sayHello = function() {
    console.log(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.city}`)
}

let p1 = new Person('Randy', 'Clearwater', 34);
let p2 = new Person('Sabrina', 'Ft Lauderdale', 32);
let p3 = new Person('Alexandra', 'Dunedin', 40);
let p4 = new Person('Vibha', 'Safety Harbor', 32);
let p5 = new Person('Adam', 'New Port Richey', 34);

/* p1.sayHello();
p2.sayHello();
p3.sayHello();
p4.sayHello();
p5.sayHello(); */

//ES6
class Ppl {
    constructor(name, city, age) {
        this.name = name;
        this.city = city;
        this.age = age;
    }

    sayHello() {
        console.log(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.city}`)
    }
}

let ppl1 = new Ppl('Randy', 'Clearwater', 34);
let ppl2 = new Ppl('Sabrina', 'Ft Lauderdale', 32);
let ppl3 = new Ppl('Alexandra', 'Dunedin', 40);
let ppl4 = new Ppl('Vibha', 'Safety Harbor', 32);
let ppl5 = new Ppl('Adam', 'New Port Richey', 34);

/* ppl1.sayHello();
ppl2.sayHello();
ppl3.sayHello();
ppl4.sayHello();
ppl5.sayHello(); */

// Inheritance
class Vehicle {
    constructor(manufacturer, numWheels) {
        this.manufacturer = manufacturer;
        this.numWheels = numWheels;     
    }

    aboutVehicle() {
        console.log(`This vehicle is a ${this.type} made by ${this.manufacturer} and has ${this.numWheels} wheels.`)
    }
}

class Truck extends Vehicle {
    constructor(manufacturer, numWheels, numDoors, hasBed) {
        super(manufacturer, numWheels)
        this.type = 'truck';
        this.numDoors = numDoors;
        this.hasBed = hasBed;
    }

    aboutVehicle() {
        if (this.hasBed) {
            console.log(`This vehicle is a ${this.type} made by ${this.manufacturer} and has ${this.numWheels} wheels. It also has ${this.numDoors} doors and has a truck bed.`)
        } else {
            console.log(`This vehicle is a ${this.type} made by ${this.manufacturer} and has ${this.numWheels} wheels. It also has ${this.numDoors} doors and does not have a truck bed.`)
        }
    }
}

class Sedan extends Vehicle {
    constructor(manufacturer, numWheels, numDoors, size, mpg) {
        super(manufacturer, numWheels)
        this.type = 'sedan';
        this.numDoors = numDoors;
        this.size = size;
        this.mpg = mpg;
    }

    aboutVehicle() {
        console.log(`This vehicle is a ${this.size} ${this.type} made by ${this.manufacturer} and has ${this.numWheels} wheels. It also has ${this.numDoors} doors and gets ${this.mpg}mpg.`)
    }
}

class Motorcycle extends Vehicle {
    constructor(manufacturer, numWheels, numDoors) {
        super(manufacturer, numWheels)
        this.type = 'motorcycle';
        this.numDoors = numDoors;
        this.hasHandleBars = true;
    }

    aboutVehicle() {
        console.log(`This vehicle is a ${this.type} made by ${this.manufacturer} and has ${this.numWheels} wheels. It also has ${this.numDoors} doors and handlebars instead of a steering wheel.`)
    }
}

let v1 = new Truck('Honda', 4, 2, true);
let v2 = new Sedan('Tesla', 4, 4, 'medium', 30);
let v3 = new Motorcycle('Triumph', 2, 0);

v1.aboutVehicle();
v2.aboutVehicle();
v3.aboutVehicle();