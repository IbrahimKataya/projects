const watch = document.querySelector("#watch");
let timer;
let milliseconds = 0;


function startWatch(){
    watch.classList.remove("paused");
    clearInterval(timer);

    timer = setInterval(()=>{

        milliseconds +=10;

        let dateTimer = new Date(milliseconds);
        watch.innerHTML = 
        ("0" + dateTimer.getUTCHours()).slice(-2) + ":" +
        ("0" + dateTimer.getUTCMinutes()).slice(-2) + ":"  +
        ("0" + dateTimer.getUTCSeconds()).slice(-2) + ":"  +
        ("0" + dateTimer.getUTCMilliseconds()).slice(-3,-1); 
    
    }, 10);

}


function pauseWatch(){
    watch.classList.add("paused");
    clearInterval(timer);

}


function resetWatch(){
    watch.classList.remove("paused");
    clearInterval(timer);
    milliseconds = 0;
    watch.innerHTML = "00:00:00:00";

}

document.addEventListener("click",(e)=>{
    const e1 = e.target;
    if(e1.id === "start") startWatch();
    if(e1.id === "pause") pauseWatch();
    if(e1.id === "reset") resetWatch();

})