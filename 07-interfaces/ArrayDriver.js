"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myCircle = new Circle_1.Circle(10, 20, 4.5);
let myRectangle = new Rectangle_1.Rectangle(45, 15, 12, 89);
//declare empty array
let myshape = [];
myshape.push(myCircle);
myshape.push(myRectangle);
//this refrence will only hold shapes not the int or string
/*
myshape.push(1465)
*/
//myshape.forEach(shapes=>console.log(shapes.getInfo()))
for (let tempShapes of myshape) {
    console.log(tempShapes.calculateArea());
    console.log();
}
