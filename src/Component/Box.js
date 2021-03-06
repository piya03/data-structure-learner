import React, { useState, useEffect } from "react";
import "./style.css";

let array = [1, [2, 3]];
//flatten
function test(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(test(arr[i]));
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}
function Box() {
  const [show, setshow] = useState(false);
  return (
    <div className="container1">
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
