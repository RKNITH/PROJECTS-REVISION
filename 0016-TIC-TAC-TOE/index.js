// const games = document.querySelectorAll('.game');
// const restart = document.getElementById('restart');
// const start = document.getElementById('start');
// const firstPlayer = document.getElementById('first');
// const secondPlayer = document.getElementById('second');
// const firstPlayerName = document.getElementById('firstPlayerName');
// const secondPlayerName = document.getElementById('secondPlayerName');
// const firstPlayerChoice = document.getElementById('firstPlayerChoice');
// const result = document.querySelector('.result-container'); // Corrected to use querySelector

// const capitalizeFirstLetter = (string) => `${string.charAt(0).toUpperCase()}${string.slice(1)}`;

// let playerTurn = 'first';
// let firstPlayerChoices = '';
// let secondPlayerChoices = '';
// let gameActive = true;

// const winningCombinations = [
//     [0, 1, 2], // First row
//     [3, 4, 5], // Second row
//     [6, 7, 8], // Third row
//     [0, 3, 6], // First column
//     [1, 4, 7], // Second column
//     [2, 5, 8], // Third column
//     [0, 4, 8], // Diagonal from top-left to bottom-right
//     [2, 4, 6]  // Diagonal from top-right to bottom-left
// ];

// // Function to check for a winner or a draw
// const checkGameStatus = () => {
//     let board = Array.from(games).map(game => game.innerHTML.trim());

//     // Check for a winner
//     for (let combination of winningCombinations) {
//         const [a, b, c] = combination;
//         if (board[a] && board[a] === board[b] && board[a] === board[c]) {
//             return board[a] === firstPlayerChoices ? 'first' : 'second';
//         }
//     }

//     // Check for a draw
//     if (board.every(cell => cell !== '')) {
//         return 'draw';
//     }

//     // If no winner and no draw, return null
//     return null;
// };

// start.addEventListener('click', () => {
//     // Prepare player choices
//     firstPlayerChoices = firstPlayerChoice.value.trim().toUpperCase();
//     secondPlayerChoices = firstPlayerChoices === 'X' ? 'O' : 'X';

//     // Display player names and choices
//     firstPlayer.innerHTML = `${capitalizeFirstLetter(firstPlayerName.value.trim())} : ${firstPlayerChoices}`;
//     secondPlayer.innerHTML = `${capitalizeFirstLetter(secondPlayerName.value.trim())} : ${secondPlayerChoices}`;

//     playerTurn = 'first'; // Reset to first player's turn
//     gameActive = true; // Game is now active

//     // Add click event listener to each game cell
//     games.forEach(game => {
//         game.addEventListener('click', () => {
//             // Only proceed if the cell is empty and game is active
//             if (game.innerHTML.trim() === '' && gameActive) {
//                 if (playerTurn === 'first') {
//                     game.innerHTML = firstPlayerChoices;
//                     playerTurn = 'second'; // Switch to the second player's turn
//                 } else {
//                     game.innerHTML = secondPlayerChoices;
//                     playerTurn = 'first'; // Switch back to the first player's turn
//                 }

//                 // Check for a winner or draw
//                 let status = checkGameStatus();
//                 if (status === 'first') {
//                     result.innerHTML = `${capitalizeFirstLetter(firstPlayerName.value.trim())} wins!`;
//                     gameActive = false;
//                 } else if (status === 'second') {
//                     result.innerHTML = `${capitalizeFirstLetter(secondPlayerName.value.trim())} wins!`;
//                     gameActive = false;
//                 } else if (status === 'draw') {
//                     result.innerHTML = 'It\'s a draw!';
//                     gameActive = false;
//                 }
//             }
//         });
//     });
// });

// // Handle the restart button
// restart.addEventListener('click', () => {
//     games.forEach(game => game.innerHTML = ''); // Clear the game board
//     firstPlayer.innerHTML = '';
//     secondPlayer.innerHTML = '';
//     firstPlayerName.value = '';
//     secondPlayerName.value = '';
//     firstPlayerChoice.value = '';
//     result.innerHTML = ''; // Clear the result message
//     gameActive = true; // Reset the game state
// });











// ************************************************************

// const games = document.querySelectorAll('.game');
// const restart = document.getElementById('restart');
// const start = document.getElementById('start');
// const firstPlayer = document.getElementById('first');
// const secondPlayer = document.getElementById('second');
// const firstPlayerName = document.getElementById('firstPlayerName');
// const secondPlayerName = document.getElementById('secondPlayerName');
// const firstPlayerChoice = document.getElementById('firstPlayerChoice');
// const result = document.querySelector('.result-container');


// let playerTurn = 'first';
// let firstPlayerChoices = '';
// let secondPlayerChoices = '';
// let gameActive = true;

// const winningCombinations = [
//     [0, 1, 2], // First row
//     [3, 4, 5], // Second row
//     [6, 7, 8], // Third row
//     [0, 3, 6], // First column
//     [1, 4, 7], // Second column
//     [2, 5, 8], // Third column
//     [0, 4, 8], // Diagonal from top-left to bottom-right
//     [2, 4, 6]  // Diagonal from top-right to bottom-left
// ];

// const capitalizeFirstLetter = (string) => `${string.charAt(0).toUpperCase()}${string.slice(1)}`;

// const checkGameStatus = () => {
//     let board = Array.from(games).map((game) => game.innerHTML.trim())
//     for (combination of winningCombinations) {
//         let [a, b, c] = combination

//         if (board[a] && board[a] === board[b] && board[b] === board[c]) {
//             return board[a] === firstPlayerChoice ? 'first' : 'second'
//         }
//     }

//     if (board.every(cell => cell != '')) {
//         return 'draw'
//     }
//     return null
// }


// start.addEventListener('click', () => {
//     let firstPlayerChoices = firstPlayerChoice.value.trim().toUpperCase()
//     let secondPlayerChoices = firstPlayerChoices === 'X' ? 'O' : 'X'

//     firstPlayer.innerHTML = `${capitalizeFirstLetter(firstPlayerName.value.trim())} : ${firstPlayerChoices}`
//     secondPlayer.innerHTML = `${capitalizeFirstLetter(secondPlayerName.value.trim())} : ${secondPlayerChoices}`
//     playerTurn = 'first';
//     gameActive = true
//     games.forEach(game => {
//         game.addEventListener('click', () => {
//             if (game.innerHTML.trim() === '' && gameActive) {
//                 if (playerTurn === 'first') {
//                     game.innerHTML = firstPlayerChoices
//                     playerTurn = 'second'
//                 }
//                 else {
//                     game.innerHTML = secondPlayerChoices
//                     playerTurn = 'first'
//                 }

//                 //   Check for a winner or draw
//                 let status = checkGameStatus();
//                 if (status === 'first') {
//                     result.innerHTML = `${capitalizeFirstLetter(firstPlayerName.value.trim())} wins!`;
//                     gameActive = false;
//                 } else if (status === 'second') {
//                     result.innerHTML = `${capitalizeFirstLetter(secondPlayerName.value.trim())} wins!`;
//                     gameActive = false;
//                 } else if (status === 'draw') {
//                     result.innerHTML = 'It\'s a draw!';
//                     gameActive = false;
//                 }

//             }

//         })

//     })
// })

// // Handle the restart button
// restart.addEventListener('click', () => {
//     games.forEach(game => game.innerHTML = ''); // Clear the game board
//     firstPlayer.innerHTML = '';
//     secondPlayer.innerHTML = '';
//     firstPlayerName.value = '';
//     secondPlayerName.value = '';
//     firstPlayerChoice.value = '';
//     result.innerHTML = ''; // Clear the result message
//     gameActive = true; // Reset the game state
// });



// ************************************************************************

const games = document.querySelectorAll('.game');
const restart = document.getElementById('restart');
const start = document.getElementById('start');
const firstPlayer = document.getElementById('first');
const secondPlayer = document.getElementById('second');
const firstPlayerName = document.getElementById('firstPlayerName');
const secondPlayerName = document.getElementById('secondPlayerName');
const firstPlayerChoice = document.getElementById('firstPlayerChoice');
const result = document.querySelector('.result-container');


let playerTurn = 'first';
let firstPlayerChoices = '';
let secondPlayerChoices = '';
let gameActive = true;

const winningCombinations = [
    [0, 1, 2], // First row
    [3, 4, 5], // Second row
    [6, 7, 8], // Third row
    [0, 3, 6], // First column
    [1, 4, 7], // Second column
    [2, 5, 8], // Third column
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [2, 4, 6]  // Diagonal from top-right to bottom-left
];


const capitalizeFirstLetter = (string) => `${string.charAt(0).toUpperCase()}${string.slice(1)}`

const checkGameStatus = () => {
    let board = Array.from(games).map(game => game.innerHTML)

    for (combinations of winningCombinations) {
        let [a, b, c] = combinations

        if (board[a] && board[a] === board[b] && board[b] === board[c])
            return board[a] === firstPlayerChoices ? 'first' : 'second'
    }

    if (board.every(cell => cell != '')) {
        return 'draw'
    }
    return null



}


start.addEventListener('click', () => {
    firstPlayerChoices = firstPlayerChoice.value.trim().toUpperCase()
    secondPlayerChoices = firstPlayerChoices === 'X' ? 'O' : 'X'

    firstPlayer.innerHTML = `${capitalizeFirstLetter(firstPlayerName.value.trim())} : ${firstPlayerChoices}`
    secondPlayer.innerHTML = `${capitalizeFirstLetter(secondPlayerName.value.trim())} : ${secondPlayerChoices} `

    playerTurn = 'first'
    gameActive = true

    games.forEach(game => {
        game.addEventListener('click', () => {
            if (game.innerHTML === '' && gameActive) {
                if (playerTurn === 'first') {
                    game.innerHTML = firstPlayerChoices
                    playerTurn = 'second'
                }
                else {
                    game.innerHTML = secondPlayerChoices
                    playerTurn = 'first'

                }
                let status = checkGameStatus();
                if (status === 'first') {
                    result.innerHTML = `${capitalizeFirstLetter(firstPlayerName.value.trim())} wins!`;
                    gameActive = false;
                } else if (status === 'second') {
                    result.innerHTML = `${capitalizeFirstLetter(secondPlayerName.value.trim())} wins!`;
                    gameActive = false;
                } else if (status === 'draw') {
                    result.innerHTML = 'It\'s a draw!';
                    gameActive = false;
                }
            }
        })
    })



})



// Handle the restart button
restart.addEventListener('click', () => {
    games.forEach(game => game.innerHTML = ''); // Clear the game board
    firstPlayer.innerHTML = '';
    secondPlayer.innerHTML = '';
    firstPlayerName.value = '';
    secondPlayerName.value = '';
    firstPlayerChoice.value = '';
    result.innerHTML = ''; // Clear the result message
    gameActive = true; // Reset the game state
});