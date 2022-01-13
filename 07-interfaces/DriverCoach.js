"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CricketCoach_1 = require("./CricketCoach");
const GolfCoach_1 = require("./GolfCoach");
let mycc = new CricketCoach_1.CricketCoach();
let mygc = new GolfCoach_1.GolfCoach();
let myCoach = [];
console.log(mycc.getDailyWorkout());
console.log(mygc.getDailyWorkout());
myCoach.push(mycc);
myCoach.push(mygc);
myCoach.forEach(coaches => {
    console.log(coaches.getDailyWorkout());
    console.log();
});
