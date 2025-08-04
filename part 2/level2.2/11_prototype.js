// ye ssaaare classes , new keyword , this keyword sab prototyp se aarha hia js ke jo jska protyopal behavior hai // means haaar ni maanti js khi na khi se value utha ke hi laati hai atlast null dene pdta hai tab toh , parents grndparents sablo accaeess krleti hai // also known as protypal inhetitance // "or kya laa skta hu mein" : Js 


//js mein har ke chiz apey aap mien object  hi hai or jo propeties object ke pass available hai wo ssaari properties string or aaray ke pass bhi available hai use kro na kro apki mrzi (thats said prototype inheritance)
// protype refernce below for tr all 

// Array ->Object(parent) ->null
// String ->Object ->null
// function ->Object ->null


const muiltpleBy5 =(num)=>{
    return num*5
}

muiltpleBy5.username ='raju' // dekha 

console.log(muiltpleBy5(6));
console.log(muiltpleBy5.username); // that means functions object ki trah / uski propeties behvare bhi kr skti hai
// measn function function bhi ahi ssath mein object bhi hai at the end of the day coz object propetties they inherit
// prootypal behavioural of js // unexpcted tha ye but true
// js haaar ni maanti // uper or uper le jatai hai jo possible ho
console.log(muiltpleBy5.prototype); // us method ka this (apna alg islolated context) empty object 


// hence js mein kksi ko bhi object ki trah behave kra sktein hai


function userAndScore (user,score){
    this.user = user  // again we saw here function ke ssathn objcet ki property use krli // prprptype inheeritance
    this.score = score
}

// addding a property explicityely in a which a function is there (function ke ander function) though .prototype method
// cusotm function
// array.map()   => array.prototype.map() // itna likhna jarroat ni
userAndScore.prototype.incrementScore =function (){
    this.score ++  // this yaani jis //jiney ne bhi call kiya hoga uska krdo(uska context)
    console.log(`your updated Score: ${this.score}`);

}
userAndScore.prototype.yoyo =true

// const user1 =  userAndScore('rajish',40) // thats why new keyword is important here explicityely difined function ko defined krke laata ahi tabhi usko pta chlata hai wo walein functions// jo defult ni bnein they
const user1 =  new userAndScore('rajish',40) // nothing just
const user2 = new userAndScore('miena',20) // new instances of that function

console.log(user1);
console.log(user1.incrementScore());
console.log(user1.yoyo);
console.log(user1);
console.log(user2);


// js classes ke through constructor fuction ni deti instead new keyword se constructor function deti hai

