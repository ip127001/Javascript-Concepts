"use strict"

function Person(firstName) {
    this.firstName = firstName;
}

var person = new Person('john');

console.log(person);

//----------------------


function Person(firstName) {
    this.firstName = firstName;
    return {
        firstName: "jane"
    }
}

var person = new Person('john');

console.log(person);


// ---------------------