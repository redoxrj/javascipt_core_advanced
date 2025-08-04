class User {
    constructor (name,password){ // jaise hi class ka koi object/instacne bnagea,class ka constuctore call jo ajyega automatic us or empty object mein ye sab propertis and methods set ho jaeygi automatic
        console.log(this); // as usual every every scope ka this by dfault intialy empty {} object hota h

        this.name =name
        this.password =password
    }

    greet(){  // this knowm as method other then function coz we dont write function but internlaly is actually a fucniton haaha behind the scenes
        console.log(`hello ${this.name}`);  // this yaani jis , jisney bulaya hai uska
        
    }
   
}

const rajnish =  new User ('rajnish',3434)
console.log(rajnish);
console.log(rajnish instanceof User);
console.log(rajnish.greet());


