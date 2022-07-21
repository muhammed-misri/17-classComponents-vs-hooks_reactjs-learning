/*
--------------- Hook -----------------------------------
--------------- functional components ------------------
import React from "react";
 function App() {
   return <h1>Hello</h1>; 
 }

export default App;
--------------------------------------------------------

*/

/*
      Now what the React team recommends is that if you're writing 
      new code that you should start using hooks instead of classes 
      because this is a much easier way of managing state.
      */
import React, { useState } from "react";

function FunctionalComponent() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default FunctionalComponent;
