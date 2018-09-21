const person = {
    firstName: 'john'
}

function sayHi() {
    console.log(`${this.firstName}`);
}

person.sayHi = sayHi;
person.sayHi();

const greet = sayHi.bind(person);
greet();

setTimeout(function () {
    person.sayHi()
}, 1000);