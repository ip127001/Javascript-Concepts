//#flatten

var data = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

var array = data.reduce((acc, value, index) => {
    return acc.concat(value);
}, []);
console.log(array);


//#flatmap
var data = [{
        name: "rohit",
        age: 12,
        msg: "hey there",
        stack: [
            "morgan",
            "john",
            "akshay",
            "mean"
        ]
    },
    {
        name: "mohit",
        age: 21,
        msg: "hey there",
        stack: [
            "morgan freeman",
            "john speedy",
            "akshay",
            "mean"
        ]
    },
    {
        name: "rohit",
        age: 12,
        msg: "hey there",
        stack: [
            "morgan",
            "john speedy",
            "akshay",
            "mean sfie"
        ]
    }
]
var flatmap = data.reduce((acc, value, index) => {
    value.stack.forEach(function (stackValue) {
        if (acc.indexOf(stackValue) === -1) {
            acc.push(stackValue);
        }
    })
    return acc;
}, []);

console.log(flatmap);

//#string contenation
var arr = [1, 2, 3, 4, "5"];
var star = arr.reduce((acc, value) => {
    return acc + value;
}, 0);
console.log(star);

//# pipeline
var increment = x => x + 1;
var decrement = x => x - 1;
var halve = x => x / 2;

var fnArray = [
    increment,
    decrement,
    halve
]

var stars = fnArray.reduce((acc, fn) => {
    return fn(acc)
}, 6);

console.log(stars);