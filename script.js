const display = document.querySelector('.display-numbers');
const btn1 = document.getElementById('btn-1')
const btn2 = document.querySelector('btn-2')
const numBtns = document.querySelectorAll('numb-btn');

btn1.addEventListener('click', () => {
    display.textContent = btn1.textContent;
})
btn2.addEventListener('click', () => {
    display.textContent = btn2.textContent;
})



let numb1, operator, numb2;

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

numb1 = 2;
numb2 = 5;



function operate() {

    switch (operator) {
        case "+":
            add(numb1, numb2);
            break;
        case "-":
            subtract(numb1, numb2);
            break;
        case "/":
            divide(numb1, numb2);
            break;
        case "*":
            multiply(numb1, numb2);
            break;
    }
}


console.log(add(numb1, numb2));
console.log(subtract(numb1, numb2));
console.log(divide(numb1, numb2));
console.log(multiply(numb1, numb2));