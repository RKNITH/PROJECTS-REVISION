// function clearDisplay() {
//     document.getElementById("result").value = "";
// }

// function deleteLast() {
//     let currentDisplay = document.getElementById("result").value;
//     document.getElementById("result").value = currentDisplay.slice(0, -1);
// }

// function appendToDisplay(value) {
//     document.getElementById("result").value += value;
// }

// function calculateResult() {
//     let expression = document.getElementById("result").value;

//     try {
//         // Use eval to calculate the result with BODMAS rules
//         let result = eval(expression);
//         document.getElementById("result").value = result;
//     } catch (error) {
//         alert("Invalid expression");
//         clearDisplay();
//     }
// }


// ********************************************************************************************



function clearDisplay() {
    document.getElementById("result").value = "";
}

function deleteLast() {
    let currentDisplay = document.getElementById("result").value;
    document.getElementById("result").value = currentDisplay.slice(0, -1);
}

function appendToDisplay(value) {
    document.getElementById("result").value += value;
}

function calculateResult() {
    let expression = document.getElementById("result").value;
    try {
        let result = evaluateExpression(expression);
        document.getElementById("result").value = result;
    } catch (error) {
        alert("Invalid expression");
        clearDisplay();
    }
}

function evaluateExpression(expression) {
    let tokens = tokenize(expression);
    let postfix = infixToPostfix(tokens);
    return evaluatePostfix(postfix);
}

function tokenize(expression) {
    let tokens = [];
    let number = "";
    for (let i = 0; i < expression.length; i++) {
        let char = expression[i];
        if (isDigit(char) || char === ".") {
            number += char;
        } else {
            if (number) {
                tokens.push(number);
                number = "";
            }
            tokens.push(char);
        }
    }
    if (number) {
        tokens.push(number);
    }
    return tokens;
}

function isDigit(char) {
    return /\d/.test(char);
}

function infixToPostfix(tokens) {
    let precedence = { "+": 1, "-": 1, "*": 2, "/": 2, "(": 0 };
    let stack = [];
    let output = [];

    for (let token of tokens) {
        if (isDigit(token) || token.includes('.')) {
            output.push(token);
        } else if (token === '(') {
            stack.push(token);
        } else if (token === ')') {
            while (stack.length && stack[stack.length - 1] !== '(') {
                output.push(stack.pop());
            }
            stack.pop();
        } else {
            while (stack.length && precedence[stack[stack.length - 1]] >= precedence[token]) {
                output.push(stack.pop());
            }
            stack.push(token);
        }
    }

    while (stack.length) {
        output.push(stack.pop());
    }

    return output;
}

function evaluatePostfix(postfix) {
    let stack = [];

    for (let token of postfix) {
        if (isDigit(token) || token.includes('.')) {
            stack.push(parseFloat(token));
        } else {
            let b = stack.pop();
            let a = stack.pop();
            if (token === '+') stack.push(a + b);
            else if (token === '-') stack.push(a - b);
            else if (token === '*') stack.push(a * b);
            else if (token === '/') stack.push(a / b);
        }
    }

    return stack[0];
}
