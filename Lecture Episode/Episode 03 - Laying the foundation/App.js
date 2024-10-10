import React from "react";
import ReactDOM from "react-dom/client"

// React Element
const heading = React.createElement("h1",{id:"heading"},"I'm React Elemet 🚀")
console.log(heading)


//JSX
const jsxHeading=<h1>I'm from JSX</h1>
console.log(jsxHeading);




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);