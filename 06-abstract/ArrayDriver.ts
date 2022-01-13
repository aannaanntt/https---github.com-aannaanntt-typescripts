import {Circle} from "./Circle"
import {shape} from "./Shape"
import { Rectangle } from './Rectangle';


let myCircle = new Circle(10,20,4.5);

let myRectangle = new Rectangle(45,15,12,89);

//declare empty array
let myshape:shape[] = [];


myshape.push(myCircle);

myshape.push(myRectangle)


//this refrence will only hold shapes not the int or string
/*
myshape.push(1465)
*/
//myshape.forEach(shapes=>console.log(shapes.getInfo()))
for(let tempShapes of myshape){
    console.log(tempShapes.calculateArea() )

    console.log();
}