import React from "react"
class ShowPost extends React.Component {
  render() {
    const postID = this.props.match.params.id;
    return (
      <div>
        <h1>Post {postID}</h1>
      </div>
    );
  }
}

export default ShowPost
