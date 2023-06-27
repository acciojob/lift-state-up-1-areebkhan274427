import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <h1>Parent Component</h1>
      <Child setModal={setShowModal} modal={showModal}/>
      {showModal ? (
        <>
          <h3>Modal Content</h3>
          <p>This is the modal content</p>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Parent;
