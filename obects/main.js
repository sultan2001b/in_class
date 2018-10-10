// //creation
// //Use Array Literals
// //Inherit properties and methods

// //DRY = Dont Repeat You`r Self
// //Wet = write .. Two Times

// // how to break loop

// var emptyArray = [];
// var letters = ["a", "b", "c", "d", "e"];

// var firstLetter = letters[0];
// var letterE = letters[4];

// //Display Array as table
// console.table(letters);

// //change index of array
// letters[0] = "A";
// letters[3] = "D";

// //adding new item to end of  Array
// letters.push("LOL");

// //removing item from end of Array
// letters.pop();

// //adding to the start of Array
// letters.unshift("LOL");

// //removing from start of Array
// letters.shift("LOL");

// console.table(letters);

// function cl(text) {
//     console.log(text);
// }

// var classes = ["objects", "scope", "hoisting"];
// for (var i = 0; i < classes.length; i++) {
//     cl(classes[i]);
// }
// console.clear();
// var instruments = ["Guitar","Piano","Violin","Drums","Cello"];
// // Starting Point: 0
// // Ending Point: the end of the array
// // Step: 1
// for(var index = 0;index <instruments.length;index +=1)
// {
//     var currentInstrument = instruments[index];
//     cl(currentInstrument);
// }

//Creating Objects
var emptyObj = {};
var movie = {
    title: "Satantango",
    director: "Bela Tarr",
    duration: "432"
};
console.table(movie);

var bookSeries = {
    name: "In Search of Lost Time",
    author: "Marcel Proust",
    books: [
        "Swann's Way",
        "In the Shadow of Young Girls in Flower",
        "The Guermantes Way",
        "Sodom and Gomorrah",
        "The Prisoner",
        "The Fugitive",
        "Time Regained"
    ]
};
function ct(obj) {
    console.table(obj);
}
function cl(text) {
    console.log(text);
}
ct(bookSeries);

//accessing values
var movieTitle = movie.title;
var director = movie.director;
var duration = movie.duration;
cl(movieTitle);

var moath = {
    name: "moath",
    hometown: "dammam",
    role: "Grate Teatcher"
}
var name = moath["name"];
var town = moath["hometown"];
var desiredKey = "role";
var role = moath[desiredKey];
cl(role);
ct(moath);

movie.duration = 111;
movie.languge = "Hungarian";
movie.rating = "2134534553";
ct(movie);
cl(movie.actors);

// you can delete a properity 
delete movie.languge;
ct(movie);

var person = {
    firstName: "jacques",
    lastName: "Cousteau",
    sayHi: function () {
        cl("Hello World");
    }
}
person.sayHi();

var math = {
    pi: 3.14,
    add: function (num1, num2) {
        var result = num1 + num2;
        return result;
    },
    multiply: function (num1, num2) {
        return num1 * num2;
    }
};
function cc() {
    console.clear();
}
cc();
var explorer = {
    name: {
        firstName: "Jacques",
        lastName: "Cousteau"
    },
    birth:{
        day:11,
        month:6,
        year:1910
    }
};
var firstName = explorer.name.firstName;
var fullName = firstName+" "+explorer.name.lastName;
var birthObj =explorer.birth;
cl(birthObj.day+"/"+birthObj.month+"/"+birthObj.year);
cl(fullName);

var todaysClass = {
    weekNumber: 1,
    dayNumber:  5,
    topics: ["Objects","scope","Hoisting","Callbacks","test"]
};
var classDetails = "Week "+todaysClass.weekNumber+", Day "+todaysClass.dayNumber + " topics:";
for(var i=0;i<todaysClass.topics.length;i++)
{
    cl(todaysClass.topics[i]);
}

var tweets =
[
    {userName: "billy",message:"Hi there, my first tweet"},
    {userName: "threequal",message:"something something nerdy"},
    {userName: "meshoalmosallam",message:"I have 0 tweets"}
];
for(var i =0;i<tweets.length;i++)
{
    var currentTweet = tweets[i];
    var userName = currentTweet.userName;
    var message = currentTweet.message;
    var tweet = userName +" posted: "+message;
    cl(tweet);
}