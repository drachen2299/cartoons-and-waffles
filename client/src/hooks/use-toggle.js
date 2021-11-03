import { useState } from "react";

// the purpose of useToggle is to return a getter and a function to flip that getter to its opposite

// const [getter, setter] = useState(whatIsThis);
const useToggle = (initialState = false) => {
  // make a state called toggle with an initial value of initialState
  const [toggle, setToggle] = useState(initialState);

  // define a function called flipToggle that sets toggle to its opposite
  const flipToggle = () => setToggle(!toggle);

  return [toggle, flipToggle];
}

export default useToggle;