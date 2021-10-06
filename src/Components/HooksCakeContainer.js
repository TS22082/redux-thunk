import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

const HooksCakeContainer = () => {
  const state = useSelector((state) => state.cake);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Num of cakes - {state.numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Sub</button>
    </div>
  );
};

export default HooksCakeContainer;
