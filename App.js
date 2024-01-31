import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => React element(object) => HTML element(.render)
// const heading = React.createElement("div", { id: "heading" }, "Namaste");

//JSX - HTML-like or XML-like syntax
//JSX is transpiled before it reaches the JS Engine - PARCEL - BABEL
//JSX - Babel transpiles to React.createElement => React element(object) => HTML element(.render)
const jsxHeading = (<h1 className="heading">
  Namaste inside JSX
</h1>);

// console.log(heading)
console.log(jsxHeading)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);