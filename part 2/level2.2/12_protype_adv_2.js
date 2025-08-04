//7 :38

const str = 'rajnish    '

// console.log(str.length);
// console.log(str.customLengthFunc);  // undefnined
// console.log(str.customLengthFunc());  // error

const arr = ['ramu','shyaam','chotye']

// console.log(arr.length);

function ab (){
    console.log("1b");
    
}

const obj = {
    userName : "raj",
    age : 8
}
const obj2 = {
    userName : "faaf",
    age : 10
}

// console.log(obj.userNAge()); // error
// console.log(obj.yoyoCustomProperty); // unidefined

Object.prototype.yoyoCustomProperty = "i am yoyo custom property"  // custom property add kar diya gobllay as a whole sare objects mein lol

//Poorey Object ke protptyuoe mien ye custom method hi add krdia taaki koi bhi object is method/func ko access kar skeein
Object.prototype.userNAge = function (){  
    console.log(this); // this yaani jisney bulaya hai wo , uska prpoerties
    
    console.log(`UserName is ${this.userName} and age is ${this.age}`);
    // return 4
    
}

// console.log(obj.userNAge());
// console.log(obj2.userNAge());

// console.log(obj.yoyoCustomProperty);
// console.log(obj2.yoyoCustomProperty);

// dekha Object (yaani parent) ki defined custom proprty bhi access kar skata saare arrays,strings and fucntions
// console.log(arr.yoyoCustomProperty)
// console.log(str.yoyoCustomProperty)
// console.log(ab.yoyoCustomProperty)


// arr.userNAge() // property toh accessbale hai styill
// no issues, this print hua pehley(jisney bulaya tha) , this.userName avaiabvle ni tha isliye undienfed print hua


// Object (parent) se ssare childs(string,array,funcs) propertirs and methhods inherit kar skstey but not vice verse... and also not allowed in siblings

Array.prototype.getSecondIndex =function (){
    console.log(this);  // this yaani jis array ne bulaya wo print hoga
    console.log(this[1]);
}


// console.log(arr.getSecondIndex());

//but parent(Object) cannt access this

// obj.getSecondIndex()


// now making a custom unified globally custom string func for all strings

String.prototype.getTrueLength= function(){
    console.log(this);
    
    console.log(`The true lenegth is ${this.trim().length}`);
    
}

const str2 = "     tea          "

// str.getTrueLength()
// str2.getTrueLength()
// "ramu     ".getTrueLength()




//  now ttrue menaing of protytype inheritance

const Humans ={
    head :1,
    legs :2
}

const Person = {
    name :"rajnish",
    __proto__ : Humans  // old synatx to inherit Pro. and Meths. from  Parent Object

}
console.log(Person.name);
// console.log(Person.legs); // undefined as not inhertit property yet
console.log(Person.legs); // now inherited all the properties and methods from its parent Object Humans

const Animals = {
    legs :4
}

const Dog = {
    name :"Sheru"
}

Dog.__proto__ = Animals
console.log(Dog.legs);


// NEW synatx to inherit Pro. and Meths. from  Parent Object

const Person2 ={
    name :"Shyaam"
}

Object.setPrototypeOf(Person2,Humans)  // first child Object , second target parent Obj
console.log(Person2.name);
console.log(Person2.legs);


// Actually this happens , this all above called in protytypal/prototype Inheriftance
// behind the sscnes this happens,  while we use Classes and objects and extend keywored to extend classes are bassically syntactical sugar
// this is actually what happpens
// thats why tehcjnally there is no classs oin js but Objects are internaly behind the secens

