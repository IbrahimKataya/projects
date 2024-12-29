const input = document.querySelector("input");

const body = document.querySelector("body");

const text = document.querySelector(".text");

input.checked = JSON.parse (localStorage.getItem("mode"));

updateBodyAndText();

function updateBodyAndText(){
    if(input.checked){
        body.style.backgroundColor="black";
        text.innerHTML = "there you go";
        text.style.color = "#b5b5b5";
    }else{
        body.style.backgroundColor="white";
        text.innerHTML = "click to protect your eyes";
        text.style.color = "black";
    }
    
}

body.addEventListener("input", ()=>{
    updateBodyAndText();
    updateStorage();

})

function updateStorage(){
    localStorage.setItem("mode", JSON.stringify(input.checked))
}