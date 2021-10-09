function pad(num) {
    let s = "00" + num;
    return s.substr(s.length-2);
}

function displayTime(hour, minute, second){
    let hr = document.getElementById("hour");
    hr.innerText = pad(hour);
    let min = document.getElementById("minute");
    min.innerText = pad(minute);
    let sec = document.getElementById("second");
    sec.innerText = pad(second);
}

function displayTotalTime(seconds){
    let s = seconds % 60;
    let m = Math.floor(s/60);
    let h = Math.floor(m/60);
    m = m % 60;
    displayTime(h,m,s);
}
let timerId;
let total = 0;
let running = false;


function startFunc(){
    if (running) {
        return;
    }
    running = true;
    displayTotalTime(total);

    timerId = setInterval(function(){
        total += 1;
        displayTotalTime(total);
    }, 1000)
}

function stopFunc(){
    running = false;
    clearInterval(timerId);
}

function resetFunc(){
    total = 0;
    displayTotalTime(total);
    stopFunc();
}

let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

displayTotalTime(0);
startBtn.onclick = startFunc;

stopBtn.onclick = stopFunc;

resetBtn.onclick = resetFunc;