// # Anagram Detector

// Write a program that, given a word and a list of possible anagrams, selects the anagrams of the given word.

// In other words, given: `"listen"` and `["enlists" "google" "inlets" "banana" "istlen"]` the program should return `inlets` and `istlen`.

// ## Suggestions

// - Use JS built-in functions to your advantage
// - `split()`- Read More [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
// - `sort()`- Read More [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
// - `join()`- Read More [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

var arr = ["enlists", "google", "inlets", "banana", "istlen"];

function anagram(text) {
    var newArr = [];
    debugger;
    text = text.split("");
    for (k of arr) {
        var arr1 = k.split("");
        text.sort();
        arr1.sort();
        
        if (text.isEqual(arr1)) {
            newArr.push(k);
        }
        // if (text.toString() == arr1.toString()) {
        //     newArr.push(k);
        // }
    }
    return newArr;
}
console.log(anagram('listen'));