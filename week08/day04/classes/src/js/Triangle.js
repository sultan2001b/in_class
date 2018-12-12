
import Shape from "./Shape";

export default class Triangle extends Shape {
  constructor(width, hight) {
      super("triangle");
    this.width = width;
    this.hight = hight;
    console.log(this.width, this.hight);
  }
}