var container = document.getElementById("container");

var colors = ["#EDF1D6","#9DC08B","#609966","#40513B",
    "#E3FDFD","#CBF1F5","#A6E3E9","#71C9CE",
    "#FABC3F","#E85C0D","#C7253E","#821131",
    "#FFBE98","#F05A7E","#181C14","#0B8494",
    "#1B262C","#0F4C75","#27374D","#697565"];

var squares = 400;

for(let i=+0; i<squares; i++){
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover",()=>SetColor(square));
    square.addEventListener("mouseout",()=>RemoveColor(square));

    container.appendChild(square);
}

function SetColor(element){
    var color = RandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 3px ${color},0 0 10px ${color}`;
}

function RandomColor(){ 
    return colors[Math.floor(Math.random() * colors.length)]
}

function RemoveColor(element){
    element.style.background = "rgb(215, 215, 215)";
    element.style.boxShadow = "0 0 3px";
}