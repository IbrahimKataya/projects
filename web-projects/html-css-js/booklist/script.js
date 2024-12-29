const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const booklist = document.getElementById("book-list");
const btn = document.querySelector(".btn");

btn.addEventListener("click",function(e){
    e.preventDefault();

    if(title.value == "" || author.value == "" || year.value == ""){
        alert("Please fill all the details below");
    }else{
        const newElement = document.createElement("section");

        const newTitle = document.createElement("div");
        newTitle.innerHTML = title.value;
        newElement.appendChild(newTitle);

        const newAuthor = document.createElement("div");
        newAuthor.innerHTML = author.value;
        newElement.appendChild(newAuthor); 

        const newYear = document.createElement("div");
        newYear.innerHTML = year.value;
        newElement.appendChild(newYear);
        

        booklist.appendChild(newElement);

    }


})