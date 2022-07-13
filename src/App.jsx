import React from "react";
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
  return (
    <div>
      <div>
        {Object.values(sameLetterGroup).map((d, index) => {
          return <div key={index}>{d.sort().join("-")}</div>;
        })}
      </div>
    </div>
  );
};

export default App;
