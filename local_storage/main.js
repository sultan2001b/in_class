// localStorage.setItem('clickCount', 10);
// var numClicks =localStorage.getItem('clickCount');
// console.log(numClicks);
// localStorage.removeItem("clickCount");
// localStorage.clear();

// if there is nothing in localStorage call clickCount, set it to 0
var currentClickCount = localStorage.getItem('clicks');
if (currentClickCount === null) {
    localStorage.setItem('clicks',0);
}

var button = document.querySelector('button');
button.addEventListener("click", function() {
    // debugger;
  var current = localStorage.getItem("clicks");
  current = parseInt(current) + 1;
    localStorage.setItem("clicks", current);

  var count = document.querySelector(".count");
  count.textContent = current;
});

// JSON.stringify()
// JSON.parse()

// localStorage store only json