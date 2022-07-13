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

  const reverse = (strArray, len, i) => {
    if (len < i) {
      let char = strArray[len];

      strArray[len] = strArray[i];
      strArray[i] = char;
      reverse(strArray, len + 1, i - 1);
    }
  };

  const reverseParentheses = (str, len) => {
    let string = [];
    for (let i = 0; i < len; i++) {
      if (str[i] === "(") {
        string.push(i);
      } else if (str[i] === ")") {
        let strArray = [...str];
        reverse(strArray, string[string.length - 1] + 1, i);
        str = [...strArray];
        string.pop();
      }
    }

    let result = "";
    for (let i = 0; i < len; i++) {
      if (str[i] !== ")" && str[i] !== "(") {
        result += str[i];
      }
    }
    setRemoveParentHease(result);
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
            reverseParentheses(text, text.length);
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
