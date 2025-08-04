/*
In JavaScript, new is a keyword used to create an instance of an object from a constructor function. Here’s how it works in your code:

Constructor Function (createUser):

createUser is defined as a function that takes username, email, and password as parameters. When called with new, it becomes a constructor function that initializes properties for an instance (or object) of createUser.


new Keyword:

When you use new createUser(...), JavaScript does the following:
Creates a new empty object.
Sets the prototype of this new object to the prototype of createUser.
Executes the createUser function in the context of this new object (meaning this inside the function refers to the new object).
Returns this new object unless the function explicitly returns another object.


What Happens if You Don’t Use new:

If you call createUser('raju111', 'raju@gmail.com', 454545) without new, the function will be invoked as a regular function, not as a constructor.
This means this inside createUserFunc  will not refer to a new instance object; instead, it will either refer to (In Node.js,) this refers to the global object (global). (window in a browser) or be undefined in strict mode.
so ,
global.username = 'raju'
global.password = 3434

also The function doesn't return anything (explicityel), so user1 will be: undefined
if it rrturned expliciyely this  , then whole complex global object will be print along with the two proprties above in it.


This results in properties like email and password being set globally (or an error in strict mode), which is likely not the intended behavior.


In your code, a more conventional approach would be to use a class instead:

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}

const user1 = new User('raju111', 'raju@gmail.com', 454545);


*/

// two common ways to create new objects in JavaScript: one using a 1. constructor function, and the other using a 2.class.

// 1. const createUserFunc = function(username, password) {
//     this.username = username;
//     this.password = password;
// }

// const user1 = new createUserFunc('raju', 3434);

//createUserFunc is a regular function.
//When called with new, it creates a new object and sets this to that object.
// custom Prototype methods can be added manually using prototype like this:

// createUserFunc.prototype.sayHi = function() {
//     console.log(`Hi, ${this.username}`);
// };

// 2  .
// class createUserClass {
//     constructor(username, password) {
//         this.username = username;
//         this.password = password;
//     }
// }

// const user2 = new createUserClass('raju2', 4545);

//This is syntactic sugar over the constructor function (but Modern es6 prefrered)
// It looks cleaner and is more aligned with OOP (Object-Oriented Programming) style.
// Methods are added automatically to the prototype:

// class createUserClass {
//     constructor(username, password) {
//         this.username = username;
//         this.password = password;
//     }

//     sayHi() {
//         console.log(`Hi, ${this.username}`);
//     }
// }
