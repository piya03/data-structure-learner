import React, { useState, useEffect } from "react";
import "./style.css";

let array = [1, [2, 3]];
console.log("array start", array);

function test(arr) {
  console.log("test -> arr", arr);
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(test(arr[i]));
    } else {
      res.push(arr[i]);
    }
    console.log("test -> res", res);
  }
  return res;
}
console.log(test(array), "hhhghjghjgf");
function Box() {
  const [show, setshow] = useState(false);
  return (
    <div className="App">
      {!show && (
        <div className="box1">
          {array[0]}
          <div className="box2">{array[1][0]}</div>
          <div className="box3">{array[1][1]}</div>
        </div>
      )}
      <div className="container">
        {show &&
          test(array).map((each, index) => {
            return <span className="box4">{each}</span>;
          })}
      </div>
      <button
        className="button"
        onClick={() => {
          test(array);
          setshow(!show);
        }}
      >
        {" "}
        split
      </button>
    </div>
  );
}

export default Box;
