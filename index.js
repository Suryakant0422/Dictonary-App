const input = document.getElementById('input');
const info = document.getElementById('info');
const audioOfWord = document.getElementById("audioOfWord");


async function searchWord() {
   const searchInput =input.value;
   
   const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput}`);
   console.log(response);
   const data = await response.json();
   console.log(data);
   data.map((ele)=>{

    
    info.innerText = ele.meanings[0].definitions[0].definition;
    audioOfWord.src = ele.phonetics[0].audio;
   })
}
