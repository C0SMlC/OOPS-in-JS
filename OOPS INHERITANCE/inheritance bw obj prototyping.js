const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};


Student.prototype = Object.create(Person).prototype;
const pratik = new Student('Pratik',2002,'ECS');
pratik.calcAge();

console.dir(Student.prototype.constructor);

Student.prototype.constructor = Student;

console.dir(Student.prototype.constructor);
