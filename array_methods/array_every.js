const item = [1, 2, "3", 4, 5];
const isNumber = item.every(x => {
    console.log('now=', x);
    return (typeof (x) === "number")
});
console.log(isNumber);