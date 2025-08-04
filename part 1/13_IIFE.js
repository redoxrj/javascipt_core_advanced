// IIFE : Immediately Invoked Function Expression
// two goals : 1. to invoke/run the function immediately without explicitly invoking/running eg-> database connect fuction
//2. to Create a private scope -> JavaScript didn't have block scope (before ES6), so an IIFE was used to encapsulate variables and avoid polluting the global scope.
//(koi declared value/varible in IIFE private scope se bahr ni jaaa skti chhaey wo var varible hi q na ho )

let username ='raju';  // yhe pe bhi semicolon lgana pdega yaani iife ke sattrting se pehly or end jha krna/hora hai wha pe bhi


(function dbConnect(){    // named IIFE
    console.log("DB Connected !");
    
})(); // value of ;  js -> to stop execution of first IIFE

( (str)=>{    // unnamed/simple IIFE
    console.log(`DB Connected 2 !${str}`,username);
    var hello='ranu'
    
})('yoyo')

// console.log(hello);  // -> hello is undefined error will come
// dekha kya hua ek alg se private scope hi ban gya ,ek dum provate ki var variable use krney ke baad bhi (us private scope mein) ,outer mein access krney par error dera kehr rha wo varible is not defined

//In modern JavaScript, block scope (let, const) and modules (import, export) have reduced the need for IIFE in some cases.

// dbConnect()


