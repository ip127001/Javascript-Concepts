function reducer(acc, value, index, array) {
    var intermediaryValue = acc + value;

    if (index === array.length - 1) {
        return intermediaryValue / array.length
    }

    return intermediaryValue;
}

var data = [1, 2, 5, 3, 3, 61, 1]
var mean = data.reduce(reducer, 0);

console.log(mean);