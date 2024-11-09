function createUserName (username){
    // complex db call (say verifcation after which)
    this.username = username;
    console.log("createUserName func called");
    

}

function createUser (username,email,password){
    // createUserName(username) // nhi set hua this mein call hua jbki coz ye function call hoke execution context se hat gya kaam khtm honey par saath hi apney saarey this. ke properies bhi kho gyi usi ke saath quni by defaylt sab apney scope ke this mien krtey hai kaam
    // so call use krna pdega or bahar ke this ka reference dena pdega taaki usmein(bahar ke this, dusre function ke this) set krdey , also called curent execution context pass kr dena dsure func ko using call

    createUserName.call(this,username) // passing curernt func ka this // curernt execution context ka reference taaki usmein intented func value set krdein this mein
    
    this.email = email;
    this.password = password;
}

const user1= new createUser('raju111','raju@gmail.com',454545)
console.log(user1);




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
This means this will not refer to a new instance object; instead, it will either refer to the global object (window in a browser) or be undefined in strict mode.
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