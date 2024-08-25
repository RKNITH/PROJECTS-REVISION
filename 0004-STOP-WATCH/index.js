// const watch = document.getElementById('watch');
// const reset = document.getElementById('reset');
// const start = document.getElementById('start');
// const resume = document.getElementById('resume');
// const pause = document.getElementById('pause');

// let sec = 0;
// let min = 0;
// let hour = 0;

// function formatTime(time) {
//     return time < 10 ? `0${time}` : `${time}`;
// }

// function updateDisplay() {
//     let timer = `${formatTime(hour)} : ${formatTime(min)} : ${formatTime(sec)}`;
//     watch.innerHTML = timer;
// }

// function increaseTime() {
//     sec++;
//     if (sec > 59) {
//         min++;
//         sec = 0;

//         if (min > 59) {
//             hour++;
//             min = 0;
//         }
//     }

//     updateDisplay();
// }

// let timerId = null;

// start.addEventListener('click', () => {
//     if (!timerId) { // Ensure only one timer is running
//         timerId = setInterval(increaseTime, 1000);
//     }
// });

// reset.addEventListener('click', () => {
//     clearInterval(timerId);
//     timerId = null;
//     sec = 0;
//     min = 0;
//     hour = 0;
//     updateDisplay();
// });
// pause.addEventListener('click', () => {
//     if (timerId) {
//         clearInterval(timerId); // Pause the timer
//         timerId = null;
//     }
// });

// resume.addEventListener('click', () => {
//     if (!timerId) { // Ensure the timer resumes if it was paused
//         timerId = setInterval(increaseTime, 1000);
//     }
// });

// // Initialize display
// updateDisplay();



// **********************************************************

const watch = document.getElementById('watch');
const reset = document.getElementById('reset');
const start = document.getElementById('start');
const resume = document.getElementById('resume');
const pause = document.getElementById('pause');

let seconds = 0
let minutes = 0
let hours = 0
let timerId = null

const formateTime = (time) => {
    return time < 10 ? `0${time}` : `${time}`
}

function displayTime() {
    let timer = `${formateTime(hours)}` + ":" + `${formateTime(minutes)}` + ":" + `${formateTime(seconds)}`
    watch.innerHTML = timer
}


function increaseTime() {
    seconds++
    if (seconds > 59) {
        minutes++;
        seconds = 0
        if (minutes > 59) {
            hours++
            minutes = 0
        }
    }
    displayTime()
}

start.addEventListener('click', () => {
    if (!timerId) {
        timerId = setInterval(increaseTime, 1000)
    }

})


reset.addEventListener('click', () => {
    clearInterval(timerId)
    timerId = null
    seconds = 0
    minutes = 0
    hours = 0

    displayTime()

})

pause.addEventListener('click', () => {
    if (timerId) {
        clearInterval(timerId)
        timerId = null
    }

})

resume.addEventListener('click', () => {
    if (!timerId) {
        setInterval(increaseTime, 1000)
        timerId = null
    }
})






displayTime()








