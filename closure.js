// CLOSURES
// A function togather bundled with its lexical environment (lexical scope) 
function closureExample() {
    // Use let instead of var will do the job without using wrapper function, setTimeout create a new copy (of containing function) of closures with different i values
    for (var i = 0; i <= 5; i++) {
        // In case of var, we have to wrap the setTimeout in a new function.
        function myFunction(x) {
            setTimeout(function () {
            console.log(x);
            }, x * 1000);
        }
        // Every time we call this function with i, it create a new capy of x with the i' value at line number 132..
        myFunction(i);
    }
}
closureExample();

// If the function executed in the other scope it still remembers its lexical environment
function outer() {
    var a = 5;
    function inner() {
        console.log("Value of a = ",a);
    }
    inner();
}
outer();

function x() {
    var a = 10;
    function add(b) {
        return a + b;
    }
    return add;
}
var c = x();
var sum = c(20);