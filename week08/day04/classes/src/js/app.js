import Person from "./person";
import Triangle from "./Triangle";
import Shape from "./Shape";
import { add, multiply } from "./math";

console.log(add(4, 5) ) ;
console.log(multiply(5,20));

class Animal {}

const jacques = new Person("Jacques","jacques@ga.co");
jacques.sayHi();

const s1 = new Shape("Circle");
const s2 = new Triangle(40,20);
// console.log(s2)

class Vehicle {
  constructor(type) {
    this.type = type;
    console.log(`A vehicle of type ${this.type} was created`);
  }
}

class Car extends Vehicle {
  constructor(model) {
    super("Car");
    this.model = model;
    console.log(`The model of the car is ${this.model}`);
  }
}

const car = new Car("BMW");