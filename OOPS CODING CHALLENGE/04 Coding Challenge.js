// Coding Challenge #4

/* 

1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀

*/

// 1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }

  break() {
    this.speed -= 5;
    console.log(this.speed);
  }
}

class EV extends Car {
    #charge;  
    constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  introduce()
  {
    console.log(`${this.make}:${this.speed}:${this.#charge}`);
  }
}

const Tesla = new EV("Tesla", 100,50);
Tesla.charge = 200;
Tesla.introduce();