const btn = document.querySelector("#emoji");

const emojis = [
    "😀",
    "😃",
    "😄",
    "😁",
    "😆",
    "😅",
    "🙂",
    "🙃	",
    "🫠",
    "😉	",
    "😊	",
    "😇",
    "🥰	",
    "😘	",

];


function emoji(){
    

    btn.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
};

btn.addEventListener("click", emoji);


window.onload = emoji();