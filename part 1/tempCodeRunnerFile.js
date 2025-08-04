//
const myArr =[1,2,3,4,5,6,7,8,9]

const returnedArr = myArr.forEach((e)=>{
    // console.log(e);
    return e
    

})
// console.log(returnedArr);

// const filteredArr = myArr.filter((e)=>{
//     return e>5

// })
// const filteredArr = myArr.filter((e)=>(e>5))
// const filteredArr = myArr.filter((e)=>e>5)
// console.log(filteredArr);

// const mapReturnedArray = myArr.map((e)=>{
//     console.log(e);
//     return e*10
    
// })
// const mapReturnedArray2 = myArr.map((e)=>e+1)
// console.log(mapReturnedArray);
// console.log(mapReturnedArray2);


const myArr2 = [1,2,3,4]

const initialVal =0

const reducedVal = myArr2.reduce((acc,currentVal)=>acc +currentVal,initialVal)
const reducedVal2 = myArr2.reduce((acc,currentVal)=>acc*currentVal,1)
console.log(reducedVal);
console.log(reducedVal2);


const finalValue = myArr
                   .map((e)=>e*10)
                   .filter((e)=>e>50)
                   .reduce((acc,currentVal)=>acc+currentVal,0)
console.log(finalValue);
