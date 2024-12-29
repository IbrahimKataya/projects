let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");

let gradient_box = document.getElementById("gradient-box");
let color_code = document.getElementById("color-code");
let angle = document.getElementById("angle");
let angle_range = document.getElementById("angle-range");

let angle_value = angle.value;

function GradientChange(){
    gradient_box.style.background = `linear-gradient(${angle_value}deg,${color1.value},${color2.value})`;
    color_code.value =`${gradient_box.style.background}`;


}


function AngleChange(){
    angle_value = angle.value;
    angle_range.value = (angle_value*100)/360;
}

function AngleChange_range(){
    angle_value = (angle_range.value*360)/100;
    angle.value = `${angle_value}`;
}

color1.addEventListener("input",GradientChange);
color2.addEventListener("input",GradientChange);


angle.addEventListener("input",AngleChange);
angle_range.addEventListener("input",AngleChange_range);

angle.addEventListener("input",GradientChange);
angle_range.addEventListener("input",GradientChange);



