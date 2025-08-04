console.log("start");


// setTimeout(()=>{
//   console.log("setTimeout 1 done successfully");

//     setTimeout(()=>{

//         console.log("setTimeout 2 done successfully");

//         setTimeout(()=>{

//             console.log("setTimeout 3 done successfully");

//             setTimeout(()=>{

//                 console.log("setTimeout 4 done successfully");

//                 setTimeout(()=>{

//                     console.log("setTimeout 5 done successfully");

//                 },1000)

//             },1000)

//         },1000)

//     },1000)

// },1000)

// callback hell or pyarimd of doom occurs when a nested callacbeks(depenedet on one another) ae there, also horizonatlly code gorwos , deiifcult tyo read and amnage, very risk ,as being depenedted the resunt passed to another,(as we assugmed the first async operation(any api) reposne will give exprected resposnse)

// to deal with callbacks hell we can use either promise Chaining or async/await funtion


//using async/await METHOD :2
function delayTimeStepPromise(time,step){ // nothing but a normal function with some paramters that rteruns a custom promise(created)

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            (step===4) ? console.log(`Async task${step} failed`) :  console.log(`Async task${step} compledted suucesss`);
            (step === 4) ? reject('shit async task 4 error, so is promise 4') : resolve({flag: 1});

            
            

        },time)

    })

}

async function counterCallbackHell(){

    try {
        const res1  = await delayTimeStepPromise(1000,1)
        console.log('Promise 1 consumed susscess with avlue' ,res1?.flag);
        const res2  = await delayTimeStepPromise(1000,2)
        console.log('Promise 2 consumed susscess with avlue' ,res2?.flag);
        const res3  = await delayTimeStepPromise(1000,3)
        console.log('Promise 3 consumed susscess with avlue' ,res3?.flag);
        const res4  = await delayTimeStepPromise(1000,4)
        console.log('Promise 4 consumed susscess with avlue' ,res4?.flag);
        const res5  = await delayTimeStepPromise(1000,5)
        console.log('Promise 5 consumed susscess with avlue' ,res5?.flag);

        // ek baar agar beech mein koi bhi priomised failed hogyi toh next walien promise/depemendt api pe nhi jaayega catch mein direct chla jayeha or progam flow band ho jayega // else all will go on by one(line by line) since each is depenednt(assuming)
        
        
    } catch (error) {
        console.log(error);
        
        
    }

}

// counterCallbackHell()


// method 2 : .then .catch

delayTimeStepPromise(1000,1).then(()=>{
  return delayTimeStepPromise(1000,2)
}).then(()=>{
    return delayTimeStepPromise(1000,3)
}).then(()=>{
    return delayTimeStepPromise(1000,4)
}).then(()=>{
    return delayTimeStepPromise(1000,5)
})
.catch((error)=>{
    console.log(error);
})

// same ismein bhi jha bhi error aajeyga next call ni hoga dependent api/callback/func/promise