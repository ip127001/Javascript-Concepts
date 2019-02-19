// Variable Hoisting
var myVariable = 'Outer Value';
var fn = function(){
    alert(myVariable);
    var myVariable = 'New Local Value'; 
};
fn();

// var myVariable = 'Outer Value';
// var fn = function(){
//     var myVariable;
//     alert(myVariable);
//     myVariable = 'New Local Value'; 
// };
// fn();


// Function Declaration Hoisting
function foo(){
    function bar() {             
        return 1;
    }
    return bar();
    function bar() {
        return 2;
    }
}
alert(foo());

// function foo(){
//     function bar() {             
//         return 1;
//     }
//     function bar() {
//         return 2;
//     }
//     return bar();
// }
// alert(foo());



// Function Expression Hoisting
function foo2(){
    var bar = function() {
        return 1;
    };
    return bar();
    var bar = function() {
        return 2;
    };
}
alert(foo2());

// function foo2(){
//     var bar = undefined;
//     var bar = undefined;
//     bar = function() {
//         return 1;
//     };
//     return bar();
//     bar = function() {
//         return 2;
//     };
// }
// alert(foo2());