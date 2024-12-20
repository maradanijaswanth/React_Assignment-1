import React from "react";
import ReactDOM from "react-dom/client";

const rootReact = document.getElementById("react");
const root = ReactDOM.createRoot(rootReact);  


// created nested react elements

const NestedElementComponent=function(){
    return(
        <div>
            <p>using nested  react elements </p>
            <h2>Work done</h2>
        </div>
        
    )
}





// hello world react component

const FirstComponent=function(){
    return (
     <>
    <h1>Hello world using react component</h1>
    <NestedElementComponent/>
    </>
    )
}

// using root.render

root.render(<FirstComponent/>)
