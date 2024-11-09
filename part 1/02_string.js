let name1 ='       Rajnish           Kumar   '
// console.log(name1.trim());  // only remove starting and ending whitespaces not in between

let strComma ='Rajnish,Raju,Seema,Ghana%45'
let strComma2 ='Rajnish-Raju-Seema-Ghana-ramu,raju'

const strArr = strComma.split(',')
// console.log(strArr);
// console.log(strArr[1]);

const strArr2 = strComma2.split('-')
// console.log(strArr2);
// console.log(strArr2[1]);
// console.log(strArr2.includes('Seema'));
// console.log(strArr2.includes('seema'));
// console.log(strArr2.includes('    Seema'.trim()));

const strName ='Rajnish'
// console.log(strName.length); //string property rest all methods/funct
// console.log(strName.substring(0,3));
// console.log(strName.substring(3));
// console.log(strName.slice(0,3));
// console.log(strName.slice(3));

console.log(strComma2.replace(',','-'));
console.log(strComma2.includes('raju'));


const objStr = new String('Ramuuuu')      //same thing (String ka object bnake)
console.log(typeof objStr);
console.log(objStr);
console.log(objStr.toUpperCase());







