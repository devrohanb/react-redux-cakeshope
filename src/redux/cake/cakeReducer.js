import { BUY_CAKE } from "./cakeTypes";
// state
const initialState = {
  numOfCakes: 10,
};

// Reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        nunOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

export default cakeReducer;
