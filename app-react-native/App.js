import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import cricket from "./src/Cricket/reducer";
import Cricket from "./src/Cricket/Cricket";
import SplashScreen from "./src/Cricket/Technique/SplashScreen";
import undoable from "./src/undo/undoable";

let store = createStore(
  combineReducers({
    cricket: undoable(cricket)
  })
);

export default () => (
  <Provider store={store}>
    <SplashScreen dureeDuSplash={2750}>
      <Cricket />
    </SplashScreen>
  </Provider>
);

// export default from './storybook';
