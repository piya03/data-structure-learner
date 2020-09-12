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
  console.log("Swap -> data", data);
  function count(obj) {
    let res = [];
    for (const count in obj) {
      console.log(`${count}: ${obj[count]}`);
      res.push({
        label: count,
        value: obj[count],
      });
    }

    console.log("count -> res", res);
    setData(res);
    return res;
  }
  useEffect(() => {
    count(numbers);
  }, []);
  return (
    <div>
      <div>swap it</div>
      <div>
        {data.map((each, index) => {
          console.log("Swap -> eacggjgh", each);
          return (
            <div className="eachBox">
              <div>{each.label}</div>
              <div>{each.value}</div>
            </div>
          );
        })}
        {/* {count(obj).map((each, index, arr) => {
          console.log("Swap -> arr", arr.each);
          console.log("Swap -> each", each);
          return (
            <div>
              <div></div>
              <div></div>
            </div>
          );
        })} */}
      </div>
      <button onClick={() => count(numbers)}>Click</button>
    </div>
  );
}

export default Swap;
