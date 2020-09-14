import React from "react";
import "./App.css";
import Box from "./Component/Box";
import FinduniqueName from "./Component/FinduniqueName";
import Swap from "./Component/Swap";
import Fibonacci from "./Component/Fibonacci";
function App() {
  return (
    <div className="App">
      <div>hello</div>
      {/* <Box /> */}
      {/* <FinduniqueName /> */}
      {/* <Swap /> */}

      <button
        onClick={() => {
          const v = Fibonacci(7);
          console.log("App -> v ", v);
        }}
      >
        Fibonacci
      </button>
    </div>
  );
}

export default App;
