// APP STATE -- values that change through the lifetime of the program.
// LIKE VARIABLES

//set variables
let seconds = 0
let minutes = 0
let hours = 0

// DOM SELECTORS
const secondHand = document.getElementById('second')
const minuteHand = document.getElementById('minute')
const hourHand = document.getElementById('hour')

// Functions
function secondRotation(secs) {
    return (secs / 60) * 360
}
function minuteRotation(mins) {
    return (mins / 60) * 360
}
function hourRotation(hrs) {
    return (hrs / 12) * 360
}
function clock() {
    // increment seconds value by 1
    seconds++
    // if seconds is greater than or equal to 60
    if (seconds >= 60) {
        seconds = 0
        minutes++
    } if (minutes >= 60) {
        minutes = 0
        hours++
    } if (hours >= 12) {
        hours = 0
    }   secondHand.style.transform = 'rotate(' + secondRotation(seconds) + 'deg)'
        minuteHand.style.transform = 'rotate(' + minuteRotation(minutes) + 'deg)'
        hourHand.style.transform = 'rotate(' + hourRotation(hours) + 'deg)'
        // set seconds to 0 and increment minute by 1
    // if minutes is greater than or equal to 60
            // set minutes to 0 and increment hrs by 1
    // if hrs is greater than 12
        // reset hrs to 0
}

setInterval(clock, 1000)























// function setDate() {
//     const timeNow = new Date();


// const seconds = timeNow.getSeconds();
// let minutes = timeNow.getMinutes();
// let hour = timeNow.getHours();

// let secondsDegree = (seconds / 60) * 360 
// let minutesDegree = ((minutes / 60) * 360) + ((seconds/60) * 360) 
// let hourDegree = ((hour / 12) * 360) + ((minutes / 60) * 360) + ((seconds/60) *360) 

// secondArm.style.transform = "rotate(" + secondsDegree + "deg)"
// minuteArm.style.transform = "rotate(" + minutesDegree + "deg)"
// hourArm.style.transform = "rotate(" + hourDegree + "deg)"
// }
// setInterval(setDate, 0)
// setDate();


// // function rotateMinuteArm() {
// //     minuteArm.style.transform = "rotate(" + value2*6 + "deg)"
// //     value2 ++
// // }

// // function rotateHourArm() {
// //     hourArm.style.transform = "rotate(" + value3*6 + "deg)"
// //     value3 ++
// // }