import React from "react";
import data from "./data";
import Questions from "./Questions";
import "./index.css";
function App() {
  return (
    <main className="App">
      <h2>Accordion</h2>
      <div className="underline"></div>
      {data.map((question) => (
        <Questions id={question.id} {...question} />
      ))}
    </main>
  );
}

export default App;
