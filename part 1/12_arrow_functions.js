const user={
    username:"raju",
    age:12,
    greetFunc : function(){
        console.log(this); // printed the current context(whole current scope({ yha se yha tak })/user onbjct in this case)
        console.log(`hello ${this.username}`);
        // this keyword is used for accssing variables/values/(keys) present in the current execution/executing context of a function ?? current scope
        // Normal Functions have this keyword (accessible) but arrow functions don't have , unka khudaka this keyword nhi hota
        
    }
}

user.greetFunc()

const user2={
    username:"raju",
    age:12,
}

user2.greetFunc=()=>{
    console.log(this); // {} empty object as arrow dont have this
    console.log(`hello ${this.username}`); // chaah ke bhi ni kr skety this keyword use arrow functions mein , error ni aayega but values whihc we are trying to access will be undefined
}

user2.greetFunc()

let a =78

console.log(this.a); // coz curent scope(gloabl scope) does not have any prpoperty(by default property) named as a , that's why undefined like string/arrays have  by default property length so we can access any time by log(str.length) // (arr.length)

// browser mein jab engine(say chrom's v8) run kar ri hoti hai uska global objet window object hota hai that's we are able to capture events like onclick ,onchange etc .  or node js mein gloval object empty object hota h

 //In this case, console.log(this.a); is executed in the global scope, not inside a function. In the global scope, this refers to the global object (usually the window object in browsers or the global object in Node.js).
//Since a is not a property of the global object, this.a returns undefined.
//If you want to access the variable a using this, you need to create an object and add a as a property to that object just like above object example.

console.log(this); // in node js it is always printed empty object but in browser it will be an object but bhra hua means kaafi properties honngi ussmein(like window.history etc.) jisey hum window object bhi boltey ahi

// broweer mein current context this keyword ka windows object hota taht's it

// phh;lley ke jmaney mien js sirf browser mein run kar paati thi using an engine jo ki sirf browser mein hi paaya jaata tha , curerent is v8 engine in chrome
// but uske baad logey ne ishki(js) shakitio ko bhaar nikala yaani us engine ko bhaara nikala naam diya gya like node,dino etc. jo ki js browser ke bhahar execute kar skey (node js is runtime enviremonemt of js)
// jissey engines ab humaary pass standalone bhi hai


function chai(){
    const username='yoyo'
    console.log(this); // jab bhi node mein bhi kisi function ke andar this print krtye hai toh uss function ki saari proerties aaajati hai by default
    console.log(this.username); // undefined coz this cannot be used for current context of a function but can be used for current context of an object
}
chai()
console.log("----");

const chaiArrow= ()=>{
    const username='yoyo'
    console.log(this); // tha's the real reason why arrow function dont have this => empty object hota hai this ki value arrow function mein
    console.log(this.username);
}
chaiArrow()

// const addTwo =(num1,num2)=>{
//     return num1+num2  // explicit return  as usual {} braces lgaye toh return keyword use krna hi pdega
// }

// one liner arrow function->() se bhi ek (special) block ban jaata hai
// const addTwo =(num1,num2)=>num1+num2 // implicity returned ,{} braces no need
// const addTwo =(num1,num2)=>(num1+num2) // implicity returned ,{} braces no need
// const addTwo =(num1,num2)=>{username :"raju"} // bad practice objects kabhhi aise direct retuned ni hotey () lgana hi pdta hai so better use () overall
const addTwo =(num1,num2)=>({username :"raju",sum:(num1+num2)}) //#best

console.log(addTwo(1,2));




