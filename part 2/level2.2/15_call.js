function createUserName (username){
    // complex db call (say verifcation after which)
    this.username = username;
    console.log("createUserName func called");
    

}

function createUser (username,email,password){
    // createUserName(username) // nhi set hua this mein call hua jbki coz ye function call hoke execution context se hat gya kaam khtm honey par saath hi apney saarey this. ke properies bhi kho gyi usi ke saath quni by defaylt sab apney scope ke this mien krtey hai kaam
    // so call use krna pdega or bahar ke this ka reference dena pdega taaki usmein(bahar ke this, dusre function ke this) set krdey , also called curent execution context pass kr dena dsure func ko using call

    createUserName.call(this,username) // passing curernt func ka this // curernt execution context ka reference taaki usmein intented func value set krdein this mein
    
    this.email = email;
    this.password = password;
}

const user1= new createUser('raju111','raju@gmail.com',454545)
console.log(user1);




