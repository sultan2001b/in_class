const baseURL = "https://randomuser.me/api/";

const method = "GET";

const dataType = "application/json";

const httpOptions = {
  method: method
};

function turnResponseIntoObject(response) {
  return response.json();
}

function displayData(data) {
  for (let person of data.results) {
    const html = `
      <h2>${person.name.first + " " + person.name.last}</h2>
      <img src="${person.picture.medium}">
      <p>email ${person.email}</p>
      `;
    const outputDiv = document.querySelector("#output");
    outputDiv.innerHTML += html;
  }
}

function fetchNewUser() {
  var count = document.querySelector("#user-count");
  var gender_male = document.querySelector("#gender-male");
  var gender_female = document.querySelector("#gender-female");
  var result = gender_male.checked ? "male" : "female";
  console.log(baseURL + "?results=" + count.value + "&gender=" + result);
  fetch(baseURL + "?results=" + count.value + "&gender=" + result, httpOptions)
    .then(turnResponseIntoObject)
    .then(displayData);
}

const button = document.querySelector("button");
button.addEventListener("click", fetchNewUser);

// fetch(baseURL, httpOptions)
//   .then(turnResponseIntoObject)
//   .then(displayData);
