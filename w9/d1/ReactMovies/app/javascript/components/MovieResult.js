import React from "react";

class MovieResult extends React.Component {
  render() {
    const { Title, Poster, Plot } = this.props;
    return <div>
        <h4>{Title}</h4>
      <img src={Poster} alt="" />
      <p>{Plot}</p>
      </div>;
  }
}

export default MovieResult;
