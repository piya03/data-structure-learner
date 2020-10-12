import React, { useState, useEffect } from "react";
import "./style.css";

let numbers = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
};

function Swap() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [formatData, setFormatData] = useState([]);
  console.log("Swap -> formatData", formatData);
  function count(obj) {
    let res = [];
    for (const count in obj) {
      console.log(`${count}: ${obj[count]}`);
      res.push({
        label: count,
        value: obj[count],
      });
    }
    setData(res);
    return res;
  }

  function swapCount(anyobj) {
    console.log("swapCount -> anyobj", Object.keys(anyobj));
    let arr = Object.keys(anyobj);
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      res.push({
        label: anyobj[arr[i]],
        value: arr[i],
      });
    }
    setFormatData(res);
    return res;
  }
  useEffect(() => {
    count(numbers);
  }, []);
  return (
    <div className="swapContainer">
      <div>swap it</div>
      <div>
        {!show &&
          data.map((each, index) => {
            console.log("Swap -> eacggjgh", each);
            return (
              <div className="eachBox">
                <div>{each.label}</div>
                <div>{each.value}</div>
              </div>
            );
          })}
        {show &&
          formatData.map((each, index) => {
            return (
              <div className="eachBox">
                <div>{each.label}</div>
                <div>{each.value}</div>
              </div>
            );
          })}
      </div>
      <button
        className="uniqueBtn"
        onClick={() => {
          setShow(!show);
          swapCount(numbers);
        }}
      >
        SWAP
      </button>
    </div>
  );
}

export default Swap;
