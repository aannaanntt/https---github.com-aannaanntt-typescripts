import {shape} from './Shape';
export class Circle extends shape{

    constructor(private thex:number,private they:number, private _radius:number){
        super(thex,they);
    }

    public get x(): number {
        return this._radius
    }
    public set x(value: number) {
        this._radius=value;
    }

    getInfo(): string {
        return super.getInfo()+ `radius=${this._radius}`
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this._radius,2)
    }
}