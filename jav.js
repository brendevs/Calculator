


let operators = ['+', '-', '*', '/', '%'];

const display = document.getElementById('display');


function
    number (input) { 
        display.value += input
    } 

function
    bura (input) { 
        display.value = ""
    }
function
    operator (input) {
        display.value += input
    }
function
    result (input) {
        display.value = eval(display.value)
    }
function
    divide (input) {
        display.value += input
    }
