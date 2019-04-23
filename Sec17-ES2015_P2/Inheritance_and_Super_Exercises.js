class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  start() {
    return "VROOM!";
  }
  toString() {
    return `The make, model, and year are ${this.make} ${this.model} ${this.year}`;
  }
}

class Car extends Vehicle {
  constrcutor() {
    super(...arguments);
    this.numWheels = 4;
  }
}

class Motorcycle extends Vehicle {
  constructor() {
    super(...arguments);
    this.numWheels = 2;
  }
}

var vehicle = new Vehicle("Tractor", "John Deere", 1999)
vehicle.toString() // 'The make, model, and year are Tractor John Deere 1999'


