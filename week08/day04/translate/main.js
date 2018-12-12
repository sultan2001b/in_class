var data;

function translate(words)
{
    const apiKey = "trnsl.1.1.20181121T145124Z.01760c4c8971a404.0349b70895d204f6d63f79a04c3f3c37135cc629";
    const params = `?key=${apiKey}&text=${words}&lang=${"en-ar"}`;
    const URL = `https://translate.yandex.net/api/v1.5/tr.json/translate${params}`;
    fetch(URL)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
          displayData(myJson["text"][0]);
        //   debugger;
        //   data = JSON.stringify(myJson);
        // console.log(JSON.stringify(myJson));
      });
}

function displayData(words) {
    const output = document.querySelector("#output");
    output.innerHTML = `<p>${words}</p>`;
    speak(words);
}

function speak(words) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(words);
    utterance.lang = "ar";
    synth.speak(utterance);
}



function onButtonClick() {
    const recognition = new webkitSpeechRecognition();

    const dropdown = document.querySelector("select");
    const language = dropdown.value;
    recognition.lang = language;

    recognition.onresult = function (data) {
        const words = data.results[0][0].transcript;
        translate(words);
        speak(words);
    };
    recognition.start();
}

const button = document.querySelector(".record");

button.addEventListener("click", onButtonClick);