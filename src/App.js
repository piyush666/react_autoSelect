import React, { useState, useCallback, useEffect } from "react";
import logo from "./logo.svg";

import "./App.css";
import { AutoSelect } from "./AutoSelect";
function App() {
  const [ops, setOps] = useState([]);
  useEffect(() => {
    fetchTheData("some");
  }, []);
  function fetchTheData(query) {
    if (query && query.length > 0) {
      fetch("https://jsonplaceholder.typicode.com/todos/")
        .then((response) => response.json())
        .then((json) => {
          let i = 0;
          const newArray = [];
          json.forEach((element, index) => {
            if (index < 100) newArray[index] = element;
            else return;
          });
          const newArr = newArray.map((e, p) => ({
            label: e.title,
            value: e.title,
          }));
          setOps(newArr);
        });
    }
  }

  return (
    <div>
      <AutoSelect ops={ops} fetchTheData={fetchTheData} />
    </div>
  );
}

export default App;
