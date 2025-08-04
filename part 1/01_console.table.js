let accountId =4545
const ball ='round'

var same =true

console.table([accountId,ball,same])

let a = 34
// let l
// const b =56
const b =undefined// const value cannot be empty once declared it has to be defined something even undefined(has to assign something to it,without the code will give error not the case with let) 
var c =45

//   a=67    // let variables can be reassigned but caanot re-declare within same functional scope and block scope
//   b=67 // const variables cannot be reassigned neither re-declare within same functional and block scope
//   var c=67 // var variables can be reassigned + also can be re-declared the same variable name within same block and functional scope ,2nd one that's the problem(of course of same variable name we are taking about)
if(true){
    let a =5  //let can be re-declared the same variable name within diffreent block and functional scope but each scope value will be different
    console.log("value of inner a ,", a);
    
    // const b =5  //const also can be re-declared the same variable name within diffreent block and functional scope but each scope value will be different
    var c= 99 // that's the problem with var in every scope(block and functional ) its value will be changed and will be the same all over 
console.log(c);

}

console.log(a);
console.log(b);
console.log(c);


console.log(typeof c);
// const stringC = String(c)
const stringC = c.toString()
console.log(stringC);

const id = Symbol('123')
const id2 = Symbol('123')

console.log(id==id2); // synmbol is used for uniqueness
console.log(id, id2);

const num =56565655655656565656565656787878787878
const numBig =565656556556565656565656567878787878n

console.log(typeof num);
console.log(typeof numBig);

// primitive data types -> 7 (number,string,bigint,boolean,null,undefined,symbol) #call by value ->originals won't be chnaged only copy pass happens
// non-primitive data types -> 3 (object,array,function) #call by reference ->originals will be chnaged as original refernce is given

//depending upon how variables can be stored in the memory and retrived we have two memory/data types:
// stack(primitive) -> stack memory mein jo bhi varaiable declare hoti hai uska humien copy milta hai
// heap(non-primitive) -> heap memory mein jo bhi varaiable declare hoti hai uska humien original refrence milta hai

let email1 ='rjrajnish2017@gmail.com'
let email2 =email1
email2='fuddu1@gmail.com'
console.log(email2);
console.log(email1); // original did'nt changed , coz copy is provided in the stack memory

// but,

let user1 ={
    email :'rjrajnish2017@gmail.com',
    pass: 232323
}
let user2 =user1

user2.email='fuddu1@gmail.com'

console.log(user2.email);
console.log(user1.email); //now original one also chnaged coz referenced in passed in the heap memory

let user3 ={
    email :'fuddu1@gmail.com',
    pass: 232323
}
console.log(user1==user2);
console.log(user1===user2);
console.log(user1===user3);
console.log(user1==user3);


