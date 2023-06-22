const body = document.querySelector('body');
const screenDisplay = document.querySelector('.numbers-display')
const numBtn = document.querySelectorAll('.numb-btn');
const operatorBtn = document.querySelectorAll('.operator')
const clearBtn = document.querySelector('.clear');


let firstOperand = '';
let secondOperand = '';
let operator = '';
let isOpPressed = false;

clearBtn.addEventListener('click', clear);
operatorBtn.forEach(opBtn =>{
    opBtn.addEventListener('click', function(e) {
        operator = e.target.textContent;
        console.log(operator)
    })
})

window.onload = () => {screenDisplay.textContent = "0"};

numBtn.forEach(btn => { btn.addEventListener('click', function(e) {
    inputNumber(e.target.value);
    })
});

function inputNumber(number) {
    let screenNumber = screenDisplay.textContent;
    if (screenNumber.length < 12)
    screenDisplay.textContent = parseInt(screenDisplay.textContent+=number).toString(); // it doesnt work if you assign a variable to screenDisplay.innerHTML;
   // parseInt to get rid of 0
    //if(isOpPressed == true);
};

// //function setOperator(e) {
//     firstOperand = screenDisplay.textContent;
//     console.log(firstOperand)
//     operator = e.target.class;
//     console.log(operator);
// }

function clear() {
    screenDisplay.textContent = '0';
    firstOperand = '';
    secondOperand = '';
}



function operate(firstOperand, secondOperand, operator) {

    switch (operator) {
        case "add":
            add(firstOperand, secondOperand);
            break;
        case "-":
            subtract(firstOperand, secondOperand);
            break;
        case "/":
            divide(firstOperand, secondOperand);
            break;
        case "*":
            multiply(firstOperand, secondOperand);
            break;
    }
}

function add(a, b) {
    return a + b
};

function subtract(a, b) {
    return a - b
};

function divide(a, b) {
    return a / b
};

function multiply(a, b) {
    return a * b
};