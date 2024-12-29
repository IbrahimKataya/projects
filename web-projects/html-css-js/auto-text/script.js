const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const words = ["World","Life","Fun","Awesome","Famous","Cool"];
const typeLetterDelay = 200;
const eraseLetterDelay = 100;
const typeWordDelay = 500;
const eraseWordDelay = 2000;

let index = 0;
let charIndex = 0;

document.addEventListener("DOMContentLoaded", ()=>{
    if(words.length){
        setTimeout(typeText,typeWordDelay);
        
    }
});

function typeText() {
    if(charIndex < words[index].length){
        typedText.textContent += words[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typeLetterDelay);
    }else{
        setTimeout(erase, eraseWordDelay);
    }
}

function erase() {
    if(charIndex > 0){
        typedText.textContent = words[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase,eraseLetterDelay);
    }else{
        index++;
        if(index >=words.length){
            index = 0;
        }
        setTimeout(typeText, typeWordDelay);
    }

}