const inp = document.getElementById('inp')
const range = document.getElementById('range')
const upper = document.getElementById('upper')
const lower = document.getElementById('lower')
const num = document.getElementById('num')
const symbol = document.getElementById('symbol')
const value = document.getElementById('value')
const hide = document.getElementById('copy')
const generate = document.getElementById('generate')

const upperLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerLetter = 'abcdefghijklmnopqrstuvwxyz'
const number = '1234567890'
const sym = '@#$%&'

let passwordLenght = 0
range.addEventListener('click', () => {
    value.innerHTML = range.value
    passwordLenght = value.innerHTML
})

function shuffleString(str) {
    // Convert string to array of characters
    let arr = str.split('');

    // Shuffle the array using Fisher-Yates algorithm
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    }

    // Convert the shuffled array back to a string
    return arr.join('');
}

generate.addEventListener('click', () => {
    let password = ''

    if (upper.checked) password += upperLetter
    if (lower.checked) password += lowerLetter
    if (num.checked) password += number
    if (symbol.checked) password += sym

    password = shuffleString(password)

    if (password == '') {
        alert('please select any of them')
    }
    inp.value = password.slice(0, passwordLenght)

})

let isPasswordHidden = true;

hide.addEventListener('click', () => {
    if (isPasswordHidden) {
        inp.type = 'text';  // Show the password
        hide.innerHTML = 'Hide';
    } else {
        inp.type = 'password';  // Mask the password
        hide.innerHTML = 'Show';
    }
    isPasswordHidden = !isPasswordHidden;
});



