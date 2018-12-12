const apiURL = "http://api.open-notify.org/astros"
const method = "GET"; //default
const dataType = "Json"; //default

fetch(apiURL)
.then(function(respone){
    return respone.json();
// console.log(respone);
}).then(function(data){
    const people = data.people;
    for (person of people)
    {
        document.body.innerHTML += person.name +"<br>";
        // console.log(person);

    }
});

