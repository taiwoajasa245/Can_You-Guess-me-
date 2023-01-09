
/// Naming The variable 

let num = document.querySelector('#number'); 
let numGenerator = document.querySelector("#input-generator"); 
let inputNumber = document.querySelector("#input-number"); 
let result = document.querySelector("#result"); 
let inputNumberVal = inputNumber.value ;
let point  = document.querySelector('#point'); 
let i = 100; 
// welcome message 

window.alert("Welcome Back Guess A Number From 1 - 100 "); 
// general function 

const myNumber = () => {
    // using the math method (main thing)
    let matNumber = Math.abs( 100 - 1); 
    mathVal = Math.floor( Math.random() * matNumber + 1); 

    num.textContent = mathVal;
    result.textContent = `Guessed Number:${inputNumber.value}`; 

    

    if(inputNumber.value > 100) {
        alert('Number Too High (try again)')
        num.textContent = 0;
        mathVal = 0;
        result.textContent = "Number Too High (try again)"; 

    }else if(inputNumber.value <= 0) { 
        alert('Number Too low (try again)');
        num.textContent = 0; 
        mathVal = 0;
        result.textContent = "Number Too low (try again)"; 
    }else if(inputNumber.value == mathVal) { 
        alert('Congratulation You Guessed Right'); 
        myIncrement();
    }else if(inputNumber.value < mathVal) { 
        alert("Sorry try your luck next time"); 
        myDecrement();
        

    }else if(inputNumber.value > mathVal) {
        alert('Sorry try your luck next time'); 
        myDecrement();
    }
}

function myIncrement(){ 
    i += 100; 
    point.innerHTML = `Amount: $${i}`; 
}
function myDecrement(){
    let decrement = i--; 
    point.innerHTML = `Amount: $${i}`; 

    if ( decrement <= 0) {
        i = 0; 
        point.innerHTML = `Amount: $${i}`; 
        num.textContent = 0; 
        mathVal = 0; 
        numGenerator.addEventListener('mouseover', () => { 
            alert('Sorry you have no money left to guess reload to restart'); 
        })
    }

}
numGenerator.addEventListener('click', () => {
    myNumber();
})

// done 
