function cl(text) {
    console.log(text);
}

// cl("js connected");

var friends = ['Moe', 'Larry', 'Curly']
// cl(friends[0]);
// friends[30]=30;

// friends.forEach(function(item, index, array) {
//     console.log(item, index);
//   });
var i = 1
while (i <= 20) {
    if (i % 2 === 0) {
        cl(i + " is even")
    } else {
        cl(i + " is odd")
    }
    ++i;
}

var carCompanies = ['Honda', 'Toyota', 'Ford', 'Hyundai', 'Mazda', 'Hummer']
i = 0;
while (i < carCompanies.length) {
    cl(carCompanies[i])
    i++;
}

i = 0;
while (i < carCompanies.length) {
    if (carCompanies[i].startsWith('H')) {
        cl(carCompanies[i]);
    }
    i++;
    // cl(carCompanies[i])
}
cl("1. Print every number from 0 to 10");

// 1. Print every number from 0 to 10
for (var i=0;i<=10;i++) {
    cl(i);
}
cl("2. Print every number from 4 to -16");
// 2. Print every number from 4 to -16
for (var i=4;i>=-16;i--) {
    cl(i);
}
cl("3. Print every fifth number from 8 to 41");
// 3. Print every fifth number from 8 to 41
for(var i =0;i<=41;i+=5)
{
cl(i);
}

// 4. Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
cl("4. Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. '2 is even').");
for (var i=1;i <= 20;i++) {
    if (i % 2 === 0) {
        cl(i + " is even");
    } else {
        cl(i + " is odd");
    }
}
// 4. write a program that loops through the array [1, 2, 3, 4, 5, 6] and outputs [2, 4, 6, 8, 10, 12]
cl("4. write a program that loops through the array [1, 2, 3, 4, 5, 6] and outputs [2, 4, 6, 8, 10, 12]");
var arr=[1, 2, 3, 4, 5, 6];
for(var i =0;i<arr.length;i++)
{
    arr[i]=arr[i]*2;
}
cl(arr);
// 5. write a function identifyUserType(user) (no loops or anything).  If you invoke identifyUserType('student') the function outputs `true`.
cl("5. write a function identifyUserType(user) (no loops or anything).  If you invoke identifyUserType('student') the function outputs `true`.");
function identifyUserType(user)
{
    if (user=='student') {
        return true;
    }
}
// 6. a. write a variable called classArray that is equal to ['student', 'student', 'student', 'lead instructor', 'student', 'lead instructor', 'associate instructor', 'student']
cl("6. a. write a variable called classArray that is equal to ['student', 'student', 'student', 'lead instructor', 'student', 'lead instructor', 'associate instructor', 'student']");
var classArray=['student', 'student', 'student', 'lead instructor', 'student', 'lead instructor', 'associate instructor', 'student'];
//    b. write a function called identifyStudentNum(userArray) that uses the identifyUserType function to console.log the number of students in classArray when indentifyStudentNum(classArray) is called.
cl("b. write a function called identifyStudentNum(userArray) that uses the identifyUserType function to console.log the number of students in classArray when indentifyStudentNum(classArray) is called.");
function identifyStudentNum(userArray)
{
    debugger;
    var num=0;
    for(var i=0;i<classArray.length;i++)
    {
      if(identifyUserType(classArray[i])==true)
      {
num++;
      }
    }
    cl(num);
}
identifyStudentNum(classArray);