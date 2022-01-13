import {shape} from './Shape';
export class Rectangle extends shape{

    constructor(private thex:number,private they:number, private _width:number,private _length:number){
        super(thex,they);
    }

    public get x(): number {
        return this._length
    }
    public set x(value: number) {
        this._length=value;
    }
  
  

    public get y() : number{
        return this._width;
    }

    public set y(value:number){
        this._width=value
}

    getInfo(): string {
        return super.getInfo()+ `length= ${this._length}`+ `width= ${this._width}`
    }
}