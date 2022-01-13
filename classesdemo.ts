class Customer{

    firstName:string;
    lastName:string

    constructor(theFirstName:string,theLastName:string){
        this.firstName=theFirstName;
        this.lastName=theLastName;
    }
}

let cust = new Customer("Anant","Mishra");


console.log(cust.firstName + " "+ cust.lastName)