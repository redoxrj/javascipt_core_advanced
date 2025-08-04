let RandNum ;
function generateRand(){
  RandNum =   (Math.floor(Math.random()*100)) +1
 console.log(RandNum);
 
}
generateRand()

let prevGuesses = []
let guessesRem = 10

const guessesRemValue = document.querySelector('#guess-rem')
guessesRemValue.innerHTML= `<span>${guessesRem}</span>`

const form =document.querySelector('#form')
const Input =document.querySelector('#InputNum')
const submitBtn = document.querySelector('#submit-btn')
const resetBtn =document.querySelector('#reset')
// console.log(submitBtn);
const prevGuessField =  document.querySelector('#prev-guesses')
prevGuessField.innerHTML=  prevGuesses.join(",")

function clearInput() {
  Input.value = "";
}

function checkValidInput(num){
    if(isNaN(num)){
        alert('Please enter Number only')
        clearInput()
    }
    else if(num >100  || num<1){
        alert('chooses number between 1 and 100 only')
        clearInput()
    }
    else{
        guessesRem--
        prevGuesses.push(num)
        guessesRemValue.innerHTML=  guessesRem
prevGuessField.innerHTML= prevGuesses.join(",")

isCorrectMatch(num)
    isGameOver(num)
    clearInput()
  

    }

}

function isCorrectMatch(num){
    if(num==RandNum){
        alert(`Congrats! you have gueses in ${10-guessesRem} attempts`)
        submitBtn.disabled =true
        submitBtn.style.backgroundColor='#ccc'
    }
    else if(RandNum>num){
        alert("enter a larger number")

    }
    else if(RandNum<num){
        alert("enter a smaller number")

    }
}

function isGameOver(){
    if(guessesRem<=0){
        alert(`game Over! the Number was ${RandNum} `)
        submitBtn.disabled =true
        submitBtn.style.backgroundColor='#ccc'

    }


}
//NOTE : submit event form par lgta hai , click event button pe always
form.addEventListener('submit',(e)=>{
     e.preventDefault();
    // console.log(e);
    const inputValue = document.querySelector('#InputNum').value
    checkValidInput(inputValue)
    
    // console.log(prevGuesses);
    

})
// submitBtn.addEventListener('click',(e)=>{
//      e.preventDefault();
//     console.log(e);
    

// })

resetBtn.addEventListener('click',()=>{
    generateRand()
     prevGuesses = []
 guessesRem = 10
prevGuessField.innerHTML=  prevGuesses.join(",")
guessesRemValue.innerHTML= `<span>${guessesRem}</span>`
clearInput()
       submitBtn.disabled =false
        submitBtn.style.backgroundColor='green'

})