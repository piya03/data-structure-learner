import React, { useState, useEffect } from "react";
import "./style.css";

let multiName = [
  "priya",
  "anil",
  "reena",
  "anil",
  "sudhir",
  "reena",
  "sunil",
  "sunil",
  "reena",
  "beena",
  "priya",
];

function unique(arr) {
  let uniqueOne = arr.filter((each, index, array) => {
    if (array.indexOf(each) === index) {
      return true;
    }
  });
  console.log(uniqueOne, "uniqueOneuniqueOneuniqueOne");
  return uniqueOne;
}

function FinduniqueName() {
  const [show, setShow] = useState(false);
  return (
    <div className="findUniqueContainer">
      <div> Find unique name</div>
      {!show && (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {multiName.map((each, index) => {
            return (
              <div key="index" className="multiBox">
                {" "}
                My name is {each}.
              </div>
            );
          })}
        </div>
      )}
      {show && (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {unique(multiName).map((each, index) => {
            return (
              <div key="index" className="multiBox">
                {" "}
                My name is {each}.
              </div>
            );
          })}
        </div>
      )}
      <button
        className="uniqueBtn"
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Show all name" : "Show Unique Name"}
      </button>
    </div>
  );
}

export default FinduniqueName;
