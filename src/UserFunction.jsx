import React, { useState } from "react";

export const UserFunction = () => {
  const [count, setState] = useState(0);
  console.log("its in  Function");
  return (
    <>
      {console.log("it was in return render of function")}
      <h1>{count}:counted</h1>
      <button
        onClick={() => {
          setState(count + 1);
        }}
      >
        Add me in UserFunction{" "}
      </button>
    </>
  );
};
