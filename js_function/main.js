
// console.log("Hello World");
doSomeThing();//Call-site

//this is hoisted preferred to use it
function doSomeThing() {
    console.log("Hello");
}

var doSomeThingElse= function(){
    console.log("Hello World");
};

doSomeThingElse();

function squarFive() {
    console.log(5*5);
}
squarFive();

function rollDice()
{
    var randomNumber = Math.random()*6;
    var roundedNumber = Math.floor(randomNumber)+1;
    console.log(roundedNumber);
}
rollDice();

function hiMoath() {
    console.log("Hi Moath");
}

function cl(str){
console.log(str);
}

function sayHello(name)
{
    cl("Hello " +name);
}

function multiply(x,y)
{
    cl(x*y);
}
function power(num1,num2) {
    cl(Math.pow(num1,num2));
}

function Greeting(gree,name)
{
    cl(gree+", "+name+"!")
}

function changeTheme(a) {
    if (a==="light") {
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
    } else if(a==="dark") {
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
    }
}
cl("changeTheme('dark')");

function squar(number)
{
    var result =number*number;
    return result;
}

function area(x,y) {
    return (x*y);
}
var res = "The area of a 4*7 rectangle is "+area(4,7);
cl(res);
// console.clear();

function login(userName,Password) {
    if ((userName === "sultan"&&Password==="car")||(userName === "trevor"&&Password==="wolf")||(userName === "saud"&&Password==="tomato")) {
        return true;
    } else {
        return false;
    }
}
// userName = prompt("Enter User Name");
// Password =  prompt("Enter Password");
// var isLoggedIn =login(userName,Password);
// if (isLoggedIn) {
//     alert("success .");
// } else {
//     alert("failed .");
// }

function isValidEmail(email) {
    return email.includes("@");
}
if(isValidEmail)
{
    cl("The message has been sent");
}
else
{
    cl("Put in a valid email address");
}

console.clear();
function sayHI()
{
    cl("Hello")
}
sayHI();