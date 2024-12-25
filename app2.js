import React from "react";
import ReactDOM from "react-dom/client"
/* 

<div id="parent">
  <div id=child>
    <h1>I'm h1 Tag</h1>
    <h2>I'm h2 Tag</h2>
  </div>
  <div id=child2>
    <h1>I'm h1 Tag</h1>
    <h2>I'm h2 Tag</h2>
  </div>
</div>

ReactElement(Object) => HTML(Browser Understands)

*/


const parent = React.createElement('div',{id : 'parent'},[
    React.createElement('div',{id : 'child'},[
        React.createElement('h1',{},"I'm H1 Tag"),
        React.createElement('h2',{},"I'm H2 Tag")
    ])
], React.createElement('div',{id : 'child2'},[
        React.createElement('h1',{},"I'm H1 Tag"),
        React.createElement('h2',{},"I'm H2 Tag")
])
);

//Using JSX

const jsxHeading = <h1>Hello World from JSX🚀</h1>

// React Element 

const element = (
  <h1 className="reactElement">
    Hello world from react element🚀
  </h1>
)

// React Functional Component

const Component1 = () => (
  <h1 className="component1">Hello World from Component1😁</h1>
)

// Component Composition
const FunctionalComponent = () => (
  <div className="component">
    {element}
    <Component1/>               
    <h1>Hello world from React Functional Component</h1>
  </div>
)


const root2 = ReactDOM.createRoot(document.getElementById('root2'))
root2.render(<FunctionalComponent/>)

