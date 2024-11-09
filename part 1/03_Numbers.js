const num= new Number(70) // ab ye gurantee hai ki number hi milega
// console.log(typeof num);
// console.log( num);  

let num1 =156.568656

// console.log(num1.toFixed(2)); // points ke baad precision n digits ka
// console.log(num1.toPrecision(3)); // overall precision n digits ka
// console.log(num1); // overall precision n digits ka
// //Math library comes with js by default
// console.log(Math.floor(num1));
// console.log(Math.ceil(num1));
// console.log(Math.round(num1)); // chooses nearest integer


console.log(Math.random()) // 0 to 1 (both inclusive even 0.07)
console.log(Math.floor( Math.random()*10) + 1) //+1 coz to avoid 0 case (we want 1-10)

//Genrral formula to get random min-max for anything
let min=10
let max=20
console.log(Math.floor( Math.random()*(max-min+1)) + min)


