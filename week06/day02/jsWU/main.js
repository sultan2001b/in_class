var myArray = [1,2,3,4]

var sum = function(a,b) {
    return a+b;
};

function myReduce(array,callBack){
    var initalValue = 0
for (var i=0; i<array.length;i++)
{
    initalValue = callBack(initalValue, array[i]);
}
return initalValue;
}

console.log(myReduce(myArray,sum))