import React from "react";
// import PropTypes from "prop-types"
class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = { newTodo: "" };
    this.handelChange = this.handelChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    // console.log( this.state);
    this.props.addTodo(this.state.newTodo);
  }
  handelChange(event) {
    this.setState({
      newTodo: event.target.value
    });
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.newTodo} onChange={this.handelChange} />

        <input type="submit" value="Add Todo" />
      </form>;
  }
}

export default TodoForm;
