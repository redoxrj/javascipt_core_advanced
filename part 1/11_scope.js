function outer(){
    const username ='raju'  // `username` is in the lexical scope of `outer`

    function inner(){
    const age =12
    console.log(username);
    }
    // console.log(age); // result in error/not defined as we are trying  access child function variable (inner scope) in outer scope(parent scope) 
    inner() // that's called closure  which means if there are functions one inside another , the child function has the ability to access parent function variables but not vice versa.
    // uske child function ke liye bahaar ki duniya hi global scope hua 
    // in short block scop/functional scope can access global scope variables but not vice versa

}
outer()

// ---------------Hoisting--------------------------------//
//hoisting is processs of moving the declaration of a function or a variable at the top of its scope (ussesy any uper wali line mein)
//1 . functions are hoisted entirely on the top of its scope means both declarations  and its definitions
//2 . var variables are hoisted partially on the top of its scope means only declarations  but not its assingment (definitions)
//3 . let and const variables are never hoisted the top of its scope niether declarations  nor  assingment ->will give reference error(Cannot access 'b' before initialization)

//4 functions supports full hoisting , var variables supports partial hositing(as only definition is hoisted at top of its scope) , let and const doest not support hoisting at all give refernere error (cannnot use/access before intilization)
addTwoNumbers(3,8.3) // this is called hoisting  1.

function addTwoNumbers(num1,num2){
    console.log(num1+num2);
    
}
// addTwoNumbers(3,8.3)

// sumTwo2(1,6)    // error aayega again coz at the end wo func ek varibele mein hi store hai or wo variable const hai jo ki hositing support ni krta
// const sumTwo2 = function (num1,num2){
//     console.log(num1+num2);
    
// }

console.log(a); //this is called hoisting  2. (error ni aaygea)
var a=56

console.log(b); //this is called hoisting  3. ( referrnece error aaygea)
let b=5


/* Conclusion : kisi ek particular scope yaani  kisi bhi func/if elrs/loop wala scope yaani {}  mien uske bahaar yaani global scope  mein defined/declared variables ki values avialiable hoti hai but iska reverse ni hona chayueie(jo ki shi bi h) yaani us particular scope mein defined variables bahar/global scope mein avaialle ho jaaye -- that's why var variable is disacrded (outer envirmrnrt pollute kr deta) 

two scopes are present : global scope and block scope

//closure : A closure is formed when:

A function is defined inside another function (nested function). {as we seen above as outer and inner function}

The inner function accesses variables from the outer function's lexical scope.

The inner function is returned or passed and used outside the outer function.



*/