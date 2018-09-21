class Person {
    constructor(firstName) {
        this.firstName = firstName;
    }
    sayHi() {
        console.log(`${this.firstName}`);
    }
}

const person = new Person("john");

const glue = person.sayHi();

glue();

//-----------------------------------------
class Person {
    constructor(firstName) {
        this.firstName = firstName;
        this.sayHi = this.sayHi.bind(this);
    }

    sayHi() {
        console.log(`${this.firstName}`);
    }

}

const person = new Person("john");

const glue = person.sayHi;

glue();

//--------------------------------------------

class Person {
    sayHi = () => {
        console.log(`${this.firstName}`);
    };
}

const person = new Person("john");

const glue = person.sayHi;

glue();