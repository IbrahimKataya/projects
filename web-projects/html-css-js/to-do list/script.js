document.querySelector(".btn").onclick = function(){
    if(document.querySelector("input").value.length == 0){
        alert("please write something");
    }else{
        document.querySelector("#tag").innerHTML += ` 
        <div class="list">
            <span id='list-item'>
                ${document.querySelector("input").value}
            </span>
            <button class="delete">
                <i class='bx bx-x' ></i>
            </button>
        </div> `;


        var deleteBtn_list = document.querySelectorAll(".delete");
        for(var i=0; i<deleteBtn_list.length; i++){
            deleteBtn_list[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        // var list = document.querySelector(".list");
        // for(var i=0; i<list.length; i++){
        //     list[i].onclick = function(){
        //         this.classlist.toggle("complete");
        //     }
        // }

        document.querySelector("input").value = "";
    }
}