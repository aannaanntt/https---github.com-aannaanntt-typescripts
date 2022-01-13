"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Custom = void 0;
var Custom = /** @class */ (function () {
    function Custom(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(Custom.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Custom.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Custom;
}());
exports.Custom = Custom;
// let's create an instance
