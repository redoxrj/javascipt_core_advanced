class User {
    constructor(username){
        // complex db query after which
        this.username = username;
    }

    logMe = function(){
        console.log(`Username is  ${this.username}`);
        
    }

    static somethingPrive =function(){ // staic keyword jis function/method pe lga dia class ke ander toh ab jab bhi uska instance banega us insance/object ko iss method ka access nhi milga , child class ko toh bhool ji jao useke instance ko bhi na miley
        return 44545
    }
}

const user1 = new User('Raju');
// console.log(user1);
// user1.logMe()
// console.log(user1.somethingPrive()) // wil give somethingPrive is not a function error

class Teacher extends User { // here User is parent class and Teacher is child class // so this child class will inherit all properties and methods of the parent class
    // this extends is a syntactical sugar btw its actual __proto__ in protype inheritance

    constructor(username,email,password){
        super(username) // behind the scene whi .call method wala concept chal rha ahi jo function object mien hota tha
        // yha par super keyword likhney se ye apney parent class ke constructor ko refer krega or kuch ni 
        // jisesey yha se usernmae ki value parent class User ke constructor mein pass on hoyegi and current class(child class) ke instance object ki property mein usernmae ki value wha(parent class ke constrctor) se jo aayi thi wo set ho jayegi
        this.email = email;
        this.password = password;
    }

    callMeTeacher(){
        console.log(`I am Teaher ${this.username}`);
        
    }



}

const teacher1 = new Teacher('redox','redox@gmail.com',495845);

console.log(teacher1);
console.log(teacher1.username);
console.log(teacher1.email);
console.log(teacher1.callMeTeacher());
console.log(teacher1.logMe()); // ye parent class ka method tha jo inheri hogya


console.log(teacher1 instanceof Teacher);
console.log(teacher1 instanceof User); // since Parent class relationship so this will also be true
