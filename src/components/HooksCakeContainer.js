import React from "react";
import { useSelector } from "react-redux";

function HooksCakeContainer() {
  const numOfCakes = useSelector((state) => state.numOfCakes);
  return (
    <div>
      <h1>React Redux + Hooks</h1>
      <h2>Number of Cakes : {numOfCakes} </h2>
      <button>Buy Cake </button>
    </div>
  );
}

export default HooksCakeContainer;
