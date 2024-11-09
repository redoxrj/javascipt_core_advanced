const buttons = document.querySelectorAll('.buttons'); // selecting all buttons
console.log(buttons);

const body = document.querySelector('body'); // selecting the body
console.log(body);

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        console.log(e);
        console.log(e.type);
        console.log(e.target);
        console.log(e.target?.id);
                
        body.style.backgroundColor = e.target?.id
        
        
    })
})

