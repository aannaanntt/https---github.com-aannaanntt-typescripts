var constshort = /** @class */ (function () {
    function constshort(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(constshort.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(constshort.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return constshort;
}());
// let's create an instance
var myCustom = new constshort("Martin", "Dixon");
console.log(myCustom.firstName);
console.log(myCustom.lastName);
