"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Shape_1 = require("./Shape");
class Rectangle extends Shape_1.shape {
    constructor(thex, they, _width, _length) {
        super(thex, they);
        this.thex = thex;
        this.they = they;
        this._width = _width;
        this._length = _length;
    }
    get x() {
        return this._length;
    }
    set x(value) {
        this._length = value;
    }
    get y() {
        return this._width;
    }
    set y(value) {
        this._width = value;
    }
    getInfo() {
        return super.getInfo() + `length= ${this._length}` + `width= ${this._width}`;
    }
    calculateArea() {
        return this._length * this._width;
    }
}
exports.Rectangle = Rectangle;
