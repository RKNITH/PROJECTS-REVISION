// const buttons = document.querySelectorAll('button')
// const input = document.getElementById('inp')

// buttons.forEach((btn) => {
//     inp.value = ''
//     btn.addEventListener('click', () => {
//         if (btn.innerText === 'AC') {
//             inp.value = ""
//         }
//         else if (btn.innerText === 'DEL') {
//             inp.value = inp.value.slice(0, -1)

//         }
//         else if (btn.innerText === '=') {
//             inp.value = inp.value.replace(/÷/g, '/').replace(/✖/g, '*')
//             inp.value = eval(inp.value)
//         }
//         else {
//             inp.value += btn.innerText
//         }
//     })

// })





















// ********************************************************

const inp = document.getElementById('inp')
const buttons = document.querySelectorAll('button')

buttons.forEach(btn => {
    inp.value = ''
    btn.addEventListener('click', () => {

        if (btn.innerHTML === 'AC') {
            inp.value = ''
        }
        else if (btn.innerHTML === 'DEL') {
            inp.value = inp.value.substring(0, inp.value.length - 1)
        }
        else if (btn.innerHTML === "=") {
            inp.value = inp.value.replace(/✖/g, '*').replace(/÷/, '/')
            inp.value = eval(inp.value)
        }
        else {
            inp.value += btn.innerHTML

        }

    })
})











































