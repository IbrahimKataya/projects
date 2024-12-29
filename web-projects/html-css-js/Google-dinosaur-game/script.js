const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");


function jump(){
    if(dino.classList !="jump"){
        dino.classList.add("jump");

        setTimeout(function(){
            dino.classList.remove("jump");
        }, 500);
    }
}

var IsAlive = setInterval(function(){
    var dinoE1 = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    var cactusLeft =   parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if(cactusLeft < 50 && cactusLeft > 0 && dinoE1 >= 140){
        alert("Game Over!!!!");
    }

}, 10);

document.addEventListener("keydown", function(event){
    jump();
})

