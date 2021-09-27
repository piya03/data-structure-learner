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
import DiffArray from "./Component/FindUnique/DiffArray";
import WhatIsInAName from "./Component/WhatIsInAName";
import MissingLetter from "./Component/MissingLetter";
import ConvertHTMLEntities from "./Component/ConvertHTMLEntities";
import ConvertBinaryToString from "./Component/ConvertBinaryToString";
function App() {
  const [Fval, setFVal] = useState("");
  const [primeVal, setPrimeVal] = useState("");
  const [prime2, setPrime2] = useState("");
  const [allPrimeNum, setAllPrimeNum] = useState([]);

  return (
    <div className="App">
      <h2 style={{ textAlign: "center" }}>Learning Data Structure</h2>
      <Box />
      <p>Learning git graph master1</p>
      <FinduniqueName />
      <div>i m from master 2</div>
      <Swap />
      <div className="btn_top_div">
        <button
          onClick={() => {
            const v = Fibonacci(7);
            console.log("Fibonacci ", v);
          }}
        >
          Fibonacci
        </button>
      </div>
      {/* ///////////////////////////////// */}
      <div className="btn_top_div">
        <input
          type="number"
          value={Fval}
          onChange={(e) => setFVal(e.target.value)}
        />

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
      {/* /////////////////// */}
      <div className="btn_top_div">
        <input
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
        </button>
      </div>
      {/* //////// */}
      <div className="btn_top_div">
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
      </div>

      <h2>All Prints in console</h2>
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

      <button
        onClick={() => {
          let res = DiffArray([1, 2, 3, 5], [1, 2, 3, 4, 15]);
          console.log("DiffArray", res);
        }}
      >
        Diff in Array
      </button>

      <button
        onClick={() => {
          let res = WhatIsInAName(
            [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],

            { apple: 1, bat: 2 }
          );
          console.log("WhatIsInAName", res);
        }}
      >
        WhatIsInAName
      </button>

      <button
        onClick={() => {
          let res = MissingLetter("abce");
          console.log("I am MissingLetter", res);
        }}
      >
        Find Missing Letter
      </button>

      <button
        onClick={() => {
          let res = ConvertHTMLEntities("Dolce & Gabbana");
          console.log("ConvertHTMLEntities", res);
        }}
      >
        Convert HTML Entities
      </button>

      <button
        onClick={() => {
          let res = ConvertBinaryToString(
            "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
          );
          console.log("ConvertBinaryToString", res);
        }}
      >
        Convert Binary To String
      </button>
      <p>100 days of coding I complete today </p>
    </div>
  );
}

export default App;
