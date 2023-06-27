import React from "react";

function Child({ modal, setModal }) {
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={() => setModal(!modal)}>Show Modal</button>
    </div>
  );
}

export default Child;
