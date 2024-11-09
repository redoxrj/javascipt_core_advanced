
const obj ={  // Method 1 of creating a new object
    username : "raju"
}

// function createEmptyObject(){

// }
// const obj21 = new createEmptyObject() // new likhtey hi empty object ban gya yeah moj
// obj21.name ='yiie'
// console.log(typeof obj21);
// console.log(obj21);
// console.log(obj21.name);


const obj2  = new Object()  // Method 2 of creating a new object
obj2.username  ='raju2'
// console.log(obj2);

// Method 3 of creating a new object
const obj3 = Object.create(null)  // passing null means crearting an isolated object without a prototype
obj3.name3='shaamu'

// console.log(obj3);
// console.log(obj3.name3);

const obj4 = Object.create(obj3)  // passing a existing objeect means crearting an  object with a prototype(parent inheritance) like __proto__

// console.log(obj4);
// console.log(obj4.name3); // hre obj4 inherit proprties of obj3


// ----------------------------------------------------------------
// console.log(Math.PI);
// console.log(Math);

// the question is can we chnage the by default value of PI property in Math object? like  on doing console.log(Math.PI); we get 69.9 any desired value -> The answer is NO Later on .... explanation

Math.PI=69.9 // this wont work
console.log(Math.PI); // still the same

// console.log(Object.getOwnPropertyDescriptor(Math,'PI'));
 // we are getting {
//   value: 3.141592653589793,
//   writable: false, -> hence it is writable by default
//   enumerable: false,  -> hence it is not iterable by default
//   configurable: false
// }


const user1 ={
    username:"raju",
    age:40,
    isLoggedIn:true,
    printMe : function(){
        console.log(`username is ${this.username}`);
        
    }
}
console.log(Object.getOwnPropertyDescriptor(user1,'username'));
// { value: 'raju', writable: true, enumerable: true, configurable: true }
// since we created our own object so by default properties like writable and enumerable are set to true by default , hence on doing

user1.username='modifiedUsername' // will chnage as it is writable
// console.log(user1);

for (const key in user1) {
    if(typeof user1[key]!=='function'){ // like we dont want to iterate a fuction in a object

        console.log(`${key} : ${user1[key]}`); // here we can see all prperties of the object we created are iterable too by default
    }
    
}

// now lets make chnages so that nobody can iterate through our objects proerties(say username) and cannot re-write/modify isLoggedIn property

Object.defineProperty(user1,'username',{enumerable: false})
Object.defineProperty(user1,'isLoggedIn',{writable: false})

// now ,
console.log("after manuanly defining property of our object");
for(let key in user1){
    if(typeof user1[key]!=='function'){
      
        console.log(`${key} : ${user1[key]}`) // we can see now username property is not iterable anymore but rest property are 
    }
    
}

user1.isLoggedIn =false
console.log(user1.isLoggedIn); // its still true coz we set defined property/feature of our this object property writable: false , so no overriding/modification for this property


// now lets comeback to that Math.PI quertion

Object.defineProperty(Math,'PI',{writable: true,configurable: true})
// now 

Math.PI =69.9
console.log(Math.PI); // lol geting Object.defineProperty(Math,'PI',{writable: true})
// TypeError: Cannot redefine property: PI

// haha that means inbuilt objects ki property ko hum redefine ni kar skety only allowed in custom objects we create


// NOTE : we can create only custom property like customPI as :
//1 .
Object.defineProperty(Math, 'customPI', { value: 69.9, writable: true });
console.log(Math.customPI); // 69.9  // custom property

//2.
const customMath = { ...Math, PI: 69.9 }; // custom math object hi bnadiya
console.log(customMath.PI); // 69.9






