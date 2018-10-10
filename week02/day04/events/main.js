// The type of event
var eventType = "click";

// The target of the event
var myButton = document.querySelector("button");

// The callback - what do you want to do as a response?
function myCallback() {
  console.log("The button was clicked");
}

// Create an event listener
// WHEN this EVENT takes place on this TARGET, call this CALLBACK FUNCTION
myButton.addEventListener(eventType, myCallback);

// Events need:
// - An event type
// - An event target
// - A callback function
// When all of those things are combined, they become an event listener

var darkButton = document.querySelector("#dark");

function changeToDarkTheme() {
  document.body.style.background = "black";
  document.body.style.color = "white";
}

darkButton.addEventListener("click", changeToDarkTheme);

var lightButton = document.querySelector("h2#light");

function lightTheme() {
  document.body.style.background = "white";
  document.body.style.color = "black";
}

lightButton.addEventListener("click", lightTheme);

// When the h2#light is clicked
//  Change the page's background to be white
//  Change the text color to be black

var postTweetButton = document.querySelector(".post");

function createTweet() {
  // Get whatever is typed in the input and save it in a variable called content
  var input = document.querySelector("input");
  var content = input.value;
  // Create a new paragraph
  var newPara = document.createElement("p");
  // Set the paragraph's text to be content
  newPara.innerText = content;
  // Take that paragraph and put it at the end of div.newTweets
  var newTweetsDiv = document.querySelector(".newTweets");
  newTweetsDiv.appendChild(newPara);
}

postTweetButton.addEventListener("click", createTweet);

var colorInput = document.querySelector("input.color");

function onColorChange() {
  document.body.style.background = colorInput.value;
}

colorInput.addEventListener("change", onColorChange);

var billImage = document.querySelector("img.bill");

billImage.addEventListener("click",doubleImage);

var nickImage = document.querySelector("img.nick");
function doubleImage()
{
  this.style.width="350px";
}
nickImage.addEventListener("click",doubleImage)

var divY = document.querySelector(".y");
function onMouseMoved(event)
{
// console.log(;
divY.innerText = event.clientX+" , "+event.clientY;
}
window.addEventListener("mousemove", onMouseMoved)

function onResize()
{
  var width  = window.innerWidth;
console.log("the width of the browser "+width);
}
window.addEventListener("resize",onResize);
function whenKeyIsPerssed(e)
{
  // debugger;
console.log("the "+event.key+" was pressed");
}

window.addEventListener("keypress",whenKeyIsPerssed);
// emmit

var lists = document.querySelectorAll("li");
// for(var i =0; i<lists.length;i++)
// {
//   debugger;
//   lists[i].addEventListener("click",makeTextRed);
// }
for(var node of lists)
{
  // console.log(key);
  node.addEventListener("click",makeTextRed);
}
function makeTextRed()
{
  this.style.color="red";
}