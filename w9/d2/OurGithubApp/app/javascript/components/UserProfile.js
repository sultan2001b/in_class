import React from "react";

class UserProfile extends React.Component {
  constructor(props) {
    super();
    this.state = { userData: null };

    const baseURL = "https://api.github.com";
    const path = `/users/${props.username}`;
    const apiKey = "718c47769310e0ad5b3d7be9d28dfe6e41e35860";
    const params = `?access_token=${apiKey}`;
    const url = baseURL + path + params;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          userData: data
        });
      });
  }
  render() {
    if (this.state.userData === null) {
      return <h2>Loading</h2>;
    }
    const { avatar_url, bio, followers, following } = this.state.userData;
    return (
      <div>
        <img src={avatar_url} />
        <h2>{this.props.username}</h2>
        <p>{bio}</p>
        <p>{followers}</p>
        <p>{following}</p>
      </div>
    );
  }
}

export default UserProfile;
