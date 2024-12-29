const btn = document.querySelector(".btn");
const input = document.getElementById("input");
const copyIcon = document.querySelector(".fa-copy");
const alertContainer = document.querySelector(".alert-container");

let password = "";


btn.addEventListener("click",() =>{
    createPassword();
});

copyIcon.addEventListener("click", () =>{
    copyPass();

    alertContainer.innerText = password + " copied!"

    if(input.value){
        alertContainer.classList.remove("active");
        setTimeout(() =>{
            alertContainer.classList.add("active");
        }, 2000)
    }
})

function createPassword(){
    const chars =
    "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!?@#$%^&*";
    const passLength = 14;

    password = "";
    
    for(let index = 0;index < passLength; index++){
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum + 1);
    }
    input.value = password;
    alertContainer.innerText ="Password generated!"
    if(input.value){
        alertContainer.classList.remove("active");
        setTimeout(() =>{
            alertContainer.classList.add("active");
        }, 1500)
    }
}

function copyPass(){
    input.select();
    input.setSelectionRange(0,9999);
    navigator.clipboard.writeText(input.value);


}