// HOISTING
// Accessing varibles and functions even before initializing it, or putting some value in it, without any error
getValue();
console.log("value of a :: ", a);
console.log(getValue);
var a = 5; // try with let and const
// allocate space for this function at the beginning of execution
function getValue() {
    console.log("function getValue() just called!");
}
// dont allocate space for this at the beginning of execution because of var type
var getData = () => {
    console.log("function getData() just called!");
};