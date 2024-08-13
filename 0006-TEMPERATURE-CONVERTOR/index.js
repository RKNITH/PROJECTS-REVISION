const inp = document.getElementById('inp');
const selection = document.getElementById('selection');
const result = document.getElementById('result');
const display = document.getElementById('display');
const calculate = document.getElementById('calculate');

calculate.addEventListener('click', () => {
    let inputValue = parseFloat(inp.value);
    let inputScale = selection.value;
    let resultScale = result.value;
    let outputValue;

    // Celsius to other units
    if (inputScale === '1' && resultScale === '1') {
        outputValue = inputValue; // Celsius to Celsius
    } else if (inputScale === '1' && resultScale === '2') {
        outputValue = (inputValue * 9 / 5) + 32; // Celsius to Fahrenheit
    } else if (inputScale === '1' && resultScale === '3') {
        outputValue = inputValue + 273.15; // Celsius to Kelvin
    }

    // Fahrenheit to other units
    if (inputScale === '2' && resultScale === '1') {
        outputValue = (inputValue - 32) * 5 / 9; // Fahrenheit to Celsius
    } else if (inputScale === '2' && resultScale === '2') {
        outputValue = inputValue; // Fahrenheit to Fahrenheit
    } else if (inputScale === '2' && resultScale === '3') {
        outputValue = ((inputValue - 32) * 5 / 9) + 273.15; // Fahrenheit to Kelvin
    }

    // Kelvin to other units
    if (inputScale === '3' && resultScale === '1') {
        outputValue = inputValue - 273.15; // Kelvin to Celsius
    } else if (inputScale === '3' && resultScale === '2') {
        outputValue = ((inputValue - 273.15) * 9 / 5) + 32; // Kelvin to Fahrenheit
    } else if (inputScale === '3' && resultScale === '3') {
        outputValue = inputValue; // Kelvin to Kelvin
    }

    display.value = outputValue.toFixed(2); // Display result with 2 decimal places
});
