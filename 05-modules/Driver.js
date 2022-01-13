"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Custom_1 = require("./Custom");
// let's create an instance
var myCusto = new Custom_1.Custom("Martin", "Dixon");
myCusto.firstName = "Susan";
myCusto.lastName = "Public";
console.log(myCusto.firstName);
console.log(myCusto.lastName);
