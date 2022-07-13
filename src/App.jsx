import React, { useState } from "react";
import { testArray } from "./data/data";
import "./App.css";
const App = () => {
  const sortStrChars = (str) => {
    str = str.split("").sort().join("");
    return str;
  };

  const sameLetterGroup = {};
  const getGroupHaveSameLetter = (words) => {
    words.forEach((word) => {
      const sortedWord = sortStrChars(word);
      if (sameLetterGroup[sortedWord]) {
        return sameLetterGroup[sortedWord].push(word);
      }
      sameLetterGroup[sortedWord] = [word];
    });
    return sameLetterGroup;
  };

  getGroupHaveSameLetter(testArray);

  const [text, setText] = useState("");
  const [removeParentHease, setRemoveParentHease] = useState("");
  const removeParentHeaseAndRevese = (string) => {
    let str;
    str = string.replace(/[()]/g, "");
    setRemoveParentHease(str);
  };
  return (
    <div className="wapper">
      <div>
        {Object.values(sameLetterGroup).map((d, index) => {
          return <div key={index}>{d.sort().join("-")}</div>;
        })}
      </div>
      <br />
      <br />
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            removeParentHeaseAndRevese(text);
          }}
        >
          Change
        </button>
        <button
          onClick={() => {
            setText("");
            setRemoveParentHease("");
          }}
        >
          Reset
        </button>
      </div>
      <div>Result: &nbsp;{removeParentHease}</div>
    </div>
  );
};

export default App;
