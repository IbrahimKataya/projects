const start = document.getElementById("start");
const stopEl = document.getElementById("stop");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");


let interval;
let timeLeft = 1500;

function startTime(){

    clearInterval(interval);
    
    interval = setInterval(() =>{
        timeLeft--;
        updateTime()
        if (timeLeft == 0){
            clearInterval(interval);
            alert("Time is up!");
            timeLeft = 1500;
            updateTime();
        }
    }, 1000);
}

function updateTime(){
    let min = Math.floor(timeLeft / 60);
    let sec = timeLeft % 60;
    let formattedTime = `${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`;

    timer.innerHTML = formattedTime;
}

function stopTime(){
    clearInterval(interval);
}

function resetTime(){
    clearInterval(interval);
    timeLeft = 1500;
    updateTime();
}



start.addEventListener("click",startTime);
stopEl.addEventListener("click",stopTime);
reset.addEventListener("click",resetTime);

