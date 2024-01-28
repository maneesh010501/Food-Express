// const heading = React.createElement("h1", { id: "heading", xyz: "jhgf" }, "Hello from React");
// console.log(heading); //object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);//converts the heading object into a h1 tag and puts up on the DOM


{/* <div id="parent">
    <div id="child1">
        <h1>I'm h1 tag</h1>
        <h2>I'm h1 tag</h2>
    </div>
    <div id="child2">
        <h1>I'm h1 tag</h1>
        <h2>I'm h1 tag</h2>
    </div>
</div> */}

const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child1" },
        [React.createElement("h1", {}, "I'm h1 tag"), React.createElement("h2", {}, "I'm h2 tag")]),
    React.createElement("div", { id: "child2" }, [React.createElement("h1", {}, "I'm h1 tag"), React.createElement("h2", {}, "I'm h2 tag")])]);
console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);

root.render(parent);