const circles = document.querySelectorAll(".circle");

circles.forEach(circle=> {
    let dots = circle.getAttribute("data-dots");
    let marked = circle.getAttribute("data-percent");
    let percent = Math.floor(dots * marked/100);
    let rotate = 360/dots;
    let points = "";
    for(let i=0; i<dots; i++){
        points += `<div class="points" style ="--i:${i} ; --rot:${rotate}deg"></div>`;
    }

    circle.innerHTML += points;
    const pointsMarked = circle.querySelectorAll(".points");

    for(let i=0; i<percent; i++){
        pointsMarked[i].classList.add("marked");
    }

})