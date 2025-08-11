




/*
// Interfaces in Typescript
//Create a function isLegal that returns true or false if a user is above 18. It takes a user as an input.
interface UserType {
    firstname: string,
    lastname: string,
    age: number
}
function isLegal(user:UserType){
    if(user.age>18){
        return true
    }
    else{
        return false
    }
}
const user: UserType = {
    firstname: "John",
    lastname: "Doe",
    age: 18
};

// Now call the function:
console.log(isLegal(user));
*/



/* Interfaces is not used  so the code become complex 
function greet (user:{
    name: string,
    age: number
}) {
    console.log("hello " + user.name)
}
let user = {
    name :"Pradnesh",
    age : "20"
}
greet(user)
*/

/*
Problem 4
function delayedCall(fn: () => void) {
    setTimeout(fn, 1000);
}

delayedCall(function() {
    console.log("hi there");
})

*/

/*
Problem 3
function Age(x:number){
    if(x>18){
        return true
    }
    else{
        return false
    }
}
console.log(Age(13));
*/

/*
Problem 2
function Sum(Add:number,Add1:number){
    return Add + Add1
}
let ans = Sum(1,3)
console.log(ans)
*/

/*
Problem 1
function Hello (firstName : string | number){
    console.log("Hello " + firstName);
}
Hello("Pradnesh")
Hello(1)
*/

/*let x: number=1;
console.log(x)*/