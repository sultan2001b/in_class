//let
//
// can be re-assigned
// block-scoped
// Can`t br talked about before they are defined (temporal dead zone)

let password = "chicken";
password = "checken2";

let passwordConfirmation = "checken";
passwordConfirmation = "checken2";

//cont
//
//block-scoped
//Temporal Dead Zone
//It has an immutable binding

const favNumber = 42;
// favNumber = 10;

const nums = [1, 2, 3];
nums.push(4);

// Arrow Function

// function add(x,y)
// {
//     return x+y;
// }

// const add = (x,y) =>
// {
//     return x+y;
// }

const add = (x, y) => x + y; // Implicit return

const res = add(4, 5);

// console.log(res)

function fullName1(firstName, lastName) {
  return firstName + " " + lastName;
}
const fullName2 = (firstName, lastName) => {
  return firstName + " " + lastName;
};

const fullName3 = (firstName, lastName) => firstName + " " + lastName;

// console.log(fullName1("sultan", "alsamaani"));
// console.log(fullName2("sultan", "alsamaani"));
// console.log(fullName3("sultan","alsamaani"));

function sayHello(name = "World") {
  console.log("Hellow " + name);
}

// sayHello("Roger");
// sayHello()

const brand = "Wurlitzer";
const keys = 64;
const message = `My ${brand} keyboard has ${keys} keys`;
// message = "new message";
// console.log(message);

//Destructor
const actor = ["Groucho", "Marx", "Duck Soup"];
const firstName = actor[0];
const lastName = actor[1];

const [first, last] = actor;

console.log(firstName, first);
console.log(lastName, last);

const book = {
  author: "Douglas Hofstadter",
  title: "GEB"
};

const t = book.title;
const g = book.author;

const { title, author } = book;
const { title: tt, author: gg } = book;

// console.log(`${title} ${author}  `);
// console.log(`${tt} ${gg}`);

//destructuring

const user_id = 2;
const title1 = "My new post";
const body = "A whole heap of text";

const params = {
  user_id,
  title1,
  body,
  save() {
    console.log("this post is now saved");
  }
};

// console.log(params);
// params.save();

const newUser = {
  fullName: "Bill Bob",
  age: 42,
  bio: "klanlodfsdfsdfs",
  email: "billy@ga.co"
};

const allUsers = [
  {
    fullName: "Bill Bob",
    age: 42,
    bio: "klanlodfsdfsdfs",
    email: "billy@ga.co"
  },
  {
    fullName: "Bill Bob",
    age: 81,
    bio: "klanlodfsdfsdfs",
    email: "billy@ga.co"
  },
  {
    fullName: "Bill Bob",
    age: 55,
    bio: "klanlodfsdfsdfs",
    email: "billy@ga.co"
  },
  {
    fullName: "Bill Bob",
    age: 35,
    bio: "klanlodfsdfsdfs",
    email: "billy@ga.co"
  },
  {
    fullName: "Bill Bob",
    age: 64,
    bio: "klanlodfsdfsdfs",
    email: "billy@ga.co"
  },
  {
    fullName: "Bill Bob",
    age: 23,
    bio: "klanlodfsdfsdfs",
    email: "billy@ga.co"
  }
];

// for (let i = 0; i < allUsers.length;i++)
// {
//     var { fullName, age, email, bio } = allUsers[i];

//     var html = `
// <h1>${fullName}</h1>
// <p>${age}</p>
// <p>${email}</p>
// <p>${bio}</p>
// `;
//     document.body.innerHTML += html;

// }

for (let user of allUsers) {
    var { fullName, age, email, bio } = user

    var html = `
<h1>${fullName}</h1>
<p>${age}</p>
<p>${email}</p>
<p>${bio}</p>
`;
    document.body.innerHTML += html;
}
