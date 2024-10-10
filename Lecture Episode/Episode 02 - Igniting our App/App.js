import React from "react";
import ReactDOM from "react-dom"
const root = ReactDOM.createRoot(document.getElementById("react"));

/*
<div id="parent">
    <div id="child1">
        <h1></h1>
        <h2></h2>
    </div>
    <div id="child2">
        <h1></h1>
        <h2></h2>
    </div>
</div>
*/
const parent = React.createElement("div",{id:"parent",style:{height:"600px",width:"1200px",border:"2px solid black",margin:"10px" ,display:"flex"}},[React.createElement("div",{id:"child1",style:{height:"300px",width:"300px",border:"3px solid black",margin:"150px"}},[React.createElement("h1",{},"Hello i'm h1 tag from child1"),React.createElement("h2",{},"Hello i'm h2 tag from child1")]),React.createElement("div",{id:"child2",style:{height:"300px",width:"300px",border:"2px solid black",margin:"150px"}},[React.createElement("h1",{},"Hello i'm h1 tag child2"),React.createElement("h2",{},"Hello i'm h2 tag from child2")])]);
console.log(parent);
root.render(parent);