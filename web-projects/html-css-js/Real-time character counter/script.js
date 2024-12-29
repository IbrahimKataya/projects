const total = document.getElementById("total-counter");
const remaining = document.getElementById("remaining-counter");
const textarea = document.getElementById("textarea");

function update(){
    total.innerText = textarea.value.length;
    remaining.innerHTML = textarea.getAttribute("maxLength") - textarea.value.length;
}

textarea.addEventListener("keyup",() => {
    update();

})