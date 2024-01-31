import React from "react";
import ReactDOM from "react-dom/client";

//Components , React elements - we can put anything in anything
const elem = <span>HI there</span>;

const Title = () => (
  <h1 className="heading">
    {elem}
    Namaste inside JSX
  </h1>
);

// const data = api.getData(); 

//Component Composition --> component inside component
const HeadingComponent = () => (
  <div className="container">
    {/* {data} -> even if the above api passes some malicious code, jsx will escape it */}
    {/* jsx sanitizes the data  and then executes*/}
    {Title()}
    {/* <h2>{10 + 100}</h2> */}
    <h1 className="heading">Namaste Fn Component</h1>
  </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
// root.render(Title);