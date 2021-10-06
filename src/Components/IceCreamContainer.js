import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

const IceCreamContainer = () => {
  const state = useSelector((state) => state.iceCream);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Num of ice creams - {state.iceCreams}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Sub</button>
    </div>
  );
};

export default IceCreamContainer;
