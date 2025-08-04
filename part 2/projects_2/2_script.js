const Result_Value  =  document.querySelector('#Result_Value')

const form = document.querySelector('#form')

// console.log(form);
form.addEventListener('submit',(e)=>{
    // console.log(e);
    e.preventDefault()
    const height = document.querySelector('#height').value
    const weight = document.querySelector('#weight').value

    console.log(weight);
    if(height==='' ||  height==0 || isNaN(height)){
        Result_Value.innerHTML='<span>Invalid Height </span>'
    }
    else if(weight==='' ||  weight==0 || isNaN(weight)){
        Result_Value.innerHTML='<span>Invalid weight </span>'
    }
    else{
        const bmi = (weight/ ((height*height) /10000)).toFixed(2)
        Result_Value.innerHTML=`<span>${bmi}</span>`

    }


    

})
