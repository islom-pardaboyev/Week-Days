"use strict";

let elForm = document.querySelector(".form")
let elNumberInput = document.querySelector(".number-input")
let elResult = document.querySelector(".result")

elForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let numberInput = parseInt(elNumberInput.value)

    if(numberInput === 1){
        elResult.textContent = "Dushanba";
    }
    else if(numberInput === 2){
        elResult.textContent = "Seshanba"
    }
    else if(numberInput === 3){
        elResult.textContent = "Chorshanba"
    }
    else if(numberInput === 4){
        elResult.textContent = "Payshanba"
    }
    else if(numberInput === 5){
        elResult.textContent = "Juma"
    }
    else if(numberInput === 6){
        elResult.textContent = "Shanba"
    }
    else if(numberInput === 7){
        elResult.textContent = "Yakshanba"
    }
    else(
        elResult.textContent = "1dan 7gacha bo'lgan sonlarni kiriting"
    )
})
