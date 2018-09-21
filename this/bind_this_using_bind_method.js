const person = {
  firstName: "John",
  sayHi() {
    console.log(`hi my name is ${this.firstName}`);
  }
};

var greet = person.sayHi.bind(person);

// setTimeout set this to global object so bind do the hard binding
// if call and apply comes in picture then also binding cann't be undone example

const person1 = {
  firstName: "rohit"
};

greet();
