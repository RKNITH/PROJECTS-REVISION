// const eventTime = document.getElementById('event-time')
// const hour = document.getElementById('hour')
// const min = document.getElementById('min')
// const sec = document.getElementById('sec')
// const start = document.getElementById('start')
// const pause = document.getElementById('pause')
// const restart = document.getElementById('restart')

// let timerId;

// function displayTime(hours, mins, seconds) {
//     hour.innerHTML = hours.toString().padStart(2, '0')
//     min.innerHTML = mins.toString().padStart(2, '0')
//     sec.innerHTML = seconds.toString().padStart(2, '0')
// }

// start.addEventListener('click', () => {
//     let timeValue = parseFloat(eventTime.value)

//     if (isNaN(timeValue) || timeValue <= 0) {
//         alert('please enter valid time in seconds')
//         return
//     }

//     let hours = Math.floor(timeValue / 60 / 60)
//     let mins = Math.floor(timeValue / 60 / 60)
//     let seconds = Math.floor(timeValue / 60 / 60)

//     displayTime(hours, mins, seconds)

//     timerId = setInterval(() => {
//         timeValue--
//         if (timeValue < 0) {
//             clearInterval(timerId)
//             alert('TIMES UP')
//             return
//         }

//         hours = Math.floor(timeValue / 60 / 60)
//         minutes = Math.floor((timeValue % 3600) / 60)
//         seconds = Math.floor(timeValue % 60)

//         displayTime(hours, minutes, seconds)

//     }, 1000)
// })

// pause.addEventListener('click', () => {
//     clearInterval(intervalId) // Stop the countdown
// })

// restart.addEventListener('click', () => {
//     clearInterval(intervalId) // Stop the countdown
//     hour.innerHTML = "00"
//     min.innerHTML = "00"
//     sec.innerHTML = "00"
//     eventTime.value = ""
// })









// ************************************************************
// const eventTime = document.getElementById('event-time')
// const hour = document.getElementById('hour')
// const min = document.getElementById('min')
// const sec = document.getElementById('sec')
// const start = document.getElementById('start')
// const pause = document.getElementById('pause')
// const restart = document.getElementById('restart')


// let timerId

// const formateTime = (time) => {
//     return time < 10 ? `0${time}` : `${time}`
// }

// function displayTime(time) {
//     let secs = Math.floor(time % 60)
//     let mins = Math.floor(time / 60)
//     let hours = Math.floor(time / 60 / 60)

//     hour.innerHTML = (formateTime(hours))
//     min.innerHTML = (formateTime(mins))
//     sec.innerHTML = (formateTime(secs))
// }



// start.addEventListener('click', () => {
//     let timerValue = eventTime.value
//     displayTime(timerValue)
//     if (isNaN(timerValue) || timerValue <= 0) {
//         alert('please enter valid timer value')
//         return
//     }
//     timerId = setInterval(() => {
//         timerValue--
//         if (timerValue < 0) {
//             alert('TIMES UP')
//             clearInterval(timerId)
//         }
//         displayTime(timerValue)
//     }, 1000)
// })

// pause.addEventListener('click', () => {
//     clearInterval(timerId)
// })

// restart.addEventListener('click', () => {
//     clearInterval(timerId) // Stop the countdown
//     hour.innerHTML = "00"
//     min.innerHTML = "00"
//     sec.innerHTML = "00"
//     eventTime.value = ""
// })


// **************************************************************


// const eventTime = document.getElementById('event-time')
// const hour = document.getElementById('hour')
// const min = document.getElementById('min')
// const sec = document.getElementById('sec')
// const start = document.getElementById('start')
// const pause = document.getElementById('pause')
// const restart = document.getElementById('restart')


// let timerId

// const formateTime = (time) => {
//     return time < 10 ? `0${time}` : `${time}`
// }



// function displayTime(time) {
//     let hours = Math.floor(time / 60 / 60)
//     let minutes = Math.floor(time / 60)
//     let seconds = Math.floor(time % 60)

//     hour.innerHTML = formateTime(hours)
//     min.innerHTML = formateTime(minutes)
//     sec.innerHTML = formateTime(seconds)

// }

// start.addEventListener('click', () => {
//     let currentTime = eventTime.value.trim()
//     displayTime(currentTime)

//     if (isNaN(currentTime) || currentTime < 0) {
//         alert('please add valid time')
//         return
//     }
//     timerId = setInterval(() => {
//         currentTime--
//         if (currentTime < 0) {
//             alert('Times Up')
//             clearInterval(timerId)
//         }
//         else {
//             displayTime(currentTime)
//         }


//     }, 1000)


// })

// pause.addEventListener('click', () => {
//     clearInterval(timerId)
// })

// restart.addEventListener('click', () => {
//     clearInterval(timerId)
//     timerId = null
//     displayTime(0)
//     eventTime.value = ''

// })


// ***************************************************************

// const eventTime = document.getElementById('event-time')
// const hour = document.getElementById('hour')
// const min = document.getElementById('min')
// const sec = document.getElementById('sec')
// const start = document.getElementById('start')
// const pause = document.getElementById('pause')
// const restart = document.getElementById('restart')


// let timerId = null

// const formateTime = (time) => {
//     return time < 10 ? `0${time}` : `${time}`
// }




// const displayTime = (time) => {
//     let hrs = Math.floor(time / 60 / 60)
//     let mins = Math.floor(time / 60)
//     let secs = Math.floor(time % 60)

//     hour.innerHTML = formateTime(hrs)
//     min.innerHTML = formateTime(mins)
//     sec.innerHTML = formateTime(secs)

// }

// let timerValue = 0
// start.addEventListener('click', () => {
//     timerValue = eventTime.value.trim()

//     displayTime(timerValue)

//     if (isNaN(timerValue) || timerValue < 0) {
//         alert('please add valid time')
//         return
//     }
//     if (!timerId) {
//         timerId = setInterval(() => {
//             displayTime(timerValue)
//             timerValue--
//             displayTime(timerValue)
//             if (timerValue < 0) {
//                 alert('TIMES UP')
//                 clearInterval(timerValue)
//                 timerId = null
//             }

//         }, 1000)
//     }



// })

// pause.addEventListener('click', () => {
//     if (timerId) {
//         clearInterval(timerId)
//         timerId = null
//     }
// })

// restart.addEventListener('click', () => {
//     clearInterval(timerId)
//     timerId = null
//     displayTime(0)
//     eventTime.value = ''

// })



// Elements for displaying the time and controlling the timer
const eventTime = document.getElementById('event-time');
const hour = document.getElementById('hour');
const min = document.getElementById('min');
const sec = document.getElementById('sec');
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const restart = document.getElementById('restart');

let timerId = null;  // Holds the ID of the interval timer
let timerValue = 0;  // Holds the remaining time in seconds

// Formats the time to ensure two digits (e.g., "09" instead of "9")
const formatTime = (time) => {
    return time < 10 ? `0${time}` : `${time}`;
};

// Updates the display with the current hours, minutes, and seconds
const displayTime = (time) => {
    let hrs = Math.floor(time / 60 / 60);  // Calculate hours
    let mins = Math.floor((time / 60) % 60);  // Calculate minutes
    let secs = Math.floor(time % 60);  // Calculate seconds

    hour.innerHTML = formatTime(hrs);
    min.innerHTML = formatTime(mins);
    sec.innerHTML = formatTime(secs);
};

// Start button click event
start.addEventListener('click', () => {
    const inputTime = parseInt(eventTime.value.trim());  // Get the time from the input

    // Check if the input is a valid number
    if (isNaN(inputTime) || inputTime < 0) {
        alert('Please add valid time');
        return;
    }

    // Only start the timer if it's not already running
    if (!timerId) {
        // Set timerValue to the input time if it's the first start
        if (timerValue === 0) {
            timerValue = inputTime;
        }

        displayTime(timerValue);  // Show the initial time

        // Start the timer
        timerId = setInterval(() => {
            timerValue--;  // Decrement the timer value
            displayTime(timerValue);  // Update the display

            if (timerValue <= 0) {  // If the timer reaches zero
                alert('TIMES UP');
                clearInterval(timerId);  // Stop the timer
                timerId = null;
            }
        }, 1000);  // Run this every second
    }
});

// Pause button click event
pause.addEventListener('click', () => {
    if (timerId) {
        clearInterval(timerId);  // Stop the timer
        timerId = null;
    }
});

// Restart button click event
restart.addEventListener('click', () => {
    clearInterval(timerId);  // Stop the timer
    timerId = null;
    timerValue = 0;  // Reset the timer value
    displayTime(0);  // Reset the display
    eventTime.value = '';  // Clear the input
});
