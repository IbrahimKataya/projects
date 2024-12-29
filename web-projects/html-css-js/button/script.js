var button = document.querySelectorAll("a");

 button.forEach(btn=>{
    btn.addEventListener("click",function(s){
        var z = s.clientX - s.target.offsetLeft;
        var y = s.clientY - s.target.offsetTop;

        var click = document.createElement("span");
        click.style.left = z + "px";
        click.style.top = y + "px";
        this.appendChild(click);

        setTimeout(() => {
            click.remove();
        }, 1000);

    })
 })