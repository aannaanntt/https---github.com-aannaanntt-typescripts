import { CricketCoach } from './CricketCoach';
import { GolfCoach } from "./GolfCoach";
import { Coach } from "./Coach";

let mycc = new CricketCoach();
let mygc = new GolfCoach();

let myCoach : Coach[] =[];
console.log(mycc.getDailyWorkout());
console.log(mygc.getDailyWorkout())
myCoach.push(mycc);
myCoach.push(mygc);

myCoach.forEach(coaches=>{
    console.log(coaches.getDailyWorkout())
    console.log()
    
})