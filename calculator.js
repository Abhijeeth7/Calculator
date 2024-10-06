// Function to append a character to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');

    // Check if the display is currently showing '0' and replace it
    if (display.value === '0' && value !== '.') {
        display.value = value;
    } else {
        display.value += value;
    }
}

// Function to clear the display
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '0'; // Reset the display to 0
}

// Function to calculate the result
function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Parse the expression safely
        const expression = display.value;
        const result = safeCalculate(expression);
        display.value = isFinite(result) ? result : 'Error';
    } catch (error) {
        display.value = 'Error';
    }
}

// Safe calculation method without using eval
function safeCalculate(expression) {
    const operators = expression.match(/[\+\-\*\/\%]/g); // Detect operators
    const numbers = expression.split(/[\+\-\*\/\%]/).map(num => parseFloat(num)); // Parse numbers
    let result = numbers[0]; // Start with the first number

    operators.forEach((operator, index) => {
        switch (operator) {
            case '+':
                result += numbers[index + 1];
                break;
            case '-':
                result -= numbers[index + 1];
                break;
            case '*':
                result *= numbers[index + 1];
                break;
            case '/':
                result /= numbers[index + 1];
                break;
            case '%':
                result %= numbers[index + 1];
                break;
        }
    });

    return result;
}

// Function to delete the last character
function clearLastCharacter() {
    const display = document.getElementById('display');

    // If there's only one character, reset to '0'
    if (display.value.length === 1) {
        display.value = '0';
    } else {
        // Otherwise, remove the last character
        display.value = display.value.slice(0, -1);
    }
}

function squareNumber() {
    const display = document.getElementById('display');
    try {
        const result = parseFloat(display.value);
        display.value = Math.pow(result, 2);
    } catch {
        display.value = 'Error';
    }
}

function cubeNumber() {
    const display = document.getElementById('display');
    try {
        const result = parseFloat(display.value);
        display.value = Math.pow(result, 3);
    } catch {
        display.value = 'Error';
    }
}

function powerNumber() {
    const display = document.getElementById('display');
    try {
        // Split the input based on the comma (or any separator you prefer)
        const [a, b] = display.value.split(',');

        // Convert strings to numbers and calculate the power
        display.value = Math.pow(Number(a), Number(b));
    } catch {
        display.value = 'Error';
    }
}

function squareRoot() {
    const display = document.getElementById('display');
    try {
        const result = parseFloat(display.value);
        display.value = Math.sqrt(result);
    } catch {
        display.value = 'Error';
    }
}

function reciprocal() {
    const display = document.getElementById('display');
    try {
        const result = parseFloat(display.value);
        display.value = 1 / result;
    } catch {
        display.value = 'Error';
    }
}

function factorial() {
    const display = document.getElementById('display');
    try {
        let n = parseInt(display.value, 10);
        let result = 1;
        if (n < 0) return display.value = 'Error';
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        display.value = result;
    } catch {
        display.value = 'Error';
    }
}

function logarithmic() {
    const display = document.getElementById('display');
    try {
        const result = parseFloat(display.value);
        if (result <= 0 || isNaN(result)) {
            throw new Error('Invalid input');
        }
        display.value = Math.log10(result);
    } catch {
        display.value = 'Error';
    }
}

// Event listener for Enter key to calculate result
document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        calculateResult();
    }
});
