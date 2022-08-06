let numbers = document.querySelectorAll('.number')
let operators = document.querySelectorAll('.operator')
let displayDiv = document.querySelector('.display-text')
let clear = document.querySelector('.clear')
let equals = document.querySelector('.equals')
let backspace = document.getElementById('c')
let point = document.querySelector('.point')
let percent = document.querySelector('.percent')

let number1 = ""
let number2 = ""
let operator = ""
let isOperatorInitial = true
let isNumberCurrent = true
let calculation = ""
let pressedEquals = false

function roundNumber(num, dec) {
    return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
}

// When a number button is pressed, 
for (n of numbers) {
    n.addEventListener('click', (e) => {
        let numberSelected = e.target.textContent
            // check if an operator has already been clicked
        if (isNumberCurrent === true) {
            // if it has, change the display to just this number, 
            // clearing the previous display
            displayDiv.textContent = numberSelected
            isNumberCurrent = false
        } else {
            // if it hasn't, keep adding the numbers to the
            // existing display
            displayDiv.textContent += numberSelected
        }
    })
}

for (o of operators) {
    o.addEventListener('click', (e) => {
        if (pressedEquals === true) {
            number1 = Number(displayDiv.textContent)
            operator = e.target.textContent
            pressedEquals = false
        } else {
            // If no number has been entered yet
            if (number1 === "") {
                number1 = Number(displayDiv.textContent)
            } else {
                number2 = Number(displayDiv.textContent)
            }
            // If this is the first time an operator is used
            // in a sequence of calculations
            if (isOperatorInitial === true) {
                // then the operator variable becomes the button just clicked
                operator = e.target.textContent
                isNumberCurrent = true
                isOperatorInitial = false

                // or if it is the 2nd or later time an operator
                // is used, do the following
            } else {
                let isOperatorDivision = e.target.textContent
                if ((isOperatorDivision === '÷') && (number2 === '0')) {
                    calculation = 'c\'mon'
                    displayDiv.textContent = calculation
                } else {
                    calculation = Number(operate(operator, number1, number2))
                    displayDiv.textContent = calculation
                    number1 = Number(displayDiv.textContent)
                    isNumberCurrent = true
                    operator = e.target.textContent
                }
            }
        }
    })
}

clear.addEventListener('click', () => {
    displayDiv.textContent = ""
    number1 = ""
    number2 = ""
    operator = ""
    calculation = ""
    isOperatorInitial = true
    isNumberCurrent = true
})

equals.addEventListener('click', () => {
    number2 = displayDiv.textContent
    displayDiv.textContent = operate(operator, number1, number2)
    operator = ""
    isNumberCurrent = true
    pressedEquals = true
})

backspace.addEventListener('click', () => {
    let currentDisplay = displayDiv.textContent
    displayDiv.textContent = currentDisplay.slice(0, -1);

})

point.addEventListener('click', () => {
    let currentDisplay = displayDiv.textContent
    if (currentDisplay.includes(".") === false) {
        let newDisplay = currentDisplay + "."
        displayDiv.textContent = newDisplay
    }
})

percent.addEventListener('click', () => {
    let currentDisplay = displayDiv.textContent
    let newDisplay = Number(currentDisplay)
    newDisplay = newDisplay / 100
    displayDiv.textContent = newDisplay
})

// Define the basic calculating operators
const add = function(...args) {
    const numbers = Array.prototype.slice.call(arguments)
    return numbers.reduce((total, number) => {
        return total + number;
    }, 0);
}

const subtract = function(a, b) {
    return a - b
};

const multiply = function(...args) {
    let numbers = Array.prototype.slice.call(arguments)
    let flattened = numbers.reduce((prev, curr) => {
        return prev.concat(curr)
    }, [])
    return flattened.reduce((total, number) => {
        return total * number;
    }, 1);
};

const divide = function(number1, number2) {
    return number1 / number2
};

const operate = function(operator, number1, number2) {
    number1 = Number(number1)
    number2 = Number(number2)
    if (operator === "+") {
        return (roundNumber(add(number1, number2), 10))
    }
    if (operator === "-") {
        return (roundNumber(subtract(number1, number2), 10))
    }
    if (operator === "x") {
        return (roundNumber(multiply(number1, number2), 10))
    }
    if (operator === "÷") {
        return (roundNumber(divide(number1, number2), 10))
    }
}