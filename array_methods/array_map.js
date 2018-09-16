const items = [{
        active: true,
        name: 'rohit',
        age: 21
    },
    {
        active: true,
        name: 'mohit',
        age: 20
    },
    {
        active: false,
        name: 'baby',
        age: 10
    }
]

var mapped = items.filter(x => x.active).map(x => x.name);
console.log(mapped);
console.log(logic(mapped));

function logic(array) {
    const listElements = array.map(x => ` <li>${x}</li>`).join('\n');
    return `<ul>\n${listElements}\n</ul>`
}