import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body";



const HomePage = () => {
  return (
    <div>
      <Header/>
      <Body/>
    </div>
  )
}


const root2 = ReactDOM.createRoot(document.getElementById('root2'))
root2.render(<HomePage/>)



