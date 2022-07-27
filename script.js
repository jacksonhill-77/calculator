let numbers = document.querySelectorAll('.number')
let operators = document.querySelectorAll('.operator')
let displayDiv = document.querySelector('.display-text')
let clear = document.querySelector('.clear')
let equals = document.querySelector('.equals')
let previousNumber = "initial"

// Define event listeners for populating the display
for (n of numbers) {
    n.addEventListener('click', (e) =>
        displayDiv.textContent += e.target.textContent)
}

for (o of operators) {
    o.addEventListener('click', (e) => {
        if (previousNumber === "initial") {
            previousNumber = Number(displayDiv.textContent)
            displayDiv.textContent = e.target.textContent
        } else {
            previousNumber += Number(displayDiv.textContent)
            displayDiv.textContent = e.target.textContent
        }
    })
}

clear.addEventListener('click', () => {
    displayDiv.textContent = ""
})

equals.addEventListener('click', () => {
    displayDiv.textContent = ""
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
    if (operator === "+") {
        return (add(number1, number2))
    }
    if (operator === "-") {
        return (subtract(number1, number2))
    }
    if (operator === "*") {
        return (multiply(number1, number2))
    }
    if (operator === "/") {
        return (divide(number1, number2))
    }
}