document.getElementById("btn").addEventListener("click", function(){
    let num1 = document.querySelector(".num1").value;
    let num2 = document.querySelector(".num2").value;
    let operation = document.getElementById("selectOp").value;
    let result = document.querySelector(".result");


    switch (operation){
        case "plus":
            result.innerHTML = Number(num1) + Number(num2);
            break;

        case "minus":
            result.innerHTML = Number(num1) - Number(num2);
            break;

        case "multiply":
            result.innerHTML = Number(num1) * Number(num2);
            break;

        case "divide":
            result.innerHTML = Number(num1) / Number(num2);
            break;

    }

});