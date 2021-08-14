// CALL, APPLY AND BIND
let car = {
    company: "Jeep",
    model: "Compass"
}
let printDetails = function (year, color) {
    console.log(this.company + " " + this.model + " " + year + " " + color);
}
// call method used to invoke a function directly by passsing the reference (car) which points to this variable inside the method (printDetails)
printDetails.call(car, "2021", "White");

let bike = {
    company: "Royal Enfield",
    model: "Interceptor 650"
}

// apply is eactly same as call method, difference is that it takes second argument as array list of the parameters which need to be passed to the printDetails function
printDetails.apply(bike, ["2020", "Black"]);

