//Type inference in zod
//When using zod, we’re done runtime validation. 
//For example, the following code makes sure that the user is sending the right inputs to update their profile information


import { z } from 'zod';
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({});
    return
  }
  // update database here
  res.json({
    message: "User updated"
  })
});

app.listen(3000);







/*
//Exclude
//In a function that can accept several types of inputs but you want to exclude specific types from being passed to it.
type EventType = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<EventType, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK
*/










//Record and Map
//Map
//maps gives you an even fancier way to deal with objects. Very similar to Maps in C++
/*
interface User {
    id: string;
    name: string;
  }
  
  // Initialize an empty Map
  const usersMap = new Map<string, User>();
  
  // Add users to the map using .set
  usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
  usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });
  
  // Accessing a value using .get
  console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }
*/








//Record
//Record let’s you give a cleaner type to objects
/*
type User= Record <string ,{ name: string , age: number}>;
const user : User = {
    "ras@ad1" : { age: 21 , name:"Pradnesh"}
}
user["ras@ad1"].age;

*/
//or
/*
interface User {
    id: string;
    name: string;
  }
  
  type Users = Record<string, User>;
  
  const users: Users = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
  };
  
  console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }

*/




//Readonly
//When you have a configuration object that should not be altered after initialization,
//  making it Readonly ensures its properties cannot be changed.
/*
type User = {
    name :string,
    age:number,
}
const user : Readonly <User>={
    name : "pradnesh",
    age : 21
}
user.age= 12 // readonly does allow u to update it or change it
*/




//Partial
//Partial makes all properties of a type optional, creating a type with the same properties, but each marked as optional.
/*
interface User{
    name: string;
    age: number;
    id: number;
    email: string;
}

type  UpdateProps = Pick < User, 'name' |'age'|'email'>   

type UpdatePropOptional = Partial<UpdateProps>

function UpdateUser(Updatedprops: UpdatePropOptional){
    // hits the database server 
    console.log("Updating user with:", Updatedprops);
}


UpdateUser ({
    name: "pradnesh",
    email: "wddsdsdw"
});
*/


// Advance Typescript
//Pick allows you to create a new type by selecting a set of properties (Keys) from an existing type (Type).
/*
interface User{
    name: string;
    age: number;
    id: number;
    email: string;
}

type  UpdateProps = Pick < User, 'name' |'age'|'email'>   


function UpdateUser(Updatedprops: UpdateProps){
    // hits the database server 
    console.log("Updating user with:", Updatedprops);
}

UpdateUser({
    name: "pradnesh",
    age: 21,
    email: "pradnesh@example.com"   // email is required because UpdateProps expects it
});
*/