//7:12

function yoyo(num){
    return num*4

}
yoyo.prototype.userName2 ='shyaam2' 
yoyo.userName ='shyaam' // function ke saath object hi property usekrli coz of prototype Inheritance
// yoyo.prototype.userName2 ='raju2'

console.log(yoyo(4));
console.log(yoyo.userName);
console.log(yoyo.prototype.userName2);
console.log(yoyo.prototype);
// console.log(yoyo.userName2);


function createUser(name,score){
    this.name =name
    this.score =score
    return this  // explicity return this is required if not using new kryword while creating instance of this func

}

createUser.prototype.printIncremnetScore= function(){ // custom func for that func(csutom func inside csntom func)
    this.score++
    console.log(`Increased score is ${this.score}`);
    
}

const user1 =  new createUser('raju',40)  // new keyword is required to get all external/explicitlrey defined cutom func to assemble all at once and return in a object prototype which is intinal empty coz  of new kryword
const user2 =  new createUser('xraju',12)

console.log(user1?.name);
console.log(user1.printIncremnetScore());
console.log(user2?.name);
console.log(user2.printIncremnetScore());


