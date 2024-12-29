const container = document.querySelector(".page-container");
const pages = document.querySelectorAll(".page");
const togglebtn = document.querySelector(".toggle-btn");
const ul = document.querySelector(".nav-list");
const overlay = document.querySelector(".overlay");
const links = document.querySelectorAll(".link");


let pageIndex = 0;

togglebtn.addEventListener("click", ()=>{
    togglebtn.classList.toggle("active");
    container.classList.toggle("active");
    ul.classList.toggle("show");
});

links.forEach((item, i) => {
    item.addEventListener("click", ()=>{
        next(i);
    });
});


function next(index){
    overlay.getElementsByClassName.animation = `slide 1s linear 1`;

    pages[pageIndex].classList.remove("active");
    pages[index].classList.add("active");
    pageIndex = index;

    setTimeout(()=>{

        
        togglebtn.classList.toggle("active");
        container.classList.toggle("active");
        ul.classList.toggle("show");

    }, 50);

    setTimeout(()=>{
        overlay.style.animation = null;
    },1000)

}