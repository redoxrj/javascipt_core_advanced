const user={
    isLoggedIn: true
}

const teacher ={
    onlinePlatform : "Sony",
    __proto__:user // ##
}

const teacherAssistance ={
    isPermanent : false
}

console.log(teacher.onlinePlatform);
// console.log(teacher.isLoggedIn); // undefined so lets inherit kraatey hai isko ye wwali property user object se reference ## dekh

// now
console.log(teacher.isLoggedIn); // ab krli isney inheritc property reference/parent objcet se
// teacher.__proto__=user // aise bhi kar skatye hai, basic 

//__proto__ is a old  syntax
// lets focus current market  syntax






