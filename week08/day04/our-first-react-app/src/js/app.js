import React from "react";
import ReactDOM from "react-dom" ;

import Greeting from "./Greeting"
import Hello from "./Hello"
import Tweet from "./Tweet"
import StudentList from "./StudentList"
import ClickCounter from "./ClickCounter"
import DatePrinter from "./DatePrinter"
import MessagePreview from "./MessagePreview"

ReactDOM.render(
  <div>
    <MessagePreview />
    <DatePrinter />
    <ClickCounter />
  </div>,
  document.querySelector("#app")
  // <Tweet content="this is the content" written_by="jack" likes={42} />,  document.querySelector("#app")
  // <Hello name = "kane" hometown="Sydney" />,document.querySelector("#app")
);
