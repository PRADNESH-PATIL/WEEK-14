// Arrays in TS

//Given a list of users, filter out the users that are legal (greater than 18 years of age)
/*
interface User {
	firstName: string;
	lastName: string;
	age: number;
}


function isLegal(users: User[]){
    let ans : User[] =[];
    for(let i=0 ; i<users.length ; i++){
        if(users[i].age>18){
            ans.push(users[i]);
        }
    }
    return ans;
}
 
const Legal = isLegal([
    {
        firstName: "Pradnesh",
        lastName:"Patil",
        age:21
    },
    {
        firstName: "Rai",
        lastName:"Patil",
        age:20
    },
    {
        firstName: "Pradnesh",
        lastName:"Patil",
        age:15
    }
])
console.log(Legal);
*/


//Given an array of positive integers as input, return the maximum value in the array
/*
function getMax (num : number[]){
    let max = 0;
    for(let i=0 ; i<num.length; i++){
        if(num[i]>max){
            max=num[i]
        }
    }
    return max 
}
console.log(getMax([1,2,3,4,5,6]))
*/

// Interfaces vs Types
// Creates two types call user and admin 
// create a function that takes a user and admin as a input and returns a saying "welcome , [name]"

/*
interface Admin {
    name: string;
    permission: string;
}
interface User{
    name: string;
    age: number;
}
type  UserorAdmin = Admin | User;

function greet(user: UserorAdmin){
    console.log(user.name)
}
*/


// In Types we can do Union and Intersections 

// This is Union


// This is Intersection
/*
type Employee = {
    name: string;
    startdate: string;
}

type Manager ={
    name: string;
    department: string;
}

type Teamlead = Employee & Manager;

let e: Employee ={
    name : "Pradnesh",
    startdate: "10-2-25"
}

let m : Manager={
    name: "Harkirat",
    department: "IT"
}

let t: Teamlead={
    name: "Pradnesh",
    startdate:"12-3-25",
    department:"IT"
}
*/



//Difference between Interfaces and Types
/*
interface User {
    name: string;
    age: number;
}

type User1 = {
    name: string;
    age: number;
}

*/







/*
//Abstract classes
abstract class User{
    name: string;
    constructor(name: string){
        this.name= name;
    }
    abstract greet():string;
    hello(){
        console.log("hi there");
    }
}
class Manager extends User{
    constructor (name: string){
        super(name);
    }
    greet() {
        return "hi" + this.name;
    }
}
const manager = new Manager("Alice");
console.log(manager.greet()); 
manager.hello();  
*/


// Interfaces in Typescript
/*
interface User{
    name:string,
    age: number,
    isLegal(): boolean
}
 class Manager implements User{
    name: string;
    age: number;
    constructor (name :string, age : number)
    {
        this.name =name;
        this.age= age;
    }
    isLegal(): boolean {
        return this.age > 18
    }
 }
 const m =  new Manager("Pradnesh" ,21);
 console.log(m.isLegal())

*/


/*
interface People{
    name: string;
    age: number;
    //greet :() => string
}

class Manager implements People{
    name: string;
    age: number;
    //greet: () => string
    constructor (name: string , age: number){
        this.name= name;
        this.age= age;
    }
}
let user = new Manager("john", 30);
console.log(user)

*/



/*
interface People{
    name: string,
    age: number,
    greet :() => string
}
const person :People = {
    name: "Pradnesh",
    age: 21,
    greet: () => {
        return "hi"
    }
}
let persons = person.greet()
console.log(persons)
*/

/*interface User {
    name: string,
    age: number,
    address?: {
        city: string,
        country: string,
        pincode: number
    }
}
let user2 :User ={
    name:"Harkirat",
    age: 21
}
let user :User = {
    name : "Pradnesh",
    age: 15,
    address: {
        city: "Mumbai",
        country: "India",
        pincode: 400093
    }
}
function isLegal(user:User):any{
    return  user.age > 18
}
console.log(isLegal(user));

function Legal(user2:User):boolean{
    return user2.age > 18
}
console.log(Legal(user2));
*/







/*
function greet (name: string): string{
    return name
}

function isEven (num:number): boolean{
    if(num%2 == 0){
        return true
    }
    else{
        return false
    }
}

const greeting = greet("Pradnesh")
console.log(greeting)

*/