const inputE1 = document.getElementById("input");
const infotextE1 = document.getElementById("info-text");
const meanigcontainerE1 = document.getElementById("meaning-container");
const titleE1 = document.getElementById("title");
const meaningE1 = document.getElementById("meaning");
const audioE1 = document.getElementById("audio");


async function fetchAPI(word){
    try{
        infotextE1.style.display = "block";
        meanigcontainerE1.style.display = "none";
        infotextE1.innerText = `Searching the meaning of "${word}"`;
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const result = await fetch(url).then((res) => res.json());

        if(result.title){
            meanigcontainerE1.style.display = "block";
            infotextE1.style.display = "none";
            titleE1.innerText = word;
            meaningE1.innerText = "N/A";
            audioE1.style.display = "none";

        }else{
            infotextE1.style.display = "none";
            meanigcontainerE1.style.display = "block";
            audioE1.style.display = "block";
            titleE1.innerText = result[0].word;
            meaningE1.innerText = result[0].meanings[0].definitions[0].definition;
            audioE1.src = result[0].phonetics[0].audio;
        }
        
    }catch (error){
        console.log(error);
        infotextE1.innerText = `error happened, try agian`;
    }

}

inputE1.addEventListener("keyup", (e)=>{
    if(e.target.value && e.key === "Enter"){
        fetchAPI(e.target.value);
    }
});