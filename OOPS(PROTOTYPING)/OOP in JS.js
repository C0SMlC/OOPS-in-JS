/// 3 method of creating prototypal inheritance
// 1. constructor based
// 2. ES6 CLASS
// 3. Object.create()

// the array method thst we have used throighout are not defined in the array object itself but are inherited through a prototype

// OOP in JS =>>

// Constructor Functions and the new Operator
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  // Never to this!
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const pratik = new Person("Pratik", 2002);

// {} => Object
// 1. New {} is created
// 2. function is called, this keyword will now point to {}
// 3. {} linked to prototype
// 4. function automatically return {}

Person.sayhi = function () {
  console.log(`Hii ${this.firstName}`);
};

console.log(pratik);
console.log(Person);

// Applyig new method

Person.prototype.calcAge = function () {
  console.log(`Age: ${2022 - this.birthYear}`);
};

pratik.calcAge();
console.log(pratik);
console.log(Person);
console.log(pratik.__proto__);
console.log(pratik.__proto__.__proto__);
