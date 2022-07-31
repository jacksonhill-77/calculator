let numbers = document.querySelectorAll('.number')
let operators = document.querySelectorAll('.operator')
let displayDiv = document.querySelector('.display-text')
let clear = document.querySelector('.clear')
let equals = document.querySelector('.equals')
let number1 = ""
let number2 = ""
let operator = ""
let operatorCurrent = false
let calculation = ""

// When a number button is pressed, 
for (n of numbers) {
    n.addEventListener('click', (e) => {
        // check if an operator has already been clicked
        if (operatorCurrent === true) {
            // if it has, change the display to just this number, 
            // clearing the previous display
            displayDiv.textContent = e.target.textContent
            operatorCurrent = false
        } else {
            // if it hasn't, keep adding the numbers to the
            // existing display
            displayDiv.textContent += e.target.textContent
        }
    })
}

for (o of operators) {
    o.addEventListener('click', (e) => {
        // If no number has been entered yet
        if (number1 === "") {
            number1 = Number(displayDiv.textContent)
        } else {
            number2 = Number(displayDiv.textContent)
        }
        // If this is the first time an operator is used
        // in a sequence of calculations
        if (operatorCurrent === false) {
            // then the operator variable becomes the button just clicked
            operator = e.target.textContent
            operatorCurrent = true
                // else if it is the 2nd or later time the operator
                // is used
        } else if (operator !== "") {
            operator = e.target.textContent
            console.log(operator, number1, number2)
            calculation = Number(operate(operator, number1, number2))
            console.log(calculation)
            displayDiv.textContent = calculation
            number1 = Number(displayDiv.textContent)
            operatorCurrent = true
        }
    })
}

clear.addEventListener('click', () => {
    displayDiv.textContent = ""
    number1 = ""
    number2 = ""
    operator = ""
    calculation = ""
})

equals.addEventListener('click', () => {
    displayDiv.textContent = operate(operator, number1, number2)
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

const divide = function(...args) {
    let numbers = Array.prototype.slice.call(arguments)
    let flattened = numbers.reduce((prev, curr) => {
        return prev.concat(curr)
    }, [])
    return flattened.reduce((total, number) => {
        return total / number;
    }, 1);
};

const operate = function(operator, number1, number2) {
    number1 = Number(number1)
    number2 = Number(number2)
    if (operator === "+") {
        return (add(number1, number2))
    }
    if (operator === "-") {
        return (subtract(number1, number2))
    }
    if (operator === "x") {
        return (multiply(number1, number2))
    }
    if (operator === "/") {
        return (divide(number1, number2))
    }
}