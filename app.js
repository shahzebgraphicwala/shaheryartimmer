var millisec = 0
var sec = 0
var min = 0
var displayinp = document.getElementById('displayinp')
var displaymili = document.getElementById('displaymiliSec')
var displaysec = document.getElementById('displaySec')
var displaymin = document.getElementById('displayMin')

function timer() {
    millisec++
    displaymili.innerHTML = millisec
    if (millisec == 100) {
        sec++
        displaysec.innerHTML = sec
        millisec = 0
        if (sec == 60) {
            min++
            sec = 0
            displaymin.innerHTML = min 
        }
    }
   
}

var interval;

function start() {
    interval = setInterval(timer, 11);
    
}
function pause() {
    clearInterval(interval)
}
function reset() {
    pause()
    millisec = 0
    sec = 0
    min = 0
    displaymili.innerHTML = millisec
    displaysec.innerHTML = sec
    displaymin.innerHTML = min
}



// function foo(){
//     console.log(1)
// }

// setTimeout(foo,1000)
// setInterval(foo,1000)