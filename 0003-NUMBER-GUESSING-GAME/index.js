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
const inp = document.getElementById('inp');
const select = document.getElementById('select');
const left = document.getElementById('left');
const reset = document.getElementById('reset');
const submit = document.getElementById('submit');

let level

let guessingNumber = Math.floor(Math.random() * 100) + 1
console.log(guessingNumber);


function setDifficulty() {
    select.addEventListener('change', () => {
        if (select.value === '2') {
            level = 5
        }
        else if (select.value === '1') {
            level = 5
        }

        left.innerHTML = level
    })

}
setDifficulty()

submit.addEventListener('click', () => {
    if (inp.value > guessingNumber) {
        alert('Too Large')
        level -= 1
        left.innerHTML = level
        inp.value = ''
    }
    else if (inp.value < guessingNumber) {
        alert('Too Small')
        level -= 1
        left.innerHTML = level
        inp.value = ''
    }
    else if (inp.value == guessingNumber) {
        alert('Got It')

    }
    if (level < 1) {
        submit.disabled = true;

    }

})

reset.addEventListener('click', () => {
    inp.value = '';
    num = Math.floor(Math.random() * 100) + 1; // New random number between 1 and 100
    setDifficulty(); // Reset difficulty level
    console.log(num);
    submit.disabled = false; // Enable the submit button
});

