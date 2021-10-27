"use strict";

class MyClass {
    constructor(args1, args2) {
        this.name = args1;
        this.age = args2;
    }
}

const myclass = new MyClass("nakamura", 23);

console.log(myclass.name);
console.log(myclass.age);