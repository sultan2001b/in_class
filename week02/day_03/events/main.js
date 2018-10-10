//The type of event
var eventType = "click";

//The target of the event
var myButton = document.querySelector("button");
//The callback - what do you want to do as response?
function myCallback()
{
    console.log("The button was clicked");
}
//WHEN this EVENT takes place on 
myButton.addEventListener(eventType,myCallback);

var darkButton = document.querySelector("#dark");

function changeToDarkTheme(){
document.body.style.background="black";
document.body.style.color="white";
}

darkButton.addEventListener("mouseover",changeToDarkTheme);

var lightButton = document.querySelector("#light");

function changeTolightTheme(){
document.body.style.background="white";
document.body.style.color="black";
}

lightButton.addEventListener("mouseover",changeTolightTheme);

var postTweetButton = document.querySelector(".post");
function createTweet()
{
var input =document.querySelector("input");
var content = input.value;
var newPara = document.createElement("p");
newPara.innerText = content;
// debugger;
  var newTweetsDiv = document.querySelector("div.newTeets");
  newTweetsDiv.appendChild(newPara);

}
postTweetButton.addEventListener("click",createTweet);

var postTweetButton = document.querySelector(".post");

// function createTweet() {
//   // Get whatever is typed in the input and save it in a variable called content
//   var input = document.querySelector("input");
//   var content = input.value;
//   // Create a new paragraph
//   var newPara = document.createElement("p");
//   // Set the paragraph's text to be content
//   newPara.innerText = content;
//   // Take that paragraph and put it at the end of div.newTweets
//   var newTweetsDiv = document.querySelector(".newTweets");
//   newTweetsDiv.appendChild(newPara);
// }

// postTweetButton.addEventListener("click", createTweet);



var colorInput = document.querySelector("input.color");

function onColorChange()
{
document.body.style.background = colorInput.value;
}
colorInput.addEventListener("change",onColorChange);