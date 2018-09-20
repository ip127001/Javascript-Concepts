var luke = {
    name: "luke skywalker",
    jedi: true,
    parents: {
        father: {
            jedi: true
        },
        mother: {
            jedi: false
        }
    }
}

var han = {
    name: "han solo",
    jedi: false,
    parents: {
        father: {
            jedi: false
        },
        mother: {
            jedi: false
        }
    }
}

var anakin = {
    name: "anakin skywalker",
    jedi: true,
    parents: {
        mother: {
            jedi: false
        }
    }
}

var stars = [luke, han, anakin];

function reducer(character) {
    var piep = "parents.father.jedi";
    return piep.split(".").reduce((prev, next) => {
        console.log(character);
        if (prev) {
            return prev[next];
        }
        return false;
    }, character);
}

stars.forEach(function (star) {
    console.log("your father is jedi = ", reducer(star));
})