//6:40
// console.log(this);

let name ='raju'
const user1 = {
    name  : "rajnish",
    age :5,
    greet : function (){ 
    //  let name ='raju 2'
        console.log(`hello ${user1.name}`);
        console.log(`hello ${this.name}`);
        
    },
   
    greet2:()=>{
let name ='raju'

        console.log(`hello ${this.name}`);
          console.log(`hello ${user1.name}`);

    }
}
console.log(this);
// this.yoyo='pikii'

// user1.greet2()
        // console.log("before global",global);

function createUser(name,age){

    this.name = name
    this.age = age
    if(age>18){
        this.greet= function(){
            console.log(`hello 18+ ${name}`);
            console.log(`hello 18+ ${this.name}`);
            
        }
    }
    // console.log("inner",this);
    
    return this // return this is important if we dont use new keyword while cretaing new insatnces else we eill get ubdefined

}

    // console.log(this);
// this and global both differnt in nodejs
// this is by default {} , global is by default bhra rehrga kuch funcs se some complex object
// this top leevel par {} hi hoga always chhaey nichey likha ho
// line 29 func mein this keyword ab nodejs ke gloval object ko point krta hai (ajeeb sa complex), new keyword bnaatey hi ek new empty object bna dega uske baad args/params pass hongey usmein value set ho jayegi retrun ho jaayegi (hmesha new insatnce bangea apna apna)
// new keyword ni likjenegy toh same global object(complex ajeeb sa) of nodejs ko point out krega har call pe so whi gloval object baar baar overwrite hota rhrga
// new keyword likhtey hi har baar ek new empty object bnaayega usimein args pass hongey valeue sett hongey and then return ho jayega finally wo freashly just created object
const userOne  = new createUser('shyam',12)
const userTwo  = new createUser('RAAM',20)
        // console.log("outer",this);
        // console.log("outer global",global);
        // console.log("outer",this.yoyo);

    console.log(userOne);
    // console.log(userOne.greet());
    // console.log(userOne);
    console.log(userTwo);
    console.log(userTwo.greet());
    
    console.log(userTwo.constructor);
    
    console.log(userTwo instanceof createUser); // createUser working as class lol(object literal/protottype actually)
    console.log(userTwo instanceof Promise);
    


    const arr =  new Array() // new kewyord se constriction funciton call hota new banata inatnce of Array(particuular data tyape)
    const arr2 = new Array('5',6,66)
    console.log(arr);
    console.log(arr2);

    const str = new String('RAJNISH')
    console.log(str);
    console.log(str.toLowerCase());  // asbstraction ho rha

    const obj = new Object()
    const obj2 = new Object({name :'raju',age :true})
    console.log(obj);
    console.log(obj2);
    console.log(Object.keys(obj2));
    
    
    