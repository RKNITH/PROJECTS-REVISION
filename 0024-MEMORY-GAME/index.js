// const gameBoard = document.getElementById('gameBoard');
// const restartButton = document.getElementById('restartButton');
// const levelIndicator = document.getElementById('level');
// let cards = [];
// let flippedCards = [];
// let matches = 0;
// let level = 1;

// // Initialize the game
// function initGame() {
//     // Retrieve saved level from localStorage
//     const savedLevel = localStorage.getItem('memoryGameLevel');
//     if (savedLevel) {
//         level = parseInt(savedLevel, 10);
//     } else {
//         level = 1;
//     }

//     matches = 0;
//     flippedCards = [];
//     cards = generateCards(level);
//     cards = shuffle(cards);
//     gameBoard.innerHTML = '';
//     const gridSize = Math.ceil(Math.sqrt(cards.length));
//     gameBoard.style.gridTemplateColumns = `repeat(${gridSize}, 100px)`;
//     levelIndicator.textContent = level;

//     cards.forEach((card, index) => {
//         const cardElement = document.createElement('div');
//         cardElement.classList.add('card');
//         cardElement.dataset.value = card;

//         const cardInner = document.createElement('div');
//         cardInner.classList.add('card-inner');

//         const cardFront = document.createElement('div');
//         cardFront.classList.add('card-front');
//         cardFront.textContent = '?';

//         const cardBack = document.createElement('div');
//         cardBack.classList.add('card-back');
//         cardBack.textContent = card;

//         cardInner.appendChild(cardFront);
//         cardInner.appendChild(cardBack);
//         cardElement.appendChild(cardInner);

//         cardElement.addEventListener('click', flipCard);
//         gameBoard.appendChild(cardElement);
//     });
// }

// // Generate cards based on the level
// function generateCards(level) {
//     const cardValues = 'ABCDEFGH'.slice(0, level * 2);
//     return [...cardValues, ...cardValues];
// }

// // Shuffle the cards
// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// }

// // Flip the card
// function flipCard() {
//     if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
//         this.classList.add('flipped');
//         flippedCards.push(this);

//         if (flippedCards.length === 2) {
//             checkMatch();
//         }
//     }
// }

// // Check for a match
// function checkMatch() {
//     const [firstCard, secondCard] = flippedCards;
//     if (firstCard.dataset.value === secondCard.dataset.value) {
//         matches += 1;
//         flippedCards = [];
//         if (matches === cards.length / 2) {
//             setTimeout(nextLevel, 1000);
//         }
//     } else {
//         setTimeout(() => {
//             firstCard.classList.remove('flipped');
//             secondCard.classList.remove('flipped');
//             flippedCards = [];
//         }, 1000);
//     }
// }

// // Proceed to the next level
// function nextLevel() {
//     level += 1;
//     // Save the current level to localStorage
//     localStorage.setItem('memoryGameLevel', level);
//     initGame();
// }

// // Restart the game
// restartButton.addEventListener('click', () => {
//     level = 1;
//     // Clear the saved level from localStorage
//     localStorage.removeItem('memoryGameLevel');
//     initGame();
// });

// // Start the game for the first time
// initGame();




// // ***************************************************************

//   SECOND METHODS: MORE OPTIMISED:




// // Cached DOM elements to avoid multiple lookups
// const gameBoard = document.getElementById('gameBoard');
// const restartButton = document.getElementById('restartButton');
// const levelIndicator = document.getElementById('level');

// // Variables for game state
// let cards = [];
// let flippedCards = [];
// let matches = 0;
// let level = 1;
// let isProcessing = false; // To prevent multiple flips during processing

// // Initialize the game
// function initGame() {
//     // Retrieve saved level from localStorage or set to 1
//     level = parseInt(localStorage.getItem('memoryGameLevel'), 10) || 1;
//     matches = 0;
//     flippedCards = [];
//     cards = shuffle(generateCards(level));

//     // Clear the game board and set up the grid layout
//     gameBoard.innerHTML = '';
//     const gridSize = Math.ceil(Math.sqrt(cards.length));
//     gameBoard.style.gridTemplateColumns = `repeat(${gridSize}, 100px)`;
//     levelIndicator.textContent = level;

//     // Generate the card elements
//     cards.forEach(createCardElement);
// }

// // Generate cards based on the level
// function generateCards(level) {
//     const cardValues = 'ABCDEFGH'.slice(0, level * 2);
//     return [...cardValues, ...cardValues];
// }

// // Shuffle the cards using Fisher-Yates algorithm
// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// }

// // Create card elements and append them to the game board
// function createCardElement(card) {
//     const cardElement = document.createElement('div');
//     cardElement.classList.add('card');
//     cardElement.dataset.value = card;

//     const cardInner = document.createElement('div');
//     cardInner.classList.add('card-inner');

//     const cardFront = document.createElement('div');
//     cardFront.classList.add('card-front');
//     cardFront.textContent = '?';

//     const cardBack = document.createElement('div');
//     cardBack.classList.add('card-back');
//     cardBack.textContent = card;

//     cardInner.appendChild(cardFront);
//     cardInner.appendChild(cardBack);
//     cardElement.appendChild(cardInner);

//     // Attach event listener directly to each card element
//     cardElement.addEventListener('click', () => flipCard(cardElement));
//     gameBoard.appendChild(cardElement);
// }

// // Flip the card and check for a match
// function flipCard(cardElement) {
//     if (isProcessing || cardElement.classList.contains('flipped') || flippedCards.length >= 2) return;

//     cardElement.classList.add('flipped');
//     flippedCards.push(cardElement);

//     if (flippedCards.length === 2) {
//         isProcessing = true;
//         setTimeout(checkMatch, 600); // Small delay to allow animation
//     }
// }

// // Check for a match between the two flipped cards
// function checkMatch() {
//     const [firstCard, secondCard] = flippedCards;
//     if (firstCard.dataset.value === secondCard.dataset.value) {
//         matches += 1;
//         if (matches === cards.length / 2) {
//             setTimeout(nextLevel, 1000);
//         }
//     } else {
//         firstCard.classList.remove('flipped');
//         secondCard.classList.remove('flipped');
//     }
//     flippedCards = [];
//     isProcessing = false;
// }

// // Proceed to the next level
// function nextLevel() {
//     level += 1;
//     localStorage.setItem('memoryGameLevel', level);
//     initGame();
// }

// // Restart the game
// restartButton.addEventListener('click', () => {
//     level = 1;
//     localStorage.removeItem('memoryGameLevel');
//     initGame();
// });

// // Start the game for the first time
// initGame();




// **************************************************************



const gameBoard = document.getElementById('gameBoard');
const restartButton = document.getElementById('restartButton');
const levelIndicator = document.getElementById('level');

// Variables for game state
let cards = [];
let flippedCards = [];
let matches = 0;
let level = 1;
let isProcessing = false;


function initGame() {
    level = parseInt(localStorage.getItem('memoryGameLevel'), 10) || 1

    matches = 0
    flippedCards = []
    cards = shuffle(generateCards(level))

    gameBoard.innerHTML = ''

    const gridSize = Math.ceil(Math.sqrt(cards.length))

    gameBoard.style.gridTemplateColumns = `repeat(${gridSize}, 100px)`
    levelIndicator.textContent = level

    cards.forEach(createCardElement)
}

function generateCards(level) {
    const cardValues = 'ABCDEFGH'.slice(0, level * 2)
    return [...cardValues, ...cardValues]
}


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createCardElement(card) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.dataset.value = card;

    const cardInner = document.createElement('div');
    cardInner.classList.add('card-inner');

    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front');
    cardFront.textContent = '?';

    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');
    cardBack.textContent = card;

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    cardElement.appendChild(cardInner);

    // Attach event listener directly to each card element
    cardElement.addEventListener('click', () => flipCard(cardElement));
    gameBoard.appendChild(cardElement);
}

function flipCard(cardElement) {
    if (isProcessing || cardElement.classList.add('flipped') || flippedCards.length >= 2) return

    cardElement.classList.add('flipped')
    flippedCards.push(cardElement)

    if (flippedCards.length === 2) {
        isProcessing = true
        setTimeout(checkMatch, 600)
    }
}


function checkMatch() {
    const [firstCard, secondCard] = flippedCards

    if (firstCard.dataset.value === secondCard.dataset.value) {
        matches++

        if (matches === cards.length / 2) {
            setTimeout(nextLevel, 1000)
        }

    }
    else {
        firstCard.classList.remove('flipped')
        secondCard.classList.remove('flipped')
    }

    flippedCards = []
    isProcessing = false
}

function nextLevel() {
    level++
    localStorage.setItem('memoryGameLevel', level)
    initGame()
}


restartButton.addEventListener('click', () => {
    level = 1
    localStorage.removeItem('memoryGameLevel')
    initGame()
})

initGame()