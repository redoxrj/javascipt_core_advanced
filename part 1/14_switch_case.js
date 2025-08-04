const month = 3;

switch (month) {
  case 1:
    console.log("jan");
    break;
  case 2:
    console.log("feb");
    break;
  case 3:
    console.log("mar");
    break;
  case 4:
    console.log("april");
    break;
  default:
    console.log("nothing found");
    break;
}

// optional chaining
const user = {
  name: {
    username: {
      "new name": "rajum",
      age: 28,
    },
  },
};

console.log(user?.name?.username?.age);
console.log(user?.name?.username1?.age);
console.log(user?.name?.username?.['new name']);


// ternary operator -> one liner if else statement
2==20?console.log("yes"):console.log("no");

// nullish colscace/coslashing operator -> only works for null and undefined
// const a = null ?? 45
// const a = undefined ?? 45
// const a = undefined ?? null ?? 45
const a = undefined ?? "" ?? 45
const b = undefined ?? 0 ?? 45

console.log(a);
console.log(b);

//false values => false,0,-0,BigInt 0n, null, undefined ,"" ,NaN
// rest all/ others are considered as truthy values even empty [] and {}


//OR operator (deals with truthy value just like if else unlike ?? opeator)

// const ok=undefined
// const ok=null
const ok=""
console.log(ok || "default value");
console.log(ok || null||  "default value");
console.log(ok || 0||  "default value");

const okAnd =45
console.log(ok && "&& value"); // && operator -> it means here if ok is true then print  the this one(next one) else print that one(currnet one)

console.log(okAnd && "&& value"); // && operator -> it means here if ok is true then print  the this one(next one) else print that one(currnet one)

if(!false) console.log("YO, if one liner")




