"use strict";



class Person {
  // must use constructor keyword
  constructor(fname, lname, birthYear) {
    this.fname = fname;
    this.lname = lname;
    this.birthYear = birthYear;
  }

  get fullname() {
    console.log(`${this.fname} ${this.lname}`);
    return `Hello ${this.fname}`;
  }

  get age() {
    return 2037 - this.birthYear;
  }
}

const pratik = new Person("Pratik", "Pendurkar",21);

pratik.fullname;

console.log(pratik);

// 1. Classes are NOT hoisted => first define then use
// 2. Classes are first-class citizens => can pass as argument or can return
// 3. Classes are executed in strict mode
