// The promise is a object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// promise kuch nhi hai bss ye , ye batata hai ki koi async operation fullfilled hua hai ya reject , agar fullfilled hua hoga toh koi resulting value ke saath or agar reject hua hai toh kisi error reason ke sath

// three states  :
//pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the async operation was completed successfully with a value.
// rejected: meaning that the async operation failed.(got into catch block) rejected with a reason (error)

//A promise is said to be settled if it is either fulfilled or rejected, but not pending.

// Promise has two parts : 1) creating a promise 2) consuming that promise

// lets create a promise (custom promises)

const promise1 = new Promise((resolve,reject)=>{
    // do any async operations here like db queries, n/w request(api call),file operations
    // lets take basic setTimeout async operation

    setTimeout(()=>{
        console.log("something found from db call/request after 3 seconds");
        resolve() // this resolve is directly linked to the .then method and similarily reject with .catch
        
    },3000)
})

// consuming that promise here that we made above
// we mostly consume promises in js real world 
//browser APIs like fetch() for network requests return promises to handle async operations ,also nodejs apis  like fs.promises module for file system operations  return promises
// also Many popular libraries and frameworks return promises to manage asynchronous operations like axios for making HTTP requests ,Mongoose for interacting with MongoDB,Sequelize for SQL databases.

//Using promises keeps the codebase cleaner and avoids deeply nested callbacks (often referred to as "callback hell"),

//Since async functions automatically return promises, any function marked with async returns a promise, which allows for a clean, promise-based handling of asynchronous code

//.then() handles the fulfilled state, and .catch() handles the rejected state.
promise1.then(()=>{
  console.log("promise 1 consumed successfully");
  
}).catch((error)=>{
 console.log('Something went wrong',error);
 
})

// creating custom promise2
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("something found from db 2 call/request after 2 seconds");
        resolve() 

    },2000)

}).then(()=>{
  console.log("promise 2 consumed successfully");

}).catch((error)=>{
    console.log('something went wrong',error);
    
})

// creating custom promise3 -> returning a value on fulfillment or error message on rejection
const promise3 = new Promise((resolve,reject)=>{

    // suppose getting user details from db
    setTimeout(()=>{
        let errorValue =true
        if(!errorValue){
            resolve({username:"raju1",password:"cvdfju"}) // kcuh bhi pass kr sketty as a paramter any value jo ki aagey jaake .then se recive kr skety same

        }
        else{
            reject('Something went wrong from  db |Error')
        }

    },4000)

})

promise3.then((value)=>{
    console.log("promise 3 got fulfilled with value : ",value);
    
}).catch((error)=>{
    console.log("promise 3 got rejected with error : ",error);


}).finally(()=>{ //finally hmesha run hoga either that promise fulfilled or rejected
    console.log("promise3 is now settled,either fulfilled or rejected");
    
})

// creating custom promise4 -> .then chaining
const promise4 = new Promise((resolve, reject)=>{ // This is a constructor call to create a new instance/object of the in-built JavaScript class Promise.
//By creating a Promise, you're essentially saying: "I'll do some asynchronous work, and I'll let you know when it's done, either successfully with a resulting value or rejecting  with an error."
    setTimeout(()=>{
        let ErrorValue =false
        if(!ErrorValue){
            resolve({username: "raju", password: "fgfgfgfg"})
        }
        else{
            reject('Something went wrong , Error')
        }

    },5000)

})

// const username =promise4.then((value)=>{
//     console.log(value);
//     console.log(value?.username);
//     return value?.username
    
// }).catch((error)=>{
//     console.log(error);
    
// }).finally(()=>{
//     console.log("promise 4 is settled now");
    
// })

// console.log(username); //part of synchronous code but since particualr promise must be resolved ya rejected nhi hui hogi iss time par toh humien log mein pending state milega print kraatey waqt

// ** to above trike se toh ni aaney wala username so humey phir se .then lganan pdega as a whole pe tab aayega username ki value so,

promise4.then((value)=>{
    console.log(value);
    console.log(value?.username);
    return value?.username
    
}).catch((error)=>{
    console.log(error);
    
}).finally(()=>{
    console.log("promise 4 is settled now! ");
    
}).then((username)=>{ // so as a whole pe .then lgaala lo (call back hell)
    console.log(username);
    return 'IS00' + username
}).catch((error)=>{
    console.log(error);   // yha bhi finally lga sktey waise
}).then((concatedUsername)=>{ // again as a whole pe .then lgaado
    console.log(concatedUsername);

}).catch((error)=>{
    console.log(error); // yha bhi finally lga sktey waise
    
})
// above is called Promise Chaining

// cretaing custom promise 5
const promise5 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let errorValue =false
        if(!errorValue){
            resolve({username :"admin", password :"admin"})
        }
        else{
            reject('Something went wrong : yoyo')
        }

    },6000)

})

// we can handle a promise either by 1) .then.catch or 2) by async/await func
// async functions wait for that async kaam to happen and nicehy ni jaaeny deta code flow  us function mein na ki whole code mein | await krke rkhta hai parrtiular promise jab tak wo resolve ya rejcet ni hotajat , resolve hua toh async function ke try blcok mein,rejcet hua toh async function ke catch blcok mein jaayega

// async function handy when hum chahahtey hai jab tak db connect na ho nichey koi kaam na ho

// that means hum real world mein promise consume krtety hai mostly like in backend sql server db se koi query ka response ka await krna yaani promise ka await krna | yaani resolve or rejcet ki value whi log set kretey ahi kisi particular query ke liye maybe using seqelize libaray for sql

async function handleOrConsumePromise5 (){    
            try {
                const response  = await promise5 // yha resolve() mein jo value pass hui thi wo milegai 
                console.log("promise 5 consumed successfully");
                console.log(response);
                
            } catch (error) { // yha reject() mein jo message pass kiya tha wo milega
                console.log(error);
                
            }
            
}
handleOrConsumePromise5()

// as fetch web-api of browser alwaays returns a promise
const externalPromise = fetch('https://api.github.com/users/redoxrj')

externalPromise.then((response)=>{
    // console.log(response);  
    // console.log(typeof(response));  
    // console.log(response.json());
    return   response.json() // .json also takes time and return another promise so we have to agian use .then
    //.json() is specific to the Fetch API and It’s used when you fetch data from a network resource, and you want to extract the JSON body content directly from a Response object and returns a Promise.

}).then((data)=>{
    console.log(data);

}).catch((error)=>{
    console.log(error);

})


// using async/await function 

const getMyGithubDetails =async()=>{
  try {
    const response = await fetch('https://api.github.com/users/redoxrj')
  const data  = await response.json() // again as .json is used to extract json body content from the response object if we fetch data from a network resource, and it takes time so it returns a Promise
  console.log(data);
  
    
  } catch (error) {
    console.log(error)
    
  }
  
}
getMyGithubDetails()
// NOTE : JSON.parse() and .json() are different as JSON.parse() is used to convert into a json object from a strngify object(koi object string form mein , type of) || This method is used when you already have a string containing JSON data and you want to convert it into a JavaScript object.
//It’s commonly used if, for example, you receive a JSON string as a response from a lower-level API or from local storage.

console.log("i am a synchronous task/code, so i printed earlier hehe");

