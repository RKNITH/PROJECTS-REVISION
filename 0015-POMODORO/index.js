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

let intervalId;
let isWorking = true
let rounds = 0



function formateTime(time) {
    return time < 10 ? `0${time}` : time

}


function displayTime(workingTime) {
    let minutes = Math.floor(workingTime / 60)
    let seconds = Math.floor(workingTime % 60)

    min.innerHTML = formateTime(minutes)
    sec.innerHTML = formateTime(seconds)

}
displayTime(workingTime)


function startTimer() {
    header.innerHTML = 'Working Time'
    if (!intervalId) {
        intervalId = setInterval(() => {
            if (isWorking) {
                if (workingTime >= 0) {
                    displayTime(workingTime)
                    workingTime--
                }
                else {
                    header.innerHTML = 'Break Time'
                    workingTime = WORKING_TIME
                    isWorking = false
                }
            } else {
                if (breakTime >= 0) {
                    displayTime(breakTime)
                    breakTime--
                }
                else {
                    header.innerHTML = 'Work Time'
                    workingTime = BREAKING_TIME
                    isWorking = true

                    rounds++
                    round.innerHTML = `you have completed ${rounds}`

                }
            }

        }, 1000)
    }


}

function pauseTimer() {
    if (intervalId) {
        clearInterval(intervalId)
        header.innerHTML = 'PAUSED'
        intervalId = !intervalId

    }

}

function restartTimer() {
    if (intervalId) {
        clearInterval(intervalId)
        header.innerHTML = 'POMODORO'
        let timeValue = 0
        displayTime(timeValue)
        intervalId = !intervalId
        workingTime = WORKING_TIME
        breakTime = BREAKING_TIME

    }

}

restart.addEventListener('click', restartTimer)





pause.addEventListener('click', pauseTimer)
start.addEventListener('click', startTimer)