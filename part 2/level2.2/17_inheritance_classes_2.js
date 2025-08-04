class User{
    constructor(name,pasword){
        this.name=name
        this.pasword =pasword
    }

    greet(){
        console.log(`hello ${this.name}`);
        
    }

    static secretMethod (){ // static keyword lgaatye hi iss class se bna koi bhi object ya iske inheite kiye hue koi bhi class ye method use ni kar ksta eeror aajeyga use kiya toh
        console.log("sscret hhai key");
        
    }
}

class Teacher extends User{

    constructor(name,pasword,subject){ // constructor ko overried kar diya, not required but optiional
    //   this.name =name  // no
    //   this.pasword =pasword  // no

    // as we use .call in functions , simlary we use super keyword in classes to pass/share curent conteext to another class(parent class)
    super(name,pasword) // super keyword name or passworrd ki values leke jaata ahi aney parent class ke constructore ke pass , impliciyely this(currnet conext) bhi leke jata hai or usmen value set krwa deta h jo parent class ke consctryor ke accodirng defuned hota hai or wo conetxt leke bbhi waapis aajata hai phir(ssari setted variables/values)
    // super apney saath this , name or password ye teen chiz leke jayega
        this.subject=subject
    }

    welcomeMsg (){
        console.log(`helloe teacher ${this.name} with subject ${this.subject}`);
        
    }

}

const ramu = new Teacher ('ramu',1212,'English')
console.log(ramu);
console.log(ramu.greet());
console.log(ramu.welcomeMsg());
// console.log(ramu.secretMethod());  // error not allowed static methods
