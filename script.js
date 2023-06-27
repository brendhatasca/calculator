const body = document.querySelector('body');
const previousOperandDisplay = document.querySelector('.previous-operand')
const currentOperandDisplay = document.querySelector('.current-operand')
const numBtn = document.querySelectorAll('.numb-btn');
const operatorBtn = document.querySelectorAll('.operator')
const clearBtn = document.querySelector('.clear');
const equalsBtn = document.querySelector('.equals');


 let previousOperand = '';
 let currentOperand = '';
 let operator = undefined;

operatorBtn.forEach(opBtn =>{
    opBtn.addEventListener('click', function() {
        operation(opBtn.innerHTML);
        updateDisplay();
    })
})

numBtn.forEach(btn => { btn.addEventListener('click', function() {
    inputNumber(btn.innerHTML);
    updateDisplay();
    })
});

clearBtn.addEventListener('click', btn => {
    clear();
    updateDisplay();
});

equalsBtn.addEventListener('click', btn => {
    operate();
    updateDisplay();
});

// appends number
function inputNumber(number) {
    if((currentOperand.includes(".")) && number === ".") return

    if (currentOperand.length < 12)
    currentOperand = (currentOperand+=number).toString(); // it doesnt work if you assign a variable to currentOperand.innerHTML;

};

function operation(operator) {
    if (currentOperand === '') return
    if (previousOperand !== '') {
        operate()
    }
    operator = operator;
    console.log(operator);
    previousOperand = currentOperand;
    console.log(previousOperand); // stores old value
    currentOperand = ''; // clears screen
}

function updateDisplay () {
    currentOperandDisplay.innerHTML = currentOperand;
    previousOperandDisplay.innerHTML = previousOperand;
    if (operator !== undefined){    
        previousOperandDisplay.innerHTML = `${previousOperand} ${operator}`;
} else {
    previousOperandDisplay.innerHTML = '';
}
}


function clear() {
    currentOperand = '';
    previousOperand = '';
    operator = undefined;
}



function operate() {
    let result;
    currentOperand = parseFloat(currentOperand);
    previousOperand = parseFloat(previousOperand);

    //if(isNaN(currentOperand) || isNaN(previousOperand)) return;

    switch (operator) {
        case "+":
            result = add(previousOperand, currentOperand);
            break;
        case "-":
            result = subtract(previousOperand, currentOperand);
            break;
        case "÷":
            result = divide(previousOperand, currentOperand);
            break;
        case "x":
            result = multiply(previousOperand, currentOperand);
            break;
    }
    currentOperand = result;
    operator = undefined;
    previousOperand = '';
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