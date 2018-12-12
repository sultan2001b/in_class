// URL || Path
//   /todos
// Method
//  GET
// Data Type
//   JSON (make sure it sends back JSON)
//  Params  || Body
// NONE
//   These are the things that you should be looking for:
// Required Parameters (API Key, etc.)
// Optional Parameters (search terms, etc.)

// GET  /todos, asking for JSON with no body/params

function responseToJson(response) {
  return response.json();
}

function displayAllTodos(data) {
  const listItems = data
    .map(function(todo) {
      return `
        <li id="todo-${todo.id}">
        ${todo.content}
        </li>
        `;
    })
    .join("");
  // debugger;
  const allTodosDiv = document.querySelector("#all-todos");
  allTodosDiv.innerHTML = `<ul>${listItems}</ul>`;
}

function getAllTodos() {
  fetch("/todos",{
    headers: {
      "Content_type": "application/json",
      Accept: "application/json"
    }
  })
    .then(responseToJson)
    .then(displayAllTodos);
}
// setInterval(getAllTodos, 2000); // Polling;

function displayTodo(data) {
  var result = `
        <h2> todo ${data.id} </h2>
        <p>  ${data.content} </p>
        <p> Completed: ${data.completed} </p>
        <p> created at: ${data.created_at} </p>
        `;
  const TodoDiv = document.querySelector("#show-todo");
  TodoDiv.innerHTML = `${result}`;
}
function getTodo(id) {
  fetch("/todos/" + id,{method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    }})
    .then(responseToJson)
    .then(displayTodo);
}
// getTodo(1);
// getTodo(2);
// getTodo(3);
// getTodo(4);

function addNewToDO(content)
{
fetch("/todos",{
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify({ content: content})
}).then().then(function () {
    getAllTodos();
})
}

window.onload = function() {
  getAllTodos();


  const form = document.querySelector("form");
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const input = document.querySelector("#new-todo")
    const content = input.value;
    input.value="";
    //   console.log(content);
      addNewToDO(content);
  });





  const showTodoDiv = document.querySelector("#all-todos");
  showTodoDiv.addEventListener("click", function(e) {
    const clickedLi = e.target;
    const id = clickedLi.id.replace("todo-", "");
    getTodo(id);
  });
};
