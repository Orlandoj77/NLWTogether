import { useState } from "react";

function Button() {
  // let counter = 0;
  const [counter, setCounter] = useState(0);
  function incremente() {
    setCounter(counter + 1);
    console.log(counter);
  }
  return <button onClick={incremente}>{counter}</button>;
}

export default Button;
