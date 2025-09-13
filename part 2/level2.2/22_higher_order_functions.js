//Scenario 1 : existing simple func
/*
function sayHello(){ // normal function
    console.log("hello");
    
}


// higher orrder functions are nothing but functions that can acccepts any other given func as paramter/argument ,can execute it and also has capibitlites to return that func
// kul milake baat hai higherOrderFuncions given func ko as a variblie ki trah treat krta hai bass
const higherOrderFuncion =(func)=>{
    func() // executing the function passed as argument
}

higherOrderFuncion(sayHello)

*/

//Scenario 2 :  existing func with paramter

function sayHelloName (username){
    console.log(`hello ${username}`);
    
}
/*
// const higherOrderFunctionComplex=(func)=>{} //step 1
// const higherOrderFunctionComplex= (func)=>{()=>{}} // step 2 (one more func level)
// const higherOrderFunctionComplex= (func)=>()=>{}  // step 3 (remobing exyta {} )
const higherOrderFunctionComplex= (func)=>(func)=>{func(username)}


higherOrderFunctionComplex(sayHelloName('raju')) // worked accidendmatly ,but not correct
*/

//MORE better
const higherOrderFunctionComplex = (func)=>{
  return (username)=>{func(username)}
  // here the highrt order func rerturnig a func that accepts a paramter and  executues the given func with that paramter 
}

const wrapped= higherOrderFunctionComplex(sayHelloName) // now wrapped became a function now since higherOrderFunctionComplex retuned a function accepting some parmater
wrapped('shyaam')