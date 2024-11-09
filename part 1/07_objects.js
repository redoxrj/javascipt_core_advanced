// singleton (singleton) --> ek hi object banata hai when using constructor
 // but is not singleton made when using literals(literals ki trah jab declare krtey hai)

 // dono trah se objects bantey hai constructor se bhi or litrals se bhi(difference only of singleton)

//  Object.create()  //1.  yhi hai constructor wala
//----------------------------------------------------------------//
 //2.Objects Literals

 const mySymbol = Symbol('Unique Key')
 const mySymbol2 = Symbol('Unique Key')
//  console.log(mySymbol);
//  console.log(mySymbol2);
//  console.log(mySymbol===mySymbol2); //false, since symbols are used for uniqueness

 const user={
    name:"Raju",
    'full name' : "Raju kumar",
    age: 13,
    lmao:["dd", "ddd", "ddd", "ddd", "ddd"],
    // mySymbol :"value is something"  // that's not how to use symbol in object
    [mySymbol] :"value is something" ,
    greet1: function(){
        console.log("Good morning!");
    }
 }

 console.log(user);
 console.log(typeof user);
 console.log(user.name);
 console.log(user['name']);
 console.log(user['full name']);
console.log(user.age);
user.age=18
console.log(user.age);
user.role="admin"
console.log(user.role);

// console.log(user.mySymbol);  // so acccess will be different too
// console.log(typeof user.mySymbol);
console.log(user[mySymbol]);
console.log(typeof user[mySymbol]); // type will remain the same but is now using as a symbol

// console.log(user.age);
// Object.freeze(user); // now the object becomes constant , nothing can be changed
// user.age=3434
// user.haha="haha"
// console.log(user.age);
// console.log(user.haha);

console.log(typeof user.greet1);
console.log(user.greet1());
// cannnot use this.  in arrow functions(arrow functions ka khud ka this ni hota)
// user.greet2=()=>{
//     console.log(`Good morning! ${this.name}`);
//     // this. is used for getting current object/context key value (to get its other key-value pairs) this=user (object here)
    

// }

user.greet2=function (){
    console.log(`Good morning! ${this.name}`); // string interpolation
    // this. is used for getting current object/context key value (to get its other key-value pairs) this=user (object here)
    

}
console.log(user.greet2());
console.log(user); // interstingly symbol key value pair is printed at the lat line of the object
// console.log(user[mySymbol]);
// console.log(typeof user[mySymbol]); // type will remain the same but is now 










 
 


