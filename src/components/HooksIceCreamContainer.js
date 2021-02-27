import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux";

function HooksIceCreamContainer() {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();
  return (
    <>
      <h1>React Redux + Hooks : </h1>
      <h2>Number of IceCreams : {numOfIceCreams}</h2>
      <button
        onClick={() => {
          dispatch(buyIceCream());
        }}
      >
        Buy IceCream
      </button>
    </>
  );
}

export default HooksIceCreamContainer;
