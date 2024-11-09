// const obj = new Object()  // singleton object(made by constructor)
const obj={} // non-singleton object(made by literalS)

// console.log(obj);

const naming ={
    name:{
        userName:{
            firstName:"raju",
            lastName:"kumar"
        },
        // avatarName:null
        avatarName:""
    }
}

// console.log(naming.Name); undefined // keys in objects are case sensitive
// console.log(naming.name);
// console.log(naming.name.userName.firstName);
// console.log(naming.name.username.firstName); // that's why optional chaining 
// console.log(naming.name.yoyoName.firstName); // is required so that agar wo key nhi milta hai object hai ke andar toh code na phatey

console.log(naming?.name?.yoyoName?.firstName );  // code phatega ni ab beshak value undifined aajye
console.log((naming?.name?.yoyoName?.firstName) || "ok" );
console.log(naming?.name?.avatarName)
console.log( (naming?.name?.avatarName) || "ok2")
// in js null , undefined ,0 and "" are considered as not true values by default 
// any non-zero values are considered to be true even " "(we have to trim them)

const a={a1:1,a2:2}
// const b={a1:1,a2:2} // even though structure and content are same ,these are two diffreent objects in heap memery
const b=a

console.log(a===b); //now true otherwise false , as JavaScript compares the references (memory addresses) of the objects, not their contents in case of non-primitive data types , but

const str1="Raju"
// str2=str1 // also true
const str2="Raju"

console.log(str1===str2); // true coz but js compares content(case sensitive+other factores like space) in case of primitive data types in stack memory , copy of data is compared


// in case (to check) objects content has  equalify /equality
 const abc={a1:1,a2:2}
 const bcd={a1:1,a2:2}

console.log(JSON.stringify(abc)); // stringified data of object/json
 console.log(JSON.stringify(abc)===JSON.stringify(bcd)); //true always
 

 const user={
    name: "raju",
    age:10,
    name :"yoyo" // last declared will be the final value
 }
 console.log(user); // and we will get single key-value pair of name
 console.log(user.name);

 const abcd={a1:1,a2:2}
 const bcde={a2:2,a3:3}
 const cdef={a3:33,a4:4}

 // to combine objects #1 method Object.assign() 
                                       //target //... source
                                       //target means ab guranteed h object hi milega
const returnedCombinedObject= Object.assign({},abcd,bcde,cdef) //best
const returnedCombinedObject2= Object.assign(abcd,bcde,cdef) // now abcd target toh us object mein add on hoga/manipulate hongi cheeze
console.log(returnedCombinedObject);
console.log(returnedCombinedObject2);
console.log(returnedCombinedObject2===abcd); // true coz that target object changed/modified/combined // target object yaani original object mein ssources objects ki key-value pair modify/ add on hongi // usi mein ye sab process ho rha


// METHOD 2 : spread operator , same used in array 
const betterCombinedObject ={...abcd,...bcde,...cdef}
console.log(betterCombinedObject);


const user2={
    name:"Raju",
    age:23,
    isActive:true
}

console.log(Object.keys(user2)); // will return in array
console.log(Object.values(user2)); // also will return in array

const keys =(Object.keys(user2));
// ke baar objects ki pta lag jaaye toh key ki values automatic pta lag jajyegi us object mein 

keys.forEach((element)=>{
//  console.log(user2.element);
 console.log(user2[element]);
 
})
console.log("ok");

//to find wherther the objects owns a particular key or not
console.log(user2.hasOwnProperty("age")); 
console.log(user2.hasOwnProperty("Age"));
console.log(user2.hasOwnProperty("Age2"));



 

