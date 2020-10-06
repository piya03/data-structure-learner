import React, { useState } from "react";
import "./App.css";
import Box from "./Component/Box";
import FinduniqueName from "./Component/FinduniqueName";
import Swap from "./Component/Swap";
import Fibonacci from "./Component/Fibonacci/Fibonacci";
import SumOddFibonacci from "./Component/Fibonacci/SumOddFibonacci";
import AddPrimeNumber from "./Component/PrimeNumber/AddPrimeNumber";
import PrintAllPrimeNo from "./Component/PrimeNumber/PrintAllPrimeNo";
import TitleCase from "./Component/TitleCase";
import FindUniqueNumber from "./Component/FindUnique/FindUniqueNumber";
import SearchAndReplace from "./Component/SearchAndReplace";
import SeekAndDestroy from "./Component/SeekAndDestroy";
function App() {
  const [Fval, setFVal] = useState("");
  const [primeVal, setPrimeVal] = useState("");
  const [prime2, setPrime2] = useState("");
  const [allPrimeNum, setAllPrimeNum] = useState([]);
  console.log("App -> allPrimeNum", allPrimeNum);
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

      {/* ///////////////////////////////// */}
      {/* <div>
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
      </button> */}

      {/* /////////////////// */}
      {/* <input
        type="number"
        value={primeVal}
        onChange={(e) => {
          setPrimeVal(e.target.value);
        }}
      />
      <button
        onClick={() => {
          let addPrime = AddPrimeNumber(primeVal);
          alert(`primeVal value all prime number total is ${addPrime}.`);
          console.log("App -> addPrime", addPrime);
        }}
      >
        Sum All Prime Number
      </button> */}

      {/* //////// */}
      <input
        type="number"
        value={prime2}
        onChange={(e) => {
          setPrime2(e.target.value);
        }}
      />
      <button
        onClick={() => {
          let addPrime = PrintAllPrimeNo(prime2);
          setAllPrimeNum(addPrime);
        }}
      >
        All Prime Number
      </button>
      <div>
        {allPrimeNum.map((each, i) => {
          return <h1 key={i}>{each}</h1>;
        })}
      </div>

      <button
        onClick={() => {
          const res = TitleCase("I'm a little tea pot");
          console.log("TitleCaseTitleCase", res);
        }}
      >
        Title case in console
      </button>
      <button
        onClick={() => {
          const res = FindUniqueNumber(
            [1, 2, 3],
            [5, 2, 1, 4],
            [2, 1],
            [6, 7, 8]
          );
          console.log("FindUniqueNumber", res);
        }}
      >
        Find Unique number in Array
      </button>

      <button
        onClick={() => {
          let res = SearchAndReplace(
            "He is Sleeping on the couch",
            "Sleeping",
            "sitting"
          );
          console.log("SearchAndReplace", res);
        }}
      >
        Search and Replace
      </button>

      <button
        onClick={() => {
          let res = SeekAndDestroy([1, 2, 3, 1, 2, 3], 2, 3);
          console.log("SeekAndDestroy", res);
        }}
      >
        Seek And Destroy
      </button>
    </div>
  );
}

export default App;
