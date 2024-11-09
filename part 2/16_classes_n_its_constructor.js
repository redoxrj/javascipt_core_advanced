class User {
    // ye constructor tab tab automatically call hoyega jab bhi is class  ka koi instance/object banega and by default ye value/properties/methods set krdega us instacnc/objet ki jab wo banke niklega
    constructor(username,email,password){
        console.log(this);
        
        // alwaasys remember har scope ka apna this object hota hia jo ki by default empty object hota h
        this.username = username;
        this.email = email;
        this.password = password;
    }

     encryptPassword(){  // saath mein ye method bhi mil jaaygea by default uss bnaaye hue instance ko
       return `${this.password}abccbsdbsd` // here this refers to the instance of the class(or function object) that is being created/calling the method

    }
}


const user1 = new User('redoxrj','rajnish',6767767)

console.log(user1);
console.log(user1.encryptPassword());


// Above is a syntactical sugar that comes in es-6 (ecmascript2015) actually js does not really have classes

// ***(behind the scenes) what is happening here is same as we saw earlier by creting a function and later creating a instane of it using new
// lets do the same thing

function createUser2(username,email,password){
    console.log(this);

    this.username = username;
    this.email = email;
    this.password = password;

}
// since createUser2 look like function but we know in js everything is object prototype at the endv so this is also and hence
createUser2.prototype.encryptPassword=function(){
    return `${this.password}abccbsdbsd`
}


const user2 = new createUser2 ('alex','alex@gmail',343434)
console.log(user2);
console.log(user2.encryptPassword());


// NOTE : alaywasy remember har scope ka apna this object hota hai and by default wo empty object rehnta hai



