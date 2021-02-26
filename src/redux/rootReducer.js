// here we can combine our reducer and export the root reducer to be used in createStore method :
import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import candyReducer from "./candy/candyReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  candy: candyReducer,
});

export default rootReducer;
