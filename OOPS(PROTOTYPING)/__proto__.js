const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person("Matilda", 2002);
const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);


console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);



console.log(Person.prototype);
