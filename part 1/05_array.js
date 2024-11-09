const mixedArray =[334,"Ram",true,{"name" : "raju"}]
// console.log(mixedArray.length);
// console.log(mixedArray[3]);
// console.log(typeof mixedArray);


const myArray = new Array(3,23,4,1,2)  //because arrays are instances of the Array object. arrays are special type of objects
// console.log(typeof myArray);
myArray.push(5) // append the element to the end
myArray.push(6)
myArray.pop() // removes the last element
myArray.unshift(100) // add the element at the first position
myArray.shift() // remove the wahtever element at the first position
// console.log(myArray);
// console.log(myArray.includes(9));
// console.log(myArray.indexOf(9));

// const newArr = myArray.join()  //join all elements to string by default ,
// const newArr = myArray.join('-')
// console.log(myArray);
// console.log(newArr);
// console.log(typeof newArr);

console.log(myArray);

// const sliceArr = myArray.slice(1,3)
// console.log(sliceArr);
// console.log(myArray); // origial array didn't change

const spliceArr = myArray.splice(1,3)
console.log(spliceArr); // range inclusive + remove that slice from original array
console.log(myArray); // origial array changed

