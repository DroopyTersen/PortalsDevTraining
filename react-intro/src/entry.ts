import * as React from "react";
import * as ReactDOM from "react-dom";

let elem = React.createElement("div", {}, "hello there");
ReactDOM.render(elem, document.getElementById("root"));
