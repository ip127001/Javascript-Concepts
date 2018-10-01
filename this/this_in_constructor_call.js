"use strict"

function Person(firstName) {
    this.firstName = firstName;
}

var person = new Person('john');

console.log(person);

//----------------------


function Person1(firstName) {
    this.firstName = firstName;
    return {
        firstName: "jane"
    }
}

var person1 = new Person1('john');

console.log(person1);


// ---------------------