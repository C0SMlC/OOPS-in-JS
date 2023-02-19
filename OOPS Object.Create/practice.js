'use strict'

const objcreate =
{
    calcage() {
     this.age = 2022- this.by;
     return this.age;
    },
    
    introduce()
    {
      console.log(`Hello...!!! My name is ${this.name} and my age is ${this.calcage()}`);
    },

    init(name,by)
    {
        this.name=name;
        this.by = by;
    },
};



const pratik = Object.create(objcreate);
pratik.init('Pratik',2002);
pratik.introduce();

const Sarah = Object.create(objcreate);
Sarah.init("Sarah", 2000);
Sarah.introduce();