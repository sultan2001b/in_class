
var heading = document.querySelector("h1");
console.log(heading);

var firstListitem = document.querySelector("li");
var secondListitem = document.querySelector("li#second");
var thiredListItem = document.querySelector("li:nth-child(3)");

console.clear();

var img  = document.querySelector("img");
var src = img.getAttribute("src");
console.log(src);

var alt = img.getAttribute("alt");
console.log(alt);

var a = document.querySelector("a");
var href = a.getAttribute("href");
//el.setAttribute("attribute name",desired value);
img.setAttribute("src","https://placecage.com/400/400");

a.setAttribute("href","https://google.com");
console.log(a.getAttribute("href"));
a.setAttribute("target","_blank");

var inp=document.querySelector("input");
inp.value = "good"

var head2 = document.querySelector("h1");
var style2 = getComputedStyle(head2);
console.log(style2.color);
console.log(style2.fontSize);
console.log(style2.textDecoration);

// style2.textDecoration


var aStyle = getComputedStyle(a);
console.log(aStyle.color);
console.log(aStyle.display);
console.log(aStyle.fontSize);
console.log(aStyle.textDecoration);

var image = document.querySelector("img");
var imgStyle = getComputedStyle(image);
console.log(imgStyle.border);
console.log(imgStyle.width);
console.log(imgStyle.height);
console.log(imgStyle.borderRadius);

// Change the following styles on the h1:
//   color to be hotpink
heading.style.color = "hotpink";
//   background to be green
heading.style.background = "green";
//   font-size to be "100px"
heading.style.fontSize = "100px";

// Change the following styles on the img:
//   Set the width to be 200px
image.style.width = "200px";
//   Set the height to be 400px
image.style.height = "400px";

//   Set the border to be 5px solid black
image.style.border = "5px solid black";


console.clear();
var allListItems = document.querySelectorAll("li");
// console.log(allListItems.length );

for(var i = 0; i< allListItems.length;i++)
{
allListItems[i].innerText+="!!!";
if (i%2===0) {
    allListItems[i].style.color="rebeccapurple";
}
else
{
    allListItems[i].style.color="lemonchiffon";
}
}

var pars=document.querySelectorAll("p");
for(var i = 0;i<pars.length;i++)
{
pars[i].innerText+=(parseInt( Math.random()*100))
pars[i].style.border = "3px solid black";
}

console.clear();
var newHeading = document.createElement("h1");
newHeading.innerText = "Created by javaScript!";
var targetDiv = document.querySelector("div.dynamic");
targetDiv.appendChild(newHeading);

var newImg = document.createElement("img");
newImg.setAttribute("src","https://placecage.com/400/400");
newImg.style.border="4px solid red";
targetDiv.appendChild(newImg);

var tweet = "This is the tweet that was posted";
var author = "twitterUser42";
var content = tweet + ", posted by " + author;
console.log(content);
var newParagraph = document.createElement("p");
newParagraph.innerText = content;
newParagraph.style.color="blue";

var newTweetsDiv = document.querySelector(".newTweets");
newTweetsDiv.appendChild(newParagraph);

var bodyTag=document.querySelector("body");
var bodyTag=document.body;
for(var i=0;i<20;i++)
{
// Create a new "a" tag
var aTag = document.createElement("a");
// Set the text to "This is a link to Google"
aTag.innerText = "This is a link to google";
// Set the font color to be "hotpink"
aTag.style.color = "hotpink";
aTag.style.display = "block";
// Set the "href" to be "https://google.com.sa"
aTag.setAttribute("href","https://google.com.sa");
// Put it at the end of the body tag

    // debugger;
    bodyTag.appendChild(aTag);
}
