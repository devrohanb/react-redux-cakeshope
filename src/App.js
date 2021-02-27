import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import CandyContainer from "./components/CandyContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import HooksCandyContainer from "./components/HooksCandyContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import HooksIceCreamContainer from "./components/HooksIceCreamContainer";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <HooksIceCreamContainer />
        <HooksCandyContainer />
      </div>
    </Provider>
  );
}

export default App;
