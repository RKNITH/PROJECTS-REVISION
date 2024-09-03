// const inp = document.getElementById('inp');
// const select = document.getElementById('select');
// const left = document.getElementById('left');
// const reset = document.getElementById('reset');
// const submit = document.getElementById('submit');

// let num = Math.floor(Math.random() * 100) + 1; // Number between 1 and 100
// console.log(num);

// let level;

// // Function to set the difficulty level based on selection
// const setDifficulty = () => {
//     if (select.value === '2') {  // Hard level
//         level = 5;
//     } else if (select.value === '1') {  // Easy level
//         level = 10;
//     }
//     left.innerHTML = level;
// };

// // Set the initial difficulty level
// setDifficulty();

// // Change difficulty level when the selection changes
// select.addEventListener('change', setDifficulty);

// reset.addEventListener('click', () => {
//     inp.value = '';
//     num = Math.floor(Math.random() * 100) + 1; // New random number between 1 and 100
//     setDifficulty(); // Reset difficulty level
//     console.log(num);
//     submit.disabled = false; // Enable the submit button
// });

// submit.addEventListener('click', () => {
//     if (parseInt(inp.value) === num) {
//         alert('YOU GOT IT');
//     } else if (parseInt(inp.value) < num) {
//         alert('TOO LOW');
//         level -= 1;
//         left.innerHTML = level;
//         inp.value = ''
//     } else if (parseInt(inp.value) > num) {
//         alert('TOO HIGH');
//         level -= 1;
//         left.innerHTML = level;
//         inp.value = ''
//     }

//     if (level < 1) {
//         alert('YOU LOSE');
//         submit.disabled = true; // Disable the submit button
//     }
// });


// **************************************************
// const inp = document.getElementById('inp');
// const select = document.getElementById('select');
// const left = document.getElementById('left');
// const reset = document.getElementById('reset');
// const submit = document.getElementById('submit');

// let level

// let guessingNumber = Math.floor(Math.random() * 100) + 1
// console.log(guessingNumber);


// function setDifficulty() {
//     select.addEventListener('change', () => {
//         if (select.value === '2') {
//             level = 5
//         }
//         else if (select.value === '1') {
//             level = 5
//         }

//         left.innerHTML = level
//     })

// }
// setDifficulty()

// submit.addEventListener('click', () => {
//     if (inp.value > guessingNumber) {
//         alert('Too Large')
//         level -= 1
//         left.innerHTML = level
//         inp.value = ''
//     }
//     else if (inp.value < guessingNumber) {
//         alert('Too Small')
//         level -= 1
//         left.innerHTML = level
//         inp.value = ''
//     }
//     else if (inp.value == guessingNumber) {
//         alert('Got It')

//     }
//     if (level < 1) {
//         submit.disabled = true;

//     }

// })

// reset.addEventListener('click', () => {
//     inp.value = '';
//     num = Math.floor(Math.random() * 100) + 1; // New random number between 1 and 100
//     setDifficulty(); // Reset difficulty level
//     console.log(num);
//     submit.disabled = false; // Enable the submit button
// });


// ***********************************************************
// const inp = document.getElementById('inp');
// const select = document.getElementById('select');
// const left = document.getElementById('left');
// const reset = document.getElementById('reset');
// const submit = document.getElementById('submit');

// const setDifficulty = () => {
//     select.addEventListener('change', () => {
//         if (select.value === '2') {
//             left.innerHTML = 5
//         }
//         else {
//             left.innerHTML = 10
//         }

//     })
// }
// setDifficulty()
// let level

// let guessingNumber = Math.floor(Math.random() * 100) + 1
// console.log(guessingNumber);


// submit.addEventListener('click', () => {
//     let guessedNumber = inp.value.trim()
//     level = left.innerHTML

//     if (level > 0) {
//         if (guessedNumber > guessingNumber) {
//             alert('Too Large')
//             level--
//             left.innerHTML = level
//             inp.value = ''
//         }
//         else if (guessedNumber < guessingNumber) {
//             alert('Too Low')
//             level--
//             left.innerHTML = level
//             inp.value = ''
//         }
//         else {
//             alert(' You Got it')
//         }
//     }
//     if (level < 1) {
//         alert('Gmae Over')
//         submit.disabled = true
//     }

// })

// reset.addEventListener('click', () => {
//     inp.value = ''
//     setDifficulty()
//     guessingNumber = Math.floor(Math.random() * 100) + 1
//     submit.disabled = false
//     console.log(guessingNumber);


// })





// ***********************************************************
// const inp = document.getElementById('inp');
// const select = document.getElementById('select');
// const left = document.getElementById('left');
// const reset = document.getElementById('reset');
// const submit = document.getElementById('submit');

// function setDifficulty() {
//     select.addEventListener('change', () => {
//         if (select.value == '2') {
//             left.innerHTML = 5
//         }
//         else {
//             left.innerHTML = 10
//         }
//     })
// }

// setDifficulty()


// let num = Math.floor(Math.random() * 100) + 1
// console.log(num);

// let level
// submit.addEventListener('click', () => {
//     let guess = inp.value
//     level = left.innerHTML
//     setDifficulty()

//     if (level > 0) {
//         if (inp.value > num) {
//             alert('Too large')
//             level--
//             left.innerHTML = level
//             inp.value = ''

//         }
//         else if (inp.value < num) {
//             alert('Too small')
//             level--
//             left.innerHTML = level
//             inp.value = ''
//         }
//         else {
//             alert('Got it')
//         }
//     }
//     if (level < 1) {
//         alert('Gmae over, lose it')
//         submit.disabled = true
//     }


// })

// reset.addEventListener('click', () => {
//     inp.value = ''
//     submit.disabled = false
//     select.value = 1
//     left.innerHTML = 10
//     num = Math.floor(Math.random() * 100) + 1
//     console.log(num);

// })


// *************************************************************

const inp = document.getElementById('inp');
const select = document.getElementById('select');
const left = document.getElementById('left');
const reset = document.getElementById('reset');
const submit = document.getElementById('submit');


let num = Math.floor(Math.random() * 100) + 1
console.log(num);

let life
const setDifficulty = () => {
    select.addEventListener('change', () => {
        if (select.value == 2) {
            left.innerHTML = 5
        }
        else {
            left.innerHTML = 10
        }
    })
}


setDifficulty()

submit.addEventListener('click', () => {
    life = left.innerHTML
    if (inp.value.length == 0) {
        alert('please guess number')

    } else {
        if (life > 0) {
            if (inp.value > num) {
                alert('Too Large')
                life--
                left.innerHTML = life
            }
            else if (inp.value < num) {
                alert('Too Small')
                life--
                left.innerHTML = life
            }
            else {
                alert('You Got It')
                submit.disabled = true
            }
        }
        else {
            alert('You have no extra attempts to guess the number')
            submit.disabled = true
        }
    }
})

reset.addEventListener('click', () => {
    submit.disabled = false
    select.value = 1
    left.innerHTML = 10
    inp.value = ''
    num = Math.floor(Math.random() * 100) + 1

})