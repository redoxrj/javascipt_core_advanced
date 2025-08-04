//8:51

// console.log(Math.PI);
// Math.PI= 4534
// console.log(Math.PI); // wont work directly coz writable is false for that key in Math object/module setted by js developers by default 

// to make it wrtiatble true

// console.log(Object.getOwnPropertyDescriptor(Math,'PI'));

// Object.defineProperty(Math,'PI',{
//   writable: true,
//   enumerable: false,
//   configurable: true
// })

// Math.PI= 4534
// console.log(Math.PI); // still wont work give eror also now
// actually Once a property is defined with configurable: false (which Math.PI is by default), you can NEVER make it configurable: true again — not even using Object.defineProperty.
//Once configurable: false is set, JavaScript permanently locks these rules:
// You cannot change writable
// You cannot change configurable
// You cannot change the value
// You cannot call Object.defineProperty on it

// but still if you need to do make JS Math ke PI key ki value custom using Monkey-patch Math (not recommended) ,// works only in some environments like Node.js


// console.log(globalThis);
// console.log(typeof globalThis);
// console.log(globalThis.Math);
// console.log(typeof globalThis.Math);

// globalThis.Math = {...Math,PI:4534}

// console.log(Math.PI); // now changed globallly lol



// now let us make custom MATH Object/module

const myMath = {
    name : "pie",
    PI : 4545
}
console.log(Object.getOwnPropertyDescriptor(myMath,'PI'));

console.log(myMath.PI);
// myMath.PI =12 // suppose i want this to be static no one change not iterate(enumerate)
// console.log(myMath.PI); // this changed my defined value directlly


Object.defineProperty(myMath,'PI',{
    writable: false, enumerable: false, configurable: true 
})

// now

myMath.PI =12  
console.log(myMath.PI); // now this won't get chnaged even though there is no error but won't be changed now just like orginal Math.PI property

for(const key in myMath){
    console.log(`key is ${key} and its value ${myMath[key]}`);
    // as you can see above only key property of myMath Object was iterable(enumerable) as we alredy set enumerable=false to key PI
    
}


Object.defineProperty(myMath,'PI',{
    writable: false, enumerable: false, configurable: false 
})

Object.defineProperty(myMath,'PI',{
    writable: true, enumerable: true, configurable: true 
})
myMath.PI=9999
console.log(myMath.PI);


// as you can see above clealry step 1 make our cisytom module/object we made it configurable : false , then again on step 2  configurable : true but once a key in js defined as  configurable : false  it will never we gonna set(any property) again even though try to make any property(even configatuable) as true. , // that's the case with Math.PI by defualt given us as configatuable:false so cannot ever be changed any property

//configurable: false
// You lock the property definition. You can't change writable, enumerable, or configurable anymore or in future even make it configurable: true.

// To avoid this:

// Only use configurable: false when you're sure no future changes are needed.