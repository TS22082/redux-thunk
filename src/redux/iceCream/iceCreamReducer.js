import { buyIceCream } from "./iceCreamActions";
import { BUY_ICE_CREAM } from "./iceCreamTypes";

const initialState = {
  iceCreams: 20,
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        iceCreams: state.iceCreams - 1,
      };

    default:
      return state;
  }
};

export default iceCreamReducer;
