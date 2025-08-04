// 5:33

const promise1 =  new Promise((resolve,reject)=>{
   // since it is a promise it will go to priroty queue
    // any asnc task
    setTimeout(()=>{  // setTimout will to go normal task queue and when time comes go to call stack -> execute->exit(remove)
        console.log("async task 1 done");
        resolve()
        
    },1000)
  
})

// console.log("second but still first");

promise1.then(()=>{
    console.log("Promise 1 completed");
    
}).catch((error)=>{
    console.log(error);
    
})


new Promise(function(resolve,reject){

    setTimeout(()=>{
        console.log("async task 2 completded");
        resolve()

    },1000)

}).then(()=>{
    console.log("promise 2 compeldted");
    
})

const promise3 =  new Promise((resolve,reject)=>{

    setTimeout(()=>{
        console.log("async task 3 compeldted");
        // resolving (fulfillting) with some value mostly objects
        resolve({flag :1,userName :"rajnish"})

    },1000)

})

promise3.then((res)=>{
    console.log(res);
    
    console.log(`promise 3 consumed success with value ${res.userName}`);
    
})

const promise4  = new Promise((resolve,reject)=>{

    let error =false
    setTimeout(()=>{
        if(!error){
            console.log("async task 4 compeldted sucess");
            resolve({flag:1,userName:"raju"})
            
        }
        else{
            console.log("async task 4 compledted failure");
            reject('someting went wong')
            
        }

    },1000)

})

 promise4.then((res)=>{
    console.log("promise 4 consumed success with value",res.userName);
    return res.flag


}).catch((error)=>{
    console.log("promise 4 consumed failed with error",error);
    

}).finally(()=>{
    console.log("promise 4 is now settelted");
    
}).then((flag)=>{
    console.log("flag value is ",flag);
    

}).catch((error)=>{
    console.log("error  is ",error);

})
// this is called promise chaining

const promise5  = new Promise((resolve,reject)=>{

    let error =false
    setTimeout(()=>{
        if(!error){
            console.log("async task 5 compeldted sucess");
            resolve({flag:1,userName:"qwerty"})
            
        }
        else{
            console.log("async task 5 compledted failure");
            reject('someting went wong x')
            
        }

    },1000)

})

// METHOD 2 : to consume a promise-> async-await

async function consumePromise5(){

   try {
     const res = await promise5
     console.log(res);
     console.log("promise 5 consumed success with value",res.userName);

    
   } catch (error) {
    console.log(error);
    
    
   }

}
consumePromise5()


async function getAllUsers(){
    try{

        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json() // res is a complex resposne object
        // const data = JSON.parse(res)
        console.log(data);
        

    }
    catch(error){
        console.log(error);
        

    }
}
// getAllUsers()

//using METHOD :1 -> .then.catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
    return res.json() // again returns a promise(takes time also)

}).then((data)=>{
    console.log(data);

}).catch((error)=>{
    console.log(error);
    

})