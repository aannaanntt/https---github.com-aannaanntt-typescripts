import {Circle} from "./Circle"
import {shape} from "./Shape"
import { Rectangle } from './Rectangle';

let myShape = new shape(10,20);
let myCircle = new Circle(10,20,4.5);

let myRectangle = new Rectangle(45,15,12,89);

console.log(myShape.getInfo());
console.log(myCircle.getInfo())

console.log(myRectangle.getInfo())