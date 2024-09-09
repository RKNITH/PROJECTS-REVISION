// const header = document.getElementById('header')
// const min = document.getElementById('min')
// const sec = document.getElementById('sec')
// const start = document.getElementById('start')
// const restart = document.getElementById('restart')
// const pause = document.getElementById('pause')
// const round = document.getElementById('round')

// const WORKING_TIME = 6
// const BREAKING_TIME = 5

// let workingTime = WORKING_TIME
// let breakTime = BREAKING_TIME

// let intervalId;
// let isWorking = true
// let rounds = 0



// function formateTime(time) {
//     return time < 10 ? `0${time}` : time

// }


// function displayTime(workingTime) {
//     let minutes = Math.floor(workingTime / 60)
//     let seconds = Math.floor(workingTime % 60)

//     min.innerHTML = formateTime(minutes)
//     sec.innerHTML = formateTime(seconds)

// }
// displayTime(workingTime)


// function startTimer() {
//     header.innerHTML = 'Working Time'
//     if (!intervalId) {
//         intervalId = setInterval(() => {
//             if (isWorking) {
//                 if (workingTime >= 0) {
//                     displayTime(workingTime)
//                     workingTime--
//                 }
//                 else {
//                     header.innerHTML = 'Break Time'
//                     workingTime = WORKING_TIME
//                     isWorking = false
//                 }
//             } else {
//                 if (breakTime >= 0) {
//                     displayTime(breakTime)
//                     breakTime--
//                 }
//                 else {
//                     header.innerHTML = 'Work Time'
//                     workingTime = BREAKING_TIME
//                     isWorking = true

//                     rounds++
//                     round.innerHTML = `you have completed ${rounds}`

//                 }
//             }

//         }, 1000)
//     }


// }

// function pauseTimer() {
//     if (intervalId) {
//         clearInterval(intervalId)
//         header.innerHTML = 'PAUSED'
//         intervalId = !intervalId

//     }

// }

// function restartTimer() {
//     if (intervalId) {
//         clearInterval(intervalId)
//         header.innerHTML = 'POMODORO'
//         let timeValue = 0
//         displayTime(timeValue)
//         intervalId = !intervalId
//         workingTime = WORKING_TIME
//         breakTime = BREAKING_TIME

//     }

// }

// restart.addEventListener('click', restartTimer)
// pause.addEventListener('click', pauseTimer)
// start.addEventListener('click', startTimer)


// ************************************************************

// const header = document.getElementById('header')
// const min = document.getElementById('min')
// const sec = document.getElementById('sec')
// const start = document.getElementById('start')
// const restart = document.getElementById('restart')
// const pause = document.getElementById('pause')
// const round = document.getElementById('round')

// const WORKING_TIME = 6
// const BREAKING_TIME = 5

// let workingTime = WORKING_TIME
// let breakTime = BREAKING_TIME

// let intervalId;
// let isWorking = true
// let rounds = 0

// const formateTime = (time) => {
//     return time < 10 ? `0${time}` : time
// }

// function displayTime(workingTime) {
//     let minute = Math.floor(workingTime / 60)
//     let second = Math.floor(workingTime % 60)

//     min.innerHTML = formateTime(minute)
//     sec.innerHTML = (formateTime(second))
// }
// displayTime(workingTime)

// function startTimer() {
//     header.innerHTML = 'Working Time'
//     if (!intervalId) {
//         intervalId = setInterval(() => {
//             if (isWorking) {
//                 if (workingTime >= 0) {
//                     displayTime(workingTime)
//                     workingTime--
//                 }
//                 else {
//                     header.innerHTML = 'Break Time'
//                     workingTime = WORKING_TIME
//                     isWorking = false
//                 }
//             }
//             else {
//                 if (breakTime >= 0) {
//                     displayTime(breakTime)
//                     breakTime--
//                 }
//                 else {
//                     header.innerHTML = 'Work Time'
//                     breakTime = BREAKING_TIME
//                     isWorking = false

//                     rounds++
//                     round.innerHTML = `you have completed ${rounds} rounds`
//                 }
//             }

//         }, 1000)
//     }


// }



// function pauseTimer() {
//     if (intervalId) {
//         clearInterval(intervalId)
//         header.innerHTML = 'Paused'
//         intervalId = !intervalId
//     }

// }


// function restartTimer() {
//     if (intervalId) {
//         clearInterval(intervalId)
//         header.innerHTML = 'POMODORO'
//         let timeValue = 0
//         displayTime(timeValue)
//         intervalId = !intervalId
//         workingTime = WORKING_TIME
//         breakTime = BREAKING_TIME
//     }

// }



// start.addEventListener('click', startTimer)
// restart.addEventListener('click', restartTimer)
// pause.addEventListener('click', pauseTimer)

// *****************************************************************************

// const header = document.getElementById('header')
// const min = document.getElementById('min')
// const sec = document.getElementById('sec')
// const start = document.getElementById('start')
// const restart = document.getElementById('restart')
// const pause = document.getElementById('pause')
// const round = document.getElementById('round')

// const WORKING_TIME = 6
// const BREAKING_TIME = 5

// let workingTime = WORKING_TIME
// let breakTime = BREAKING_TIME

// let intervalId;
// let isWorking = true
// let rounds = 0

// const formateTime = (time) => {
//     return time < 10 ? `0${time}` : `${time}`
// }

// const displayTime = (workingTime) => {
//     let mins = Math.floor(workingTime / 60)
//     let secs = Math.floor(workingTime % 60)

//     min.innerHTML = formateTime(mins)
//     sec.innerHTML = formateTime(secs)


// }
// displayTime(workingTime)

// const startTimer = () => {
//     header.innerHTML = 'Working Time'
//     if (!intervalId) {
//         intervalId = setInterval(() => {
//             if (isWorking) {
//                 if (workingTime >= 0) {
//                     displayTime(workingTime)
//                     workingTime--
//                 }
//                 else {
//                     header.innerHTML = 'Break Time'
//                     isWorking = false
//                     workingTime = WORKING_TIME
//                 }

//             }
//             else {
//                 if (breakTime >= 0) {
//                     displayTime(breakTime)
//                     breakTime--
//                 }
//                 else {
//                     header.innerHTML = 'Work Time'
//                     isWorking = false
//                     breakTime = BREAKING_TIME

//                     rounds++
//                     round.innerHTML = `You have completed ${rounds}`

//                 }

//             }

//         }, 1000)
//     }





// }

// const restartTimer = () => {
//     if (intervalId) {
//         clearInterval(intervalId)
//         workingTime = WORKING_TIME
//         breakTime = BREAKING_TIME
//         header.innerHTML = 'Pomodoro'
//         displayTime(workingTime)
//         rounds = 0
//         intervalId = !intervalId
//     }


// }

// const pauseTimer = () => {
//     if (intervalId) {
//         clearInterval(intervalId)
//         intervalId = !intervalId
//     }

// }


// start.addEventListener('click', startTimer)
// restart.addEventListener('click', restartTimer)
// pause.addEventListener('click', pauseTimer)



// **************************************************************************************

// const header = document.getElementById('header')
// const min = document.getElementById('min')
// const sec = document.getElementById('sec')
// const start = document.getElementById('start')
// const restart = document.getElementById('restart')
// const pause = document.getElementById('pause')
// const round = document.getElementById('round')

// const WORKING_TIME = 6
// const BREAKING_TIME = 5

// let workingTime = WORKING_TIME
// let breakTime = BREAKING_TIME

// let intervalId;
// let isWorking = true
// let rounds = 0

// const formateTime = (time) => {
//     return time < 10 ? `0${time}` : `${time}`
// }

// const displayTime = (time) => {
//     let minutes = Math.floor(time / 60)
//     let seconds = Math.floor(time % 60)
//     min.innerHTML = formateTime(minutes)
//     sec.innerHTML = formateTime(seconds)
// }
// displayTime(workingTime)

// const startTimer = () => {
//     if (!intervalId) {
//         intervalId = setInterval(() => {
//             if (isWorking) {
//                 if (workingTime >= 0) {
//                     header.innerHTML = 'Work'
//                     displayTime(workingTime)
//                     workingTime--


//                 }
//                 else {
//                     workingTime = WORKING_TIME
//                     header.innerHTML = 'Break'
//                     isWorking = !isWorking
//                 }
//             }
//             else {
//                 if (breakTime >= 0) {
//                     header.innerHTML = 'Break'
//                     displayTime(breakTime)
//                     breakTime--
//                 }
//                 else {
//                     breakTime = BREAKING_TIME
//                     header.innerHTML = 'Work'
//                     isWorking = !isWorking
//                     rounds++
//                     round.innerHTML = `You have competed ${rounds} rounds`

//                 }
//             }

//         }, 1000)
//     }
// }


// const restartTimer = () => {
//     if (intervalId) {
//         clearInterval(intervalId)
//         workingTime = WORKING_TIME
//         breakTime = BREAKING_TIME
//         header.innerHTML = 'Pomodoro'
//         displayTime(workingTime)
//         rounds = 0
//         intervalId = !intervalId
//     }


// }

// const pauseTimer = () => {
//     if (intervalId) {
//         clearInterval(intervalId)
//         intervalId = !intervalId
//     }

// }


// start.addEventListener('click', startTimer)
// restart.addEventListener('click', restartTimer)
// pause.addEventListener('click', pauseTimer)



// *****************************************************************


// const header = document.getElementById('header')
// const min = document.getElementById('min')
// const sec = document.getElementById('sec')
// const start = document.getElementById('start')
// const restart = document.getElementById('restart')
// const pause = document.getElementById('pause')
// const round = document.getElementById('round')

// const WORKING_TIME = 6
// const BREAKING_TIME = 5

// let workingTime = WORKING_TIME
// let breakTime = BREAKING_TIME

// let intervalId
// let isWorking = true
// let rounds = 0

// const formateTime = (time) => {
//     return time < 10 ? `0${time}` : `${time}`
// }


// const displayTime = (time) => {
//     min.innerHTML = formateTime(Math.floor(time / 60))
//     sec.innerHTML = formateTime(Math.floor(time % 60))

// }
// displayTime(workingTime)


// const startTimer = () => {
//     if (!intervalId) {
//         intervalId = setInterval(() => {
//             if (isWorking) {
//                 if (workingTime >= 0) {
//                     displayTime(workingTime)
//                     workingTime--
//                     header.innerHTML = 'Work'
//                 }
//                 else {
//                     workingTime = WORKING_TIME
//                     isWorking = !isWorking
//                     header.innerHTML = 'Break'
//                 }
//             } else {
//                 if (breakTime >= 0) {
//                     displayTime(breakTime)
//                     breakTime--
//                     header.innerHTML = 'Break'
//                 }
//                 else {
//                     breakTime = BREAKING_TIME
//                     isWorking = !isWorking
//                     header.innerHTML = 'Work'

//                     rounds++
//                     round.innerHTML = `You have completed ${rounds} round.`
//                 }
//             }

//         }, 1000)
//     }
// }



// const restartTimer = () => {
//     if (intervalId) {
//         clearInterval(intervalId)
//         workingTime = WORKING_TIME
//         breakTime = BREAKING_TIME
//         header.innerHTML = 'Pomodoro'
//         displayTime(workingTime)
//         rounds = 0
//         intervalId = !intervalId
//     }


// }

// const pauseTimer = () => {
//     if (intervalId) {
//         clearInterval(intervalId)
//         intervalId = !intervalId
//     }

// }


// start.addEventListener('click', startTimer)
// pause.addEventListener('click', pauseTimer)
// restart.addEventListener('click', restartTimer)




// *************************************************************************************************




// const header = document.getElementById('header')
// const min = document.getElementById('min')
// const sec = document.getElementById('sec')
// const start = document.getElementById('start')
// const restart = document.getElementById('restart')
// const pause = document.getElementById('pause')
// const round = document.getElementById('round')

// const WORKING_TIME = 6
// const BREAKING_TIME = 5

// let workingTime = WORKING_TIME
// let breakTime = BREAKING_TIME

// let intervalId = null
// let isWorking = true
// let rounds = 0


// const formateTime = (time) => {
//     return time < 10 ? `0${time}` : `${time}`
// }

// const displayTime = (time) => {
//     let minutes = Math.floor(time / 60)
//     let seconds = Math.floor(time % 60)

//     min.innerHTML = formateTime(minutes)
//     sec.innerHTML = formateTime(seconds)

// }

// displayTime(workingTime)


// const startTime = () => {
//     if (!intervalId) {
//         intervalId = setInterval(() => {

//             if (isWorking) {
//                 if (workingTime >= 0) {
//                     displayTime(workingTime)
//                     workingTime--
//                     header.innerHTML = 'Work'
//                 } else {
//                     header.innerHTML = 'Break'
//                     workingTime = WORKING_TIME
//                     isWorking = false
//                 }
//             }
//             else {
//                 if (breakTime >= 0) {
//                     displayTime(breakTime)
//                     breakTime--
//                     header.innerHTML = 'Break'
//                 }
//                 else {
//                     header.innerHTML = 'Work'
//                     breakTime = BREAKING_TIME
//                     rounds++
//                     round.innerHTML = `You have completed ${rounds} rounds`
//                     isWorking = true

//                 }
//             }

//         }, 1000)

//     }


// }

// const pauseTimer = () => {
//     if (intervalId) {
//         clearInterval(intervalId)
//         intervalId = null

//     }

// }

// const restartTimer = () => {
//     clearInterval(intervalId)
//     workingTime = WORKING_TIME
//     breakTime = BREAKING_TIME
//     displayTime(0)
//     intervalId = null
//     header.innerHTML = 'POMODORO'


// }


// start.addEventListener('click', startTime)
// restart.addEventListener('click', restartTimer)
// pause.addEventListener('click', pauseTimer)



// **********************************************************************************************


const header = document.getElementById('header')
const min = document.getElementById('min')
const sec = document.getElementById('sec')
const start = document.getElementById('start')
const restart = document.getElementById('restart')
const pause = document.getElementById('pause')
const round = document.getElementById('round')

const WORKING_TIME = 6
const BREAKING_TIME = 5

let workingTime = WORKING_TIME
let breakTime = BREAKING_TIME

let intervalId = null
let isWorking = true
let rounds = 0


const formateTime = (time) => {
    return time < 10 ? `0${time}` : `${time}`
}

const displayTime = (time) => {
    let minutes = Math.floor(time / 60)
    let seconds = Math.floor(time % 60)

    min.innerHTML = formateTime(minutes)
    sec.innerHTML = formateTime(seconds)

}

displayTime(workingTime)


const startTime = () => {
    if (!intervalId) {
        intervalId = setInterval(() => {
            if (isWorking) {
                if (workingTime >= 0) {
                    header.innerHTML = 'Work'
                    displayTime(workingTime)
                    workingTime--
                }
                else {
                    workingTime = WORKING_TIME
                    header.innerHTML = 'Break'
                    isWorking = false

                }
            }
            else {
                if (breakTime >= 0) {
                    header.innerHTML = 'Break'
                    displayTime(breakTime)
                    breakTime--
                }
                else {
                    breakTime = BREAKING_TIME
                    header.innerHTML = 'Work'
                    isWorking = true
                    rounds++
                    round.innerHTML = `Yopu have completed ${rounds} rounds`
                }
            }

        }, 1000)
    }


}

const pauseTimer = () => {
    if (intervalId) {
        clearInterval(intervalId)
        intervalId = null

    }

}

const restartTimer = () => {
    clearInterval(intervalId)
    workingTime = WORKING_TIME
    breakTime = BREAKING_TIME
    displayTime(0)
    intervalId = null
    header.innerHTML = 'POMODORO'


}


start.addEventListener('click', startTime)
restart.addEventListener('click', restart)
pause.addEventListener('click', pauseTimer)














