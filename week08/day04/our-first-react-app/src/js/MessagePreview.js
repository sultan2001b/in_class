import React from "react";

class MessagePreview extends React.Component {
  constructor() {
    super();
    this.handelTyping = this.handelTyping.bind(this);
    this.state = { message: "" };
  }
  handelTyping(e) {
      this.setState({message: e.target.value})
    // console.log(this);
  }
  render() {
    return (
      <div>
        <h1>My Message Preview App</h1>
        <input
          onChange={this.handelTyping}
          type="text"
          value={this.state.message}
        />
            <p>You have typed: {this.state.message}</p>
      </div>
    );
  }
}

export default MessagePreview;
