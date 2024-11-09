
// 1. Lexical Scope
function outer(){
    let name ='raju'

    function inner(){
    // let name ='shaam' //this is also allowed, we will get shaam as result

        console.log(`printing from inner function ${name}`); // this is called Lexical scope as inner function has access of outer function variables(outer scope) but not vice versa , that's it
        
    }
    inner()

}
outer()


//2. Closures

function outer2(){
    const name ='acha ji'

    function inner2(){
    const innerVariable ='yoyoyoy'

        console.log(`printing from inner2 function outer var ${name}`);
        console.log(`printing from inner2 function inner var ${innerVariable}`);
        
    }
    return inner2
}

const returnedFunction =outer2()
returnedFunction()

// Closures means jab hum kisi outer function ke ander ek inner function ko hi return kr detey hai toh sirf wo inner function hi return nhi hota balki uska scope bhi return hota hai (uska scope + lexical scope)
// means in this case inner2/returnedFunction is a closure
// A closure is a function that "remembers" its lexical scope
//Closures allow functions to retain access to variables from their outer scope even after the outer function has finished executing.
// outer function ka execution context chahaye khtm ho jaaye lekin memory mien store rehtey hia uske variables
//When a function is returned from another function, it carries along references to variables in its lexical scope, enabling access to those variables later.

// NOTE : Lexical Scope defines where a variable can be accessed based on its position in the code.
// Closures allow functions to maintain access to variables from their outer lexical scope even after those outer functions have finished running.