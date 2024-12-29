const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let curActive = 1;

next.addEventListener("click", ()=>{
    curActive++;
    if(curActive > circles.length) curActive = circles.length;
    update();
});

prev.addEventListener("click", ()=>{
    curActive--;
    if(curActive < 1) curActive = 1;
    update();
});

const update = ()=>{
    circles.forEach((circles,index) =>{
        if(index < curActive) circles.classList.add("active");
        else circles.classList.remove("active");
    });

    const actives = document.querySelectorAll(".active");

    progress.style.width = 
        (actives.length -1) / (circles.length - 1) * 100 + "%";
    if(curActive === 1) prev.disabled = true;
    else if(curActive === circles.length) next.disabled = true;
    else{
        prev.disabled = false;
        next.disabled = false;
    }

};
