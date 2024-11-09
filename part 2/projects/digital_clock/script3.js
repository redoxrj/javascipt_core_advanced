const clock = document.querySelector('#clock');

console.log(clock);

// const timeYeah =function (){
//     const date = new Date()
//     console.log(date);
//     console.log(date.toLocaleTimeString())
    
//     clock.innerHTML=`<span>${date.toLocaleTimeString()}</span>`;
// }

function timeYeah(){
    const date = new Date()
    console.log(date);
    console.log(date.toLocaleTimeString())
    
    clock.innerHTML=`<span>${date.toLocaleTimeString()}</span>`;
}


// setInterval(()=>{
//     const date = new Date()
// console.log(date);
// console.log(date.toLocaleTimeString())

// clock.innerHTML=`<span>${date.toLocaleTimeString()}</span>`;


// },1000)

setInterval(timeYeah,1000)
