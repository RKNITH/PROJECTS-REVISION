// const inp = document.getElementById('inp')
// const range = document.getElementById('range')
// const upper = document.getElementById('upper')
// const lower = document.getElementById('lower')
// const num = document.getElementById('num')
// const symbol = document.getElementById('symbol')
// const value = document.getElementById('value')
// const copy = document.getElementById('copy')
// const generate = document.getElementById('generate')

// const upperLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// const lowerLetter = 'abcdefghijklmnopqrstuvwxyz'
// const number = '1234567890'
// const sym = '@#$%&'

// let passwordLenght = 0
// range.addEventListener('click', () => {
//     value.innerHTML = range.value
//     passwordLenght = value.innerHTML
// })

// function shuffleString(str) {
//     // Convert string to array of characters
//     let arr = str.split('');

//     // Shuffle the array using Fisher-Yates algorithm
//     for (let i = arr.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
//     }

//     // Convert the shuffled array back to a string
//     return arr.join('');
// }

// generate.addEventListener('click', () => {
//     let password = ''

//     if (upper.checked) password += upperLetter
//     if (lower.checked) password += lowerLetter
//     if (num.checked) password += number
//     if (symbol.checked) password += sym

//     password = shuffleString(password)

//     if (password == '') {
//         alert('please checked any of them')
//     }
//     inp.value = password.slice(0, passwordLenght)

// })

// copy.addEventListener('click', () => {
//     let copied = inp
//     if (inp.value != '') {
//         copied.checked()
//         navigator.clipboard.writeText(copied.value);

//         alert('password copied')
//     }


// })









// **************************************************************
// const inp = document.getElementById('inp')
// const range = document.getElementById('range')
// const upper = document.getElementById('upper')
// const lower = document.getElementById('lower')
// const num = document.getElementById('num')
// const symbol = document.getElementById('symbol')
// const value = document.getElementById('value')
// const copy = document.getElementById('copy')
// const generate = document.getElementById('generate')

// const upperLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// const lowerLetter = 'abcdefghijklmnopqrstuvwxyz'
// const number = '1234567890'
// const sym = '@#$%&'

// let passwordLenght = 0

// range.addEventListener('change', () => {
//     value.innerHTML = range.value
//     passwordLenght = range.value
// })


// function shuffleString(str) {
//     // Convert string to array of characters
//     let arr = str.split('');

//     // Shuffle the array using Fisher-Yates algorithm
//     for (let i = arr.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
//     }

//     // Convert the shuffled array back to a string
//     return arr.join('');
// }



// let password = ''
// function generatePassword() {

//     if (upper.checked) password += upperLetter
//     if (lower.checked) password += lowerLetter
//     if (num.checked) password += number
//     if (symbol.checked) password += sym

//     password = shuffleString(password)

//     password = password.substring(0, passwordLenght)

//     return password



// }


// generate.addEventListener('click', () => {
//     if (generatePassword() === '') {
//         alert('please checked any of them')
//     }
//     else {
//         inp.value = generatePassword()
//     }
// })

// copy.addEventListener('click', () => {
//     if (generatePassword() === "=" || inp.value.length == 0) {
//         alert('first generate password')
//     }
//     else {
//         inp.select()
//         navigator.clipboard.writeText(inp.value);
//         alert('password copied')

//     }
// })

// **********************************************************

// const inp = document.getElementById('inp')
// const range = document.getElementById('range')
// const upper = document.getElementById('upper')
// const lower = document.getElementById('lower')
// const num = document.getElementById('num')
// const symbol = document.getElementById('symbol')
// const value = document.getElementById('value')
// const copy = document.getElementById('copy')
// const generate = document.getElementById('generate')

// const upperLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// const lowerLetter = 'abcdefghijklmnopqrstuvwxyz'
// const number = '1234567890'
// const sym = '@#$%&'

// let passwordLenght = 0

// range.addEventListener('change', () => {
//     value.innerHTML = range.value
//     passwordLenght = value.innerHTML
// })

// const shuffleString = (str) => {
//     let arr = str.split('');
//     for (let i = arr.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));
//         // Swap elements arr[i] and arr[j]
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//     return arr.join('');
// }

// // console.log(shuffleString('abcd'));



// let password = ''
// const generatePassword = () => {
//     if (upper.checked) password += upperLetter
//     if (lower.checked) password += lowerLetter
//     if (num.checked) password += number
//     if (symbol.checked) password += sym

//     password = shuffleString(password)
//     password = password.slice(0, passwordLenght)
//     return password

// }




// generate.addEventListener('click', () => {
//     if (generatePassword() === '') {
//         alert('please select any of them')
//         return
//     }
//     else {
//         inp.value = generatePassword()
//     }

// })

// copy.addEventListener('click', () => {
//     if (inp.value.length === 0) {
//         alert('first generate password')
//         return
//     }
//     inp.select()
//     navigator.clipboard.writeText(inp.value)
//     alert('password copied')


// })




// ******************************************************************
// const inp = document.getElementById('inp')
// const range = document.getElementById('range')
// const upper = document.getElementById('upper')
// const lower = document.getElementById('lower')
// const num = document.getElementById('num')
// const symbol = document.getElementById('symbol')
// const value = document.getElementById('value')
// const copy = document.getElementById('copy')
// const generate = document.getElementById('generate')

// const upperLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// const lowerLetter = 'abcdefghijklmnopqrstuvwxyz'
// const number = '1234567890'
// const sym = '@#$%&'

// let passwordLenght = 0

// range.addEventListener('change', () => {
//     value.innerHTML = range.value
//     passwordLenght = range.value
// })

// const shuffleString = (str) => {
//     let arr = str.split('');
//     for (let i = str.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));
//         // Manually swap the elements without destructuring
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     }
//     return arr.join('');
// };

// console.log(shuffleString('ravi'));

// function generatePassword() {
//     let password = ''
//     if (upper.checked) password += upperLetter
//     if (lower.checked) password += lowerLetter
//     if (num.checked) password += number
//     if (symbol.checked) password += sym

//     password = shuffleString(password)
//     password = password.slice(0, passwordLenght)

//     return password
// }

// generate.addEventListener('click', () => {
//     if (generatePassword() === '') {
//         alert('please select any of them')

//     }
//     else {
//         inp.value = generatePassword()
//     }
// })

// copy.addEventListener('click', () => {
//     if (inp.value === '') {
//         alert('first generate password')
//         return
//     }
//     else {
//         inp.select()
//         navigator.clipboard.writeText(inp.value)
//         alert('password copied')

//     }
// })




// ************************************************************


// const inp = document.getElementById('inp')
// const range = document.getElementById('range')
// const upper = document.getElementById('upper')
// const lower = document.getElementById('lower')
// const num = document.getElementById('num')
// const symbol = document.getElementById('symbol')
// const value = document.getElementById('value')
// const copy = document.getElementById('copy')
// const generate = document.getElementById('generate')

// const upperLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// const lowerLetter = 'abcdefghijklmnopqrstuvwxyz'
// const number = '1234567890'
// const sym = '@#$%&'

// let passwordLenght = 0

// range.addEventListener('change', () => {
//     value.innerHTML = range.value
//     passwordLenght = value.innerHTML
// })

// const shuffleString = (str) => {
//     let arr = str.split('')
//     for (let i = arr.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * arr.length) * (i + 1)

//         let temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//     }
//     return arr.join('')
// }

// console.log(shuffleString('ravi'));


// const generatePassword = () => {
//     let password = ''

//     if (upper.checked) password += upperLetter
//     if (lower.checked) password += lowerLetter
//     if (num.checked) password += number
//     if (symbol.checked) password += sym

//     password = shuffleString(password)

//     password = password.slice(0, passwordLenght)

//     return password


// }

// generate.addEventListener('click', () => {
//     if (generatePassword() == '') {
//         alert('please select any of them')

//     }
//     else {
//         inp.value = generatePassword()
//     }
//     alert('hello')

// })




// ***************************************************************
// const inp = document.getElementById('inp')
// const range = document.getElementById('range')
// const upper = document.getElementById('upper')
// const lower = document.getElementById('lower')
// const num = document.getElementById('num')
// const symbol = document.getElementById('symbol')
// const value = document.getElementById('value')
// const copy = document.getElementById('copy')
// const generate = document.getElementById('generate')

// const upperLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// const lowerLetter = 'abcdefghijklmnopqrstuvwxyz'
// const number = '1234567890'
// const sym = '@#$%&'

// let passwordLenght = 0

// range.addEventListener('change', () => {
//     value.innerHTML = range.value
//     passwordLenght = range.value
// })

// const shuffleString = (str) => {
//     let arr = str.split('')
//     for (let i = str.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1))
//         temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp

//     }
//     return arr.join('')
// }
// console.log(shuffleString('ravi'));


// const generatePassword = () => {
//     let password = ''
//     if (upper.checked) password += upperLetter
//     if (lower.checked) password += lowerLetter
//     if (num.checked) password += number
//     if (symbol.checked) password += sym

//     password = shuffleString(password)

//     password = password.slice(0, passwordLenght)

//     return password

// }

// generate.addEventListener('click', () => {
//     if (generatePassword() === '') {
//         alert('please select any of them')
//         return
//     }
//     inp.value = generatePassword()
// })

// copy.addEventListener('click', () => {
//     if (inp.value === '') {
//         alert('first generate password')
//     } else {
//         window.navigator.clipboard.writeText(inp.value)
//         inp.select()
//         alert('password copied')
//     }
// })


// ****************************************************


// const inp = document.getElementById('inp')
// const range = document.getElementById('range')
// const upper = document.getElementById('upper')
// const lower = document.getElementById('lower')
// const num = document.getElementById('num')
// const symbol = document.getElementById('symbol')
// const value = document.getElementById('value')
// const copy = document.getElementById('copy')
// const generate = document.getElementById('generate')

// const upperLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// const lowerLetter = 'abcdefghijklmnopqrstuvwxyz'
// const number = '1234567890'
// const sym = '@#$%&'

// let passwordLenght = 0

// range.addEventListener('change', () => {
//     value.innerHTML = range.value
//     passwordLenght = range.value
// })

// const shuffleString = (str) => {
//     let arr = str.split('')
//     for (let i = str.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1))
//         let temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp

//     }
//     return arr.join('')



// }
// console.log(shuffleString('ravi'));


// const generatePassword = () => {
//     let password = ''
//     if (upper.checked) password += upperLetter
//     if (lower.checked) password += lowerLetter
//     if (num.checked) password += number
//     if (symbol.checked) password += sym

//     password = shuffleString(password)
//     password = password.slice(0, passwordLenght)

//     return password

// }

// generate.addEventListener('click', () => {
//     if (generatePassword() == '') {
//         alert('Choose any of them to generate password')
//         return
//     }
//     inp.value = generatePassword()
// })

// copy.addEventListener('click', () => {
//     if (inp.value === '') {
//         alert('first generate password')
//         return
//     }
//     window.navigator.clipboard.writeText(inp.value)
//     inp.select()
//     alert('password copied')
// })


// *********************************************************************************************************

const inp = document.getElementById('inp')
const range = document.getElementById('range')
const upper = document.getElementById('upper')
const lower = document.getElementById('lower')
const num = document.getElementById('num')
const symbol = document.getElementById('symbol')
const value = document.getElementById('value')
const copy = document.getElementById('copy')
const generate = document.getElementById('generate')

const upperLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerLetter = 'abcdefghijklmnopqrstuvwxyz'
const number = '1234567890'
const sym = '@#$%&'

let passwordLenght = 0

range.addEventListener('change', () => {
    value.innerHTML = range.value
    passwordLenght = range.value
})


const shuffleString = (str) => {
    let arr = str.split('')
    for (let i = str.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))

        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    return arr.join('') // Moved return outside the loop
}

console.log(shuffleString('ravi'));



const generatePassword = () => {
    let password = ''

    if (upper.checked) password += upperLetter
    if (lower.checked) password += lowerLetter
    if (num.checked) password += number
    if (symbol.checked) password += sym

    let pass = shuffleString(password)
    pass = pass.slice(0, passwordLenght)

    return pass

}

generate.addEventListener('click', () => {
    inp.value = ''
    if (generatePassword() === '') {
        alert('please select any of the check box')
        return
    }
    inp.value = generatePassword()
})

copy.addEventListener('click', () => {
    if (inp.value === '') {
        alert('please generate password first')
        return
    }
    window.navigator.clipboard.writeText(inp.value)
    inp.select()
    alert('passwod copied')
})

