class Person {
  constructor(fullname, birthYear) {
    this.fullname = fullname;
    this.birthYear = birthYear;
  }

  calcage() {
    this.age = 2022 - this.birthYear;
  }

  get info() {
    console.log(`I am ${this._fullname}, I am ${this.age} years old.`);
  }

  set fullname(fname) {
    if (fname.includes(" ")) {
      this._fullname = fname;
    } else {
      this._fullname = "fname";
    }
  }
}


// this will inherit all the methods and properties of Person object

// class student extends Person{

// };
// const tanvi = new student("Tanvi Pendurkar", 2002);
// tanvi.calcage();
// tanvi.info;

// if wanna pass extra attributes than person then

class student extends Person{
  constructor(fn, bY, course) {
    // Always needs to happen first! bc this keyword will b created after
    super(fn, bY);
    this.course = course;
  }
};
const tanvi = new student('Tanvi Pendurkar',2002,'ECS');
tanvi.calcage();
tanvi.info;