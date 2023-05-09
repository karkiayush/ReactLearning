import React from "react";
import ReactDOM from "react-dom";
import './style.css';

// Note that react contains both functional(latest and recomended) and class based component

//rendering the ReactDOM that contains the acess to root div and render method takes the component of function which is made above

// importing the main content from App.js 
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
