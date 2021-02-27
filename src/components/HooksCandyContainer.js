import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCandy } from "../redux";

function HooksCandyContainer() {
  const numOfCandies = useSelector((state) => state.candy.numOfCandies);
  const dispatch = useDispatch();
  return (
    <>
      <h1>React Redux + Hooks : </h1>
      <h2>Number of Candies : {numOfCandies}</h2>
      <button
        onClick={() => {
          dispatch(buyCandy());
        }}
      >
        Buy Candy
      </button>
    </>
  );
}

export default HooksCandyContainer;
