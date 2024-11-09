//Callback hell occurs in JavaScript when we have a series of nested callbacks, making code difficult to read and maintain.
// this means various series of async operations which are dependent on each other , maybe in terms of a result also like a api call  ,ki result dusre api call mein line wise

console.log("start");

// setTimeout(() => {
//   console.log("setTimeout 1 done successfully");
//   setTimeout(() => {
//     console.log("setTimeout 2 done successfully");
//     setTimeout(() => {
//       console.log("setTimeout 3 done successfully");
//       setTimeout(() => {
//         console.log("setTimeout 4 done successfully");
//         setTimeout(() => {
//           console.log("setTimeout 5 done successfully");
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// to deal with callbacks hell we can use either promise Chaining or async/await funtion

//1 promise Chaining

// below is a function that returns a promise
const delay =(time,step)=>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log(`setTimeout ${step} done successfully`); 
            // step===3?reject('some error x of 3rd promisee') : resolve()      
            step===6?reject('some error x of 3rd promisee') : resolve()      

        },time)
        
    })

}

// this is a promise chaining ek promise ho jaaye complete toh next kaam
// catch hum sub .then ke baad lga skety jisey more track rehega error ka with respect to each promise error if any

//approach 1 not a good one not readble , looks again nested like callback hell lol

// delay(1000,1).then(()=>{
//      console.log("promise 1 consumed successfully");
//      delay(1000,2).then(()=>{
//      console.log("promise 2 consumed successfully");
//      delay(1000,3).then(()=>{
//      console.log("promise 3 consumed successfully");
//      delay(1000,4).then(()=>{
//      console.log("promise 4 consumed successfully");
//      delay(1000,5).then(()=>{
//      console.log("promise 5 consumed successfully");

//      }).catch((error)=>{
//         console.log("promise 5 failed with error : ",error);
        
//     })

//      }).catch((error)=>{
//         console.log("promise 4 failed with error : ",error);
        
//     })

//      }).catch((error)=>{
//         console.log("promise 3 failed with error : ",error);
        
//     })

//      }).catch((error)=>{
//         console.log("promise 2 failed with error : ",error);
        
//     })
   
// }).catch((error)=>{
//     console.log("promise 1 failed with error : ",error);
    
// })


//approach 2 best when each catch block error track

// delay(1000, 1)
//   .then(() => {
//     console.log("Promise 1 consumed successfully");
//     return delay(1000, 2);
//   })
//   .catch((error) => {
//     console.log("Promise 1 failed with error:", error);
//     throw error; // NOTE : it is important to throw an error here in case we get an error in any promise that will propagate to next ones and all next goes into catch block means aisa ni hoga ki bich walein ko chhodke baaki sab execute ho jaaye , agar beecg mein kisi ek ka promise failed hogya toh next saare promise ho jaaye yhi chahatey hai hum thats why write throw new error except the last one no need to propagate to next coz that doesnt exist hehe ; kul milake baat ye hai ki agar koi beech mein promise failed hogya toh saare next promise/kaam failed krwado ; usecase depend krta hai
//   })
//   .then(() => {
//     console.log("Promise 2 consumed successfully");
//     return delay(1000, 3);
//   })
//   .catch((error) => {
//     console.log("Promise 2 failed with error:", error);
//     throw error; // NOTE : it is important to throw an error here in case we get an error in any promise that will propagate to next ones and all next goes into catch block means aisa ni hoga ki bich walein ko chhodke baaki sab execute ho jaaye , agar beecg mein kisi ek ka promise failed hogya toh next saare promise ho jaaye yhi chahatey hai hum thats why write throw new error except the last one no need to propagate to next coz that doesnt exist hehe ; kul milake baat ye hai ki agar koi beech mein promise failed hogya toh saare next promise/kaam failed krwado
//   })
//   .then(() => {
//     console.log("Promise 3 consumed successfully");
//     return delay(1000, 4);
//   })
//   .catch((error) => {
//     console.log("Promise 3 failed with error:", error);
//     throw error; // NOTE : it is important to throw an error here in case we get an error in any promise that will propagate to next ones and all next goes into catch block means aisa ni hoga ki bich walein ko chhodke baaki sab execute ho jaaye , agar beecg mein kisi ek ka promise failed hogya toh next saare promise ho jaaye yhi chahatey hai hum thats why write throw new error except the last one no need to propagate to next coz that doesnt exist hehe ; kul milake baat ye hai ki agar koi beech mein promise failed hogya toh saare next promise/kaam failed krwado
//   })
//   .then(() => {
//     console.log("Promise 4 consumed successfully");
//     return delay(1000, 5);
//   })
//   .catch((error) => {
//     console.log("Promise 4 failed with error:", error);
//     throw error; // NOTE : it is important to throw an error here in case we get an error in any promise that will propagate to next ones and all next goes into catch block means aisa ni hoga ki bich walein ko chhodke baaki sab execute ho jaaye , agar beecg mein kisi ek ka promise failed hogya toh next saare promise ho jaaye yhi chahatey hai hum thats why write throw new error except the last one no need to propagate to next coz that doesnt exist hehe ; kul milake baat ye hai ki agar koi beech mein promise failed hogya toh saare next promise/kaam failed krwado
//   })
//   .then(() => {
//     console.log("Promise 5 consumed successfully");
//   })
//   .catch((error) => {
//     console.log("Promise 5 failed with error:", error);
//   });


//approach 3 best optimize small *******
// delay(1000,1)
// .then(()=>{
//     console.log("Promise 1 consumed successfully");
//     return delay(1000,2)
// }).then(()=>{
//     console.log("Promise 2 consumed successfully");
//     return delay(1000,3)
// }).then(()=>{
//     console.log("Promise 3 consumed successfully");
//     return delay(1000,4)
// }).then(()=>{
//     console.log("Promise 4 consumed successfully");
//     return delay(1000,5)
// }).then(()=>{
//     console.log("Promise 5 consumed successfully");
// }).catch((error)=>{
// console.log(error);
// })

//approach 4: more best opti hehe | implicit return + .then chaining , agar khaali return krwana ho to

// delay(1000,1)
// .then(()=>(delay(1000,2)))
// .then(()=>(delay(1000,3)))
// .then(()=>(delay(1000,4)))
// .then(()=>(delay(1000,5)))
// .catch((error)=>{
//     console.log(error);
    
// })

//----------------------------------------------------------------

//2 using Async/await fuction

const counterCallbackHell =async function (){
     try {
        const response  = await delay(1000,1)
     console.log(response); // undefined coz nothing given in resolve()
     console.log("Promise 1 consumed successfully");
     const response2  = await delay(1000,2)
     console.log(response2);
     console.log("Promise 2 consumed successfully");
     const response3  = await delay(1000,3)
     console.log(response3);
     console.log("Promise 3 consumed successfully");
     const response4  = await delay(1000,4)
     console.log(response4);
     console.log("Promise 4 consumed successfully");
     const response5  = await delay(1000,5)
     console.log(response5);
     console.log("Promise 5 consumed successfully");
        
     } catch (error) {
        console.log(error);
        
        
     }
     
}
counterCallbackHell()

