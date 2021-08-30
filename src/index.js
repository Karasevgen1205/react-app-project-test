import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

const someText = "Some text";
const elem = <h2>Hello world!!!</h2>;
const elem2 = (
  <div>
    <h2>Hello world!!!</h2>
    <a>{someText}</a>
    <input htmlFor="lll"></input>
  </div>
);

ReactDOM.render(elem2, document.getElementById("root"));
