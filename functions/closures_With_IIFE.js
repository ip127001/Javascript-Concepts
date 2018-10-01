let app = (function () {
    let count = 1;
    let getId = function () {
        return count;
    };
    return {
        getId: getId
    };
})();

console.log(app.getId());