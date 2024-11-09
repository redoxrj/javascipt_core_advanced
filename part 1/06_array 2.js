const names1 = ['Rajnish', 'ramu','Seema']
const names2 = ['Seema', 'raju','geeta']

// const combinedArrayWrong = names1 + names2
// console.log(combinedArrayWrong);
// names1.push(names2)
// console.log(names1); // not a correct way
// const abc =names1.flat(Infinity)
// console.log(abc);

// ------Methods 1 concat // works only for 2
// const combinedArray = names1.concat(names2)
// console.log(combinedArray);

// ------Methods 2 Spread operator (best way)
const names3 = ['Oilo']

const combinedArray  =[...names1,...names2,...names3]
console.log(combinedArray);


console.log(Array.isArray("Rajnish,Ramu"));
const createdArr =Array.from("Rajnish,Ramu")
console.log(createdArr);

console.log(Array.from({"name": "Rajnish"})) // cannnot make array direct from objects , will return empty array as it was not able to create 

const score1=45
const score2=42
const score3=454

const nam1='Raju1'
const nam2='Raju2'
const nam3='Raju3'



// console.log(Array.from(score1)) // not work give empty error
// console.log(Array.from(score1,score2,score3)) // not work give error
console.log(Array.of(...names1));
console.log(Array.of(score1,score2,score3));
console.log(Array.of(nam1,nam2,nam3));

const yaya =[1,5,43]
const baba =yaya
console.log(yaya);
console.log(baba);

baba[1]=12121212

console.log(yaya);
console.log(baba);











