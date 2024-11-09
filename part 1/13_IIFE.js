// IIFE : Immediately Invoked Function Expression
// two goals : 1. to invoke/run the function immediately without explicitly invoking/running eg-> database connect fuction
//2. to remove problem of getting polluted from global scope as we know inside scope/child scope can access values from parent scope

(function dbConnect(){
    console.log("DB Connected !");
    
})(); // value of ;  js -> to stop execution of first IIFE

( (str)=>{
    console.log(`DB Connected 2 !${str}`);
    
})('yoyo')

// dbConnect()


