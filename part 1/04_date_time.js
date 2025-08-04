const myDate = new Date()
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());  // getting Indian date n time here
// console.log(myDate.toLocaleTimeString()); // Indian time
// console.log(myDate.toString()); // getting Indian date n time here
// console.log(myDate.toTimeString()); //Indian time
// console.log(myDate.toUTCString());

//declaring a own custom date
// const createdDate = new Date(2024,0,3)   // month starts from 0
// const createdDate = new Date(2024,0,3,5,3,4)   
// const createdDate = new Date("2024-12-29")   
// const createdDate = new Date("29-12-2001")  // invalid date lmao 
const createdDate = new Date("12-29-2001")   

// console.log(createdDate.toString())
// console.log(createdDate.toLocaleString())
// console.log(typeof createdDate);


// ---------------timestamp ---------------//

// const myTimeStamp =  Date.now()
// console.log(myTimeStamp); // this is in milliseconds from epoch 1 jan 1970 
// // we should alwaays compare by milliseconds
// console.log(Math.floor( myTimeStamp/1000));  // in seconds
// console.log(typeof myTimeStamp); // object is the type
// console.log(createdDate.getTime());


const yoyoDate = new Date()
console.log(yoyoDate.getDate());
console.log(yoyoDate.getMinutes());
console.log(yoyoDate.getDay());
console.log(yoyoDate.getMonth()+1); // since in js month starts from 0
console.log(yoyoDate.getMilliseconds());

console.log(yoyoDate.toLocaleString());
console.log(yoyoDate.toLocaleString('default',{  //by this we can customize
    weekday : "short" 
}));



