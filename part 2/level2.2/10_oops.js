// Js is a a purely prototype based language || technically no classes in it  , but kind of syntacitic sugar added to like like classes

// Objects in js are nothing but collection of properties(variales,constants) and methods(functions)

// below is the base unit of oops  , that is object literal , means literally a single object 

const user ={
    username : "raju",  // these are properties
    loggedInCount : 12,
    isLoggedIn : true,

    getUserDetails : function(){  // tehse are methods
        console.log(`user details are username : ${user.username} `);
        console.log(`user details are username : ${this.username} `); // same answer both lines ; this means current contex i,e, user object here
        console.log(this);
        
        
    },

    getUserDetails2 : ()=>{
        console.log(`user details are username : ${user.username} `); // this will still get the username
        console.log(`user details are username : ${this.username} `); // afc this is not present in arrow functions
        
    }
}

console.log(user.getUserDetails());
console.log(user.getUserDetails2());
console.log(this); // nodejs miein empty object while in browing doing same thing will get window object (current context) ; this is global context btw



// const promise1 = new Promise()
// const date = new Date()  
// here new keyword is constructer function and it is used to create new context everytime means ek hi object litral se multiple instances bna sko(copy that dont chnange original ones(object))
// here object litral are Promise and Date

// console.log(this)
function createUser(username, age , isSignedIn) {
    // username=username  // thats why this is important to refer cuurent context which is {} global object in nodejs at the moment
    this.username =username // that meaans jo hmary pass empty object pda hau hai gloval context ka usmein ye properties add on krtey jao
    this.age = age 
    this.isSignedIn = isSignedIn

    this.greetings = function(){ // lo method/function bhi bna diya // abstraction bhi dikhta hua user ko ni pta greetings method ander se kaise dikhta hia kya print krta hai // just like string.lowerCase() we use of js inbuilt method
        console.log(`hi ${this.username}`);       

    }
    if(age===3){
        this.isBaalakHai = true  // that meaans sbka properties same ho jarroi ni {} object haina bhai sbka apna apna copy jo mrzi tab mrzi property add on krtey jao
    }

    return this  // implicit return by default , yet better to write

}
console.log(this)


// const user1 = createUser('Raju',6,true)
// const user2 = createUser('Ashihs',3,true) // bad it overide the user1 values thats why new instances are needed that means new copies that dont chnage/override original ones hence new keyword is used
// console.log(this) // still empty
// console.log(user1) // but this has vallue

const user1 = new createUser('Raju',6,true)
const user2 = new createUser('Ashihs',3,true)  // here new keyword se cuurent context yaani empty {} gloval object ki coopies ban gyi

console.log(this) // 
console.log(user1) // 
console.log(user1.username) // 
console.log(user2) //
console.log(user2.greetings()) //
//gaur krney wali baat ahi humein normal function bnaake usesy new use krlia or do instances bna diye ; insatnces bnaana multiple aise hi bnatey hai // baar baar kon manaully user1 , user2 ... krke khuddse object type krega


//NOTE : this keyword likhtey hai 4 steps hoti hai :(refer 7:37  at https://www.youtube.com/watch?v=_TjtAyMkiTI&t=35730s)
// 1 . ek empty object {} ban jaayayega copi keh lo particlat use context ke liye
//2 . arguments/paramters  recinve/ pass on hog , new keyword(construtor fuction) k kaarna
// 3 . arguments set ho jayagei
// 4 . value humein mil jaayegi yaani wo empty object jsime ab kuch  bhar gya hai yaani kuch properitrs set hogai hai (last mein new cretaed object/after modiftaion de diya jaataa hai)

this.ok='rammuu'
// console.log(ok); // ok  not defined
console.log(this); 
console.log(this.ok);  // smje dya? sirf current context object ki baat ho ri hai har jgh har chiz ke liye current context node js ka empty objcet hoga {}, jab newword se kuch object bna rhein ahi toh uska new instantce hoga yaani again new empty object {} sabke liye apna alag alg context (copy)


console.log(user1.constructor); // constructor method yha par mtlb khud hi ko reference krdeta hia yaani ye paertivcular instance jis se bhi bna tha(kind of parent smj lo) uska naam/refrence

console.log(user1 instanceof createUser ); // true // to check


const myarr = ['sita' ,'gita'  ]
const myarr2 = new Array('Raju','Ramu') // yhi toh new ka kmaal new insstance bna deta hai particlar cheez ka not only object but that datatype/target

console.log(myarr);
console.log(myarr2);

const obj = new Object() // dekha phir se new instance bna liya new keyword se / new copy of target datatype //prototype more specific
obj.username ='uni'
console.log(obj);

//similary
// const promise2 = new Promise() // again new insatnce bna gya promise ka means koi uniue promise 

























