import React from "react";
// import PropTypes from "prop-types"
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
class App extends React.Component {
  constructor() {
    super();
    this.state = { todos: [] };
    this.addTodo = this.addTodo.bind(this);
  }
  addTodo(newTodo) {
    const currentTodos = this.state.todos;
    currentTodos.unshift(newTodo);
    this.setState({
      todos: currentTodos
    });
  }
  render() {
    // console.log(this.state);
    return <div>
        <h1>Todo App</h1>
        <hr />
        <TodoForm addTodo={this.addTodo} />
        <hr />

        <TodoList todos={this.state.todos} />
      <hr />

      </div>;
  }
}

export default App;
