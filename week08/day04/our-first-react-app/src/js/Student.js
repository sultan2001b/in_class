import React from "react";
class Student extends React.Component {
  constructor()
  {
    super();
    this.handelMouseEnter = this.handelMouseEnter.bind(this);
    this.handelContextMenu = this.handelContextMenu.bind(this);
    this.handelDoubleClick = this.handelDoubleClick.bind(this);
    this.handelClick = this.handelClick.bind(this);
  }
  handelContextMenu(e) {
    e.preventDefault();
    console.log("rightClicked");
  }
  handelDoubleClick() {
    console.log("Double Clicked");
  }
  handelMouseEnter() {
    console.log("the mouse entered the component");
  }
  handelClick() {
    console.log(this.props.studentName);
  }
  // onContextMenu={e => this.handelContextMenu(e)}
  // onMouseEnter={() => this.handelMouseEnter()}
  // onClick={() => this.handelClick()}
  render() {
    return <li onContextMenu={this.handelContextMenu} onClick={this.handelClick} onMouseEnter={this.handelMouseEnter} onDoubleClick={this.handelDoubleClick}>
        {" "}
        {this.props.studentName}{" "}
      </li>;
  }
  // render() {
  //     return <li
  //         onDoubleClick={() => this.handelDoubleClick()}
  //         {this.props.studentName} >
  //     </li>;
  // }
}

export default Student;
