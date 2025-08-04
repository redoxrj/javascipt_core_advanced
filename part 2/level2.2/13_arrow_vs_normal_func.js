
const obj ={
    username :"raju",
    age : 12,

    sayHi : function(){ // normal function ko agar apney scope yaani {} mien username nhi milta hai toh wo parent scope se laa sskta hai username/variable // parent scope se variable laa skta hai
        console.log(this); // yaani normal func ke pass khud ka this ke saath saath parent lexical scope ka this bhi access hota hai know hota hai
        this.username = "overiided username 1"  // override kr dia parent this ke property / varible ko normal func mein
        
        console.log(`Hello ${this.username}`);
        
    },
    sayHiArrow :()=>{ //arrow function ko agar apney scope yaani {} mien username nhi milta hai toh wo parent scope se nhi laa sskta // parent scope(lexical scope) present ni hota
        console.log(this); // yaani aroow func ke pass kewal khud ka (apney scope ka this hota hai yaani {} empty object)
        this.username = "own sscope in created username 2"  // khud se toh apeney scope ka this object mien propeties bna hi sktey(add sktey) aarow func mien 

        console.log(`Hello ${this.username}`);  // now this will have value
        
    }
}

// console.log(obj.sayHi());
console.log(obj.sayHiArrow());

// NOTE : 1. this means current conext ki baat ho ri hai har scope ka apna this hota hai and by default this object empty hota hai har scope ka apna ka
//2. normal func lexical scope parent scope ka this accesss kr skta + uski ssari proerties and methods agar khud ka ni milta toh
// 3 . arrow func ke pass kewal khud ka this hota hai parent scope ka access ni kr skta kabhi / avialable hi ni hota
