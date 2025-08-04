function setUsername(username){
   // complex db calls to check existing no such usernmae exists
    this.username =username
    console.log("called setUserName function");
    

}

function createUser (username,email,password){
    // this.username =username
    //  setUsername(username) // techniaclly call hua but actually mein variable ki value kahbi set hi ni hui coz setUsername function ekdum outermost pe tha,ekdum top pe tha uska kaam khtm hotye hi uska exection bhi khtm , so uske dwaara set variables bhi khtm hogye
     // that's why to hold refernce of whatver the values they set to that can later pass to its parent (inner function) call keyword is used , so that 
     // apney current fucntion ka context ksii duresey/say external/outermost fucntion ko pass/share kar skey , or ussesy boley value set krke ref deke hold krwake value set krwa lena taaki khudek conetxt mein later on use kar sky
     
     setUsername.call(this,username) // apna (inner/parent fucn ) ka this pass kar diya taaki parent ke this mein hi value set krke dede another outer/child fucntion nasht honey se pehley global execution context se (baiclaly apna cuurent execution conext share kar dia  yaani this share kar diya)

    this.email =email
    this.password =password
}

const user1 = new createUser('Is0762','rain@gmai.com',34434)

console.log(user1);
