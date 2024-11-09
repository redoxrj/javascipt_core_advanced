function one(){
    const username ='raju'

    function two(){
    const age =12
    console.log(username);
    }
    // console.log(age); // result in error/not defined as we are trying  access child function variable (inner scope) in outer scope(parent scope) 
    two() // that's called closure  which means if there are functions one inside another , the child function has the ability to access parent function variables but not vice versa.
    // uske child function ke liye bahaar ki duniya hi global scope hua 
    // in short block scop/functional scope can access global scope variables but not vice versa

}
one()

// ---------------Hoisting--------------------------------//
//hoisting is processs of moving the declaration of a function or a variable at the top of its scope (ussesy any uper wali line mein)
//1 . functions are hoisted entirely on the top of its scope means both declarations  and its definitions
//2 . var variables are hoisted partially on the top of its scope means only declarations  but not its assingment (definitions)
//3 . let and const variables are never hoisted the top of its scope niether declarations  nor  assingment ->will give reference error(Cannot access 'b' before initialization)
addTwoNumbers(3,8.3) // this is called hoisting  1.

function addTwoNumbers(num1,num2){
    console.log(num1+num2);
    
}
// addTwoNumbers(3,8.3)
console.log(a); //this is called hoisting  2. (error ni aaygea)
var a=56

console.log(b); //this is called hoisting  3. ( referrnece error aaygea)
let b=5
