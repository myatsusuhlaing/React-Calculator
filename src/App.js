import React from "react";
import Calculator from "./Calculator";
import "./App.css";
function App () {
  return(
    <>
    <div className="calculator h-screen md:min-w-full flex items-center justify-center bg-cyan-200">
    <Calculator />
    </div>
    </>
  )
}
export default App;