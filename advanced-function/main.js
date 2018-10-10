function cl(text)
{
    console.log(text);
}

function sayHi()
{
    cl("Say Hi");
}
sayHi();

function sayHello(name)
{
    var greeting = "Hello "+ name;
    cl(greeting);
}
sayHello("sultan");

function divide(x,y){
// debugger;
}

divide(5,8);

var user={
    firstName: "Jacques",
    lastName: "Cousteau"
}

var userTwo={
    firstName: "Ali",
    lastName: "Alqahtani"
}

function displayFullname(person)
{
cl( person.firstName+" "+person.lastName);
}
displayFullname(userTwo);
displayFullname({firstName: "Ali2",lastName: "Alqahtani"
})
console.clear();

function delayedLog()
{
    console.log("Hello, I was delayed");
}

// setTimeout(delayedLog,5000); //callback function, time in ms // delay

function regularlyCalled(){
    console.log("Look at Me go!");
}

//Callback function, time in milliseconds 1000 = 1 second
// setInterval(regularlyCalled,2000);
function handelCallback(cb)
{
    cb();
}

function log()
{
    console.log("Hello");
}

handelCallback(log);

function repeat(times,myCallback)
{
    for(var i = 1;i<=times;i++){
        myCallback();
    }
}

repeat(5,animateImage);

function animateImage()
{
    cl("I am animating an image");
}
// animateImage();

function annoyingUser(){
    alert("HAHAHAHAHAHAHAHA");
}
// repeat(3,annoyingUser);Tˇ‰∏