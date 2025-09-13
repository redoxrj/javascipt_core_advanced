// function hello (){   
//     return 42
// }
// console.log(hello());  // output --> 42

async function hello (){
    return 42
}
// console.log(hello()); // output --> Promise { 42 }
//bcoz every async function always returns a Promise, implicitly.no matter what you do inside
//Even though we just return 42, the function does not return 42 directly — it returns Promise.resolve(42)
// Whatever value you return → becomes a resolved promise (Promise.resolve(value))
// If the function throws an error → it becomes a rejected promise (Promise.reject(error)) [say in case of catch block]
//Inside async, you can use await to pause until a promise settles.

async function doError(){
    throw new Error('error hai kuch')
}

hello() // async func that rertuns a value
.then((value)=>console.log(value))  // ->42
.catch((error)=>console.log(error.message))

doError() // async func with an error inside it
.then((value)=>console.log(value))
.catch((error)=>console.log(error.message)) //->error hai kuch