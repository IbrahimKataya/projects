const generateQuote = ()=>{
    let url= "https://quotes-api-self.vercel.app/quote";
    fetch(url).then(function (response){
        return response.json()
    }).then(function(data){
        document.getElementById("quote").innerHTML = data.quote;
        document.getElementById("author").innerHTML = data.author;

    })
}