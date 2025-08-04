const myArr =["rajni","ami","loip"]

// console.log(myArr.printRajnishInAllObjects()); // not a function ok lets make a custom function of this

// Array,String,function sbka parent Object hota hai toh agar direct parent yaai Object ko wo property de dein toh sbko mil jaaygea , kind of sasta inhertitance 

// custom property/method bna deta original Js Object prototype mein wow
Object.prototype.printRajnishInAllObjects=function(){
    console.log("hohohoho created custom method and printing hell yeah Rajnish");
    
}
console.log(myArr.printRajnishInAllObjects()); // moj

const user1={
    name :"raju"
}
console.log(user1.printRajnishInAllObjects()); // objects ke pass toh hogi hi hehe

const str ="RAMU IS HERE"
console.log(str.printRajnishInAllObjects()); // wow string ko bhi mil gyi gaajab // same proprtty jo object ko di thi haha

// now giving /methods to child String,Array and Func
// console.log(str.LamdeyKaNaam); // currently undefined so lets cretae a custom property only for js original String prototype

String.prototype.LamdeyKaNaam='RAJU IS HERE GUYS'
console.log(str.LamdeyKaNaam); // yeay printing, mil gya property sabhi js ke original String ko ye property LamdeyKaNaam ki

// but parent Object prototype ko nhi milegi
console.log(user1.LamdeyKaNaam); // undefined as expected


// so now creating a custome function for all Strings that return true lenegth of the string

const fakeString ="   Rajnish      "
// console.log(fakeString.trim().length); // mja ni aise
// fakeString.realLengthBtaBhai(); // isey bnaatey hai cutom func/method and sabhi js ke oringinl String prototype ko de detdey hia

String.prototype.realLengthBtaBhai =function(){
    console.log(this); // whi string print ho jaayegi jispe call kiya hoga ye function , usi ka refrence value milega
    
    console.log(this.trim().length); // jis yaani this , jisney bhi call kiya hoga uska this maana jayega
    
}
fakeString.realLengthBtaBhai() // yeah bna diya custom method
"  tritirffgfgtr       ".realLengthBtaBhai() // yha par yhi string this ki value hai actual // means jisney call kiya whi this hoga bhai , this mien usiki value aayegi










