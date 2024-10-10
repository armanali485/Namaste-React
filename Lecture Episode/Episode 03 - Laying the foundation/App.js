import React from "react";
import ReactDOM from "react-dom/client"

//React Element root
const heading = React.createElement("h1",{id:"heading"},"I'm React Elemet 🚀")
console.log(heading)


//React Element
const jsxHeading=(<h1 id="heading">
    I'm React Element
    </h1>);
console.log(jsxHeading);
//React Component
const ReactComponent=()=>{
   
    return (<div>
        {jsxHeading}
        <h1>I'm React Component</h1></div>);
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ReactComponent/>);