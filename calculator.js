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
        // Evaluate the expression in the display
        const result = eval(display.value);
        
        // Display the result, if it's finite
        display.value = isFinite(result) ? result : 'Error';
    } catch (error) {
        // If there was an error in evaluation (e.g. invalid expression), show 'Error'
        display.value = 'Error';
    }
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


function squareNumber(){
    const display = document.getElementById('display');
    try{
        const result = eval(display.value);
        display.value = Math.pow(result,2);

    }
    catch{
        display.value = 'Error';

    }
}

function cubeNumber(){
    const display = document.getElementById('display');
    try{
        const result = eval(display.value);
        display.value = Math.pow(result,3);
    }
    catch{
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


function squareRoot(){
    const display = document.getElementById('display');
    try{
        const result = eval(display.value);
        display.value = Math.sqrt(result);
    }
    catch{
        display.value = 'Error';
    }
}


function reciprocal(){
    const display = document.getElementById('display');
    try{
        const result = eval(display.value);
        display.value = 1/result;
    }
    catch{
        display.value = 'Error';
    }
}


function factorial(n){
    const display = document.getElementById('display');
    try{
        let result = eval(display.value);
        result = 1;
        n = eval(display.value);
        if (n<0) return "Error";
        if (n == 0 || n == 1) return 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        display.value = result;
    }
    catch{
        display.value = 'Error';
    }
}

function logarithmic() {
    const display = document.getElementById('display');
    try {
        // Ensure the input is evaluated correctly
        const result = eval(display.value);

        // Check if the result is a valid positive number (logarithms of non-positive numbers are undefined)
        if (result <= 0 || isNaN(result)) {
            throw new Error('Invalid input');
        }

        // Calculate the logarithm base 10
        display.value = Math.log10(result);
    } catch {
        display.value = 'Error';
    }
}



