import React from "react";

class ClickCounter extends React.Component {
  constructor() {
    super();
    this.state = { clicks: 10 };
    this.increment = this.increment.bind(this);
  }
  increment() {
    const currentClicks = this.state.clicks;
    this.setState({
      clicks: currentClicks + 1
    });
  }
  render() {
    return (
      <div>
        <h1 onClick={this.increment}>Number of clicks: {this.state.clicks}</h1>
        {/* <button onClick={ } >Decrement</button> */}
      </div>
    );
  }
}

export default ClickCounter;
