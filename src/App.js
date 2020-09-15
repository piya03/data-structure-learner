import React, { useState } from "react";
import "./App.css";
import Box from "./Component/Box";
import FinduniqueName from "./Component/FinduniqueName";
import Swap from "./Component/Swap";
import Fibonacci from "./Component/Fibonacci/Fibonacci";
import SumOddFibonacci from "./Component/Fibonacci/SumOddFibonacci";

function App() {
  const [Fval, setFVal] = useState("");
  console.log("App -> Fval", Fval);
  return (
    <div className="App">
      <div>hello</div>
      {/* <Box /> */}
      {/* <FinduniqueName /> */}
      {/* <Swap /> */}
      {/* 
      <button
        onClick={() => {
          const v = Fibonacci(7);
          console.log("App -> v ", v);
        }}
      >
        Fibonacci
      </button> */}
      <div>
        <input
          type="number"
          value={Fval}
          onChange={(e) => setFVal(e.target.value)}
        />
      </div>
      <button
        onClick={() => {
          let see = SumOddFibonacci(Fval);
          alert(`Sum of all odd Fibonacci ${see}`);
          console.log("App -> see", see);
        }}
      >
        Sum All Odd Fibonacci
      </button>
    </div>
  );
}

export default App;
