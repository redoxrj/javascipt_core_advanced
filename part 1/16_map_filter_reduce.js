const arr =[1,2,3,4,5,6,7,8,9,10]

const returnedValueForEach =arr.forEach((e)=>{
//    console.log(e);
   return e // undefined always that means forEach never returns  any value it is used only for operations
})

// to overcome this we have filter method / another special property method of array OR make another array and push elemets >4 using forEach method

// const returnedValueFilter =arr.filter((e)=>{
//     console.log(e);
//         return e>4
// })
const returnedValueFilter =arr.filter((e)=>(e>4)) // again () special scope and implicit return 

// console.log(returnedValueForEach);
// console.log(returnedValueFilter); // that means filter returns value and also it can be used for operations , returns/filters those elemets from array who satisfy a particuar condition  // filter return values based on condition(true/falase)


//map function

// const returnedValueMap=arr.map((e)=>(e+1)) //// map also return values by doing some operations

// chaining
const returnedValueMap=arr.map((e)=>(e*10))
.map((e)=>(e+1))
.filter((e)=>(e>50))
console.log(returnedValueMap);


//Reduce -> also returns value

const arr2 =[1,2,3,4]
const initialValue =0

// const arr2ReduceResultFinal =arr2.reduce((accumulator,currentValue)=>(accumulator+currentValue),initialValue)
const arr2ReduceResultFinal =arr2.reduce((acc,currVal)=>{
 console.log(`Accumulator  ${acc} and Curntvalue ${currVal}`);
 return acc+currVal
 
},initialValue)  // if initial value not given by default 0 value it assumes

// here reducer  ask initialValue only the first time when reduce for each iteration starts after that it performs opertaion and the resultant resulet than gets storeed/updated in accumulator // currentvalue referes to cuurnet element of the array whihc is being itertaoted
// we can use reduce to perform some mathematical operations for the elements of the array like shppoing cart total value , it always return a single value (number,sting,object etc) // to reduce it to sinle value
// Use reduce when you want to accumulate all elements of the array into a single output.

console.log(arr2ReduceResultFinal);

//map and filter return new arrays, while reduce returns a single value.
// Use map for transforming elements.
//Use filter for extracting elements that meet a condition.
//Use reduce for combining all elements into a single result.

