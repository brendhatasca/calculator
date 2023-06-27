const previousOperandScreen = document.querySelector('.previous-operand');
const currentOperandScreen = document.querySelector('.current-operand');
const numberBtns = document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[data-operator]');
const allClear = document.querySelector('.clear');
const equals = document.querySelector('.equals');
const del = document.querySelector('.delete');

let currentOperand = '';
let previousOperand = '';
let currentOperation = undefined;


numberBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        inputNumber(btn.innerHTML)
    })
}) // ok

operationBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        chooseOperation(btn.innerHTML)
    })
}) 

allClear.addEventListener('click', clear);
del.addEventListener('click', deleteLastNumber);
equals.addEventListener('click', evaluate());

function clear() {
    currentOperand = '';
    previousOperand = '';
    currentOperandScreen.textContent = '';
    previousOperandScreen.textContent = '';
    operator = undefined;
} // ok

function deleteLastNumber() {
    currentOperandScreen.innerHTML = currentOperandScreen.innerHTML.slice(0, -1)
} // ok

function inputNumber(number) {
    if(currentOperandScreen.innerHTML.includes(".") && number === ".") return;

    if(currentOperandScreen.innerHTML.length < 16)
    currentOperandScreen.innerHTML = (currentOperandScreen.innerHTML).toString() + number.toString();
} // ok

function chooseOperation (operator) {
    if (previousOperand !== '') {
        evaluate()
    }  
    previousOperand = currentOperandScreen.innerHTML;
    currentOperation = operator;
    currentOperandScreen.innerHTML = '';
    previousOperandScreen.innerHTML = `${previousOperand} ${operator}`;
}

function evaluate() {
    let result;
    previousOperand = parseFloat(previousOperand)
    currentOperand = parseFloat(currentOperandScreen.innerHTML);

    switch (currentOperation) {
        case "+":
            result = add(previousOperand, currentOperand);
            break;
        case "-":
            result = subtract(previousOperand, currentOperand);
            break;
        case "÷":
            if(currentOperand === 0) {
                result = "Error"
            } else
            {result = divide(previousOperand, currentOperand)};
            break;
        case "x":
            result = multiply(previousOperand, currentOperand);
            break;
        default:
            return;
    }

    currentOperand = result;
    currentOperandScreen.innerHTML = result;
    currentOperation = undefined;
    previousOperand = '';

    // previousOperandScreen = `${previousOperand} ${currentOperand} ${currentOperantion}`
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