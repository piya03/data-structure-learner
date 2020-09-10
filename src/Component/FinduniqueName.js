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
  console.log("unique");
}

function FinduniqueName() {
  return (
    <div>
      <div> Find unique name</div>
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
      <button className="uniqueBtn" onClick={unique}>
        Show Unique Name
      </button>
    </div>
  );
}

export default FinduniqueName;
