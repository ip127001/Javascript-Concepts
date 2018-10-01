function starCar(carId) {
    let message = "hello"
}
console.log(message);

//---------------------------------
function starCar(carId) {
    let message = "hello";

    function startFn() {
        let message = "new hello"
    }
}
console.log(message);
//---------------------------------
function starCar(carId) {
    let message = "hello";

    function startFn() {
        console.log(message);
    }
}