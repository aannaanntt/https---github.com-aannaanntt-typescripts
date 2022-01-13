var Customer = /** @class */ (function () {
    function Customer(theFirstName, theLastName) {
        this.firstName = theFirstName;
        this.lastName = theLastName;
    }
    return Customer;
}());
var cust = new Customer("Anant", "Mishra");
console.log(cust.firstName + " " + cust.lastName);
