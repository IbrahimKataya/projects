const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const amPm = document.getElementById("am-pm");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let AP = "AM";
    
    if(h>12){
        h = h-12;
        amPm = "PM"
    }

    h = h<10 ? "0" : h;
    m = m<10 ? "0" : m;
    m = m<10 ? "0" : m;

    hour.innerText = h;
    minute.innerText = m;
    second.innerText = s;
    amPm.innerText = AP;
    
    setTimeout(()=>{
        updateClock();
    },1000)
}

updateClock();