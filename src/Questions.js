import React, { useState } from "react";
const Questions = ({ title, info }) => {
  const [show, setShow] = useState(false);
  return (
    <article className="question">
      <div className="info">
        <h3>{title}</h3>
        <p>{show ? info : ""}</p>
      </div>
      <div className="btn">
        <button onClick={() => setShow(!show)}>{show ? " - " : " + "}</button>
      </div>
    </article>
  );
};

export default Questions;
