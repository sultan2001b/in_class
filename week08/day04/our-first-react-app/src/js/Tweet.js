import React from "react";

class Tweet extends React.Component {
     handelClickContent(params) {
        console.log(this.props.content)
    }
    handelAuthorDoubleClick()
    {
        console.log(this.props.written_by);
    }
    handelLikesContextMenu()
    {
        console.log(this.props.likes);
    }
  render() {
    return <div>
        <p onClick={this.handelClickContent.bind(this)}>
          {this.props.content}
        </p>
        <p onDoubleClick={this.handelAuthorDoubleClick.bind(this)}>
          written by: {this.props.written_by}
        </p>
        <p onContextMenu={this.handelLikesContextMenu.bind(this)}>
          likes: {this.props.likes}
        </p>
        <p />
      </div>;
  }
}


export default Tweet;