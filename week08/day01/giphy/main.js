// URL
// Method
// Data Type
// Params || Body

const form = document.querySelector("form");
const input = document.querySelector("input");
const searched = document.querySelector(".searched");
const imgs = document.querySelector(".imgs");
const img = document.querySelector("img");
const api_key = "BSXWd8tbVFu5NkbYoMG2CYj3KPHShTVJ";


form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    const params = `?api_key=${api_key}&q=${input.value}`;
    const url = "https://api.giphy.com/v1/gifs/search" + params;
    
    fetch(url, httpOptions)
        .then(turnResponseIntoObject)
        .then(displayData);

});


const httpOptions = {
  method: "GET"
};

function turnResponseIntoObject(response) {
  return response.json();
}

function displayData(data) {
    debugger;
    var html1 ;
    for (let a of data["data"])
    {
         html1 += `<img src="${a["embed_url"]}">`
    }
    imgs.innerHTML = html1;;
}

