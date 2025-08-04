const arr= [1,2,3,4,5]
const str ='Rajnish Kumar'

// for of loop  ->array,string,Map teeno pe lag skta hai coz const itertor of OBJECT(any) ,ye teeno iterables hai isilye
// for of loop ,array ke ander dirct value rerturn krta hai
for (const element of arr) {
    console.log(element);
}

for (const element of str) {
    console.log(element);
}

const map = new Map() // Map is a special type of objects that remebers key-value pairs order no. and also contains no duplicate key-value pair

map.set('IN','India')
map.set('CN','Chinda')
map.set('UK','Unkited Kinkdmomd')
map.set('CN','Chinda')

console.log(map);


// for(const element of map){
//     console.log(element); // returns each element in array
// }
for(const [key,value] of map){  // destructuring from/the array
    console.log(`${key} and ${value}`);
}

const user={
    username: 'Raju',
    age:18
}

// for loops can be used for array,Map and strings also.
// for(const [key,value] of user){  // for of loop is not iterable for objects
//     console.log(`${key} and ${value}`);
// }

// thats' why for in loop for objects(best) and also for arrays -> always return keys not value in both objects and array
for(const key in user){
    console.log(`key: ${key} and value : ${user[key]}`);
    console.log(user.key); // this will not work will give undefined
}

// const keyArr = Object.keys(user)   //not the best way
// for(const element of keyArr){
//     console.log(user.element); // also won't work so
//     console.log(user[element]);
    
    
// }

for(const key in map){
    console.log(key); // nothing printed on console that means Map is non-iterable though we can use for of loop to get its elements
    
}

for(const key in arr){
    console.log(key); // that proves aaray are specaial type of object/object itself , here we are getting indexes =>0,1,3,4,5 which again can act as keys to get values for each elemet in the arrray
    console.log(arr[key]);
    
    
}

// forEach property of an array is actually a method/function property of array which meaans whose value is a function.  it's specifically a method (or function) property, not just a simple data property. 
//forEach is a  special property which is not just a prooperty but actually a method/function.

const yoyo= ['rajnsih', 'asmal', 'loopoi','sdsdsdsd']

// callback is a function that is passed as an argument to another function and also iska name ni hota agar definition/refrence se pass ni kar rehy hai toh /already declared function pass na kar re ho toh
// callback function us function ko pass kiya jaata jo pucchta hai muje kya krna hai
// yoyo.forEach( function (element){ 
//     console.log(element);
// } )
yoyo.forEach((e)=>{
    console.log(e);
    
})
console.log('----------------------------------------------------------------');

yoyo.forEach((e,i,arr)=>{
    console.log(e,i ,arr);
    
})


const users =[
    {
        username:{
            name:'raju'
        },
        age:18
    },
    {
        worng:{
            name:'shaamu'
        },
        age:18
    },
    {
        username:{
        },
        age:18
    },
    {
        username:{
            name:'yoyo'
        },
        age:18
    },
]
users.forEach((e)=>{
   console.log(e?.username?.name);
   
})


const printName =(name)=>{
    console.log(name);
    
}

yoyo.forEach(printName)  // refernce diya hai alreyad defined function printNames ka (as an argument pass kiya hai) naaki () cal kiya hai
// ye printNames bta rha hai ki kya kaam krna hai


