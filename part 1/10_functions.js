
// const calculateCartItemPrice=(item1 ,item2)=>{
//    return item1+item2
// }
const calculateCartItemPrice=(...items)=>{ // now this(...) working as rest operator here -> rest and spread operator are same it depends on how they r using
    console.log(items);
    
   return items
}

console.log(calculateCartItemPrice(24,5,45,45,453,334,3434)); // will get array from rest operator

const user={
      name:"rajnish",
      aged:18
}
const objectPassFunc =(obj)=>{
    console.log(`my name is ${obj.name} and my age is ${obj.age?obj.age:1}`);
    
}
objectPassFunc(user)

const arrayPassFunc = function (arr){
    console.log(arr[1])
    
}
arrayPassFunc([5,4,45,45,45,4,54545])