var Person = function(name, age) {
    return {
        name: name,
        age: age,
        sayName: function() {
            console.log(this.name);
        },
        mother: {
            name: 'Stacey',
            sayName: function() {
                console.log(this.name);
            }
        }
    }
}

var jim = Person('Jim', 42);
jim.sayName();                         //Jim
jim.mother.sayName();                  // Stacey


//example-2

var nameProp = function(obj) {
    obj.sayName = function() {
        console.log(this.name);
    }
}
var me = {
    name: 'me',
    age: 20
}
var you = {
    name: 'you',
    age: 21
}
nameProp(me)
nameProp(you)

me.sayName()     //me
you.sayName();   //you