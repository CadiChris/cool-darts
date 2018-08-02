import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import App from "./App";
import undoable from "./src/undo/undoable";
import cricket from "./src/Cricket/reducer";

const store = createStore(
  combineReducers({
    cricket: undoable(cricket)
  })
);

const AppAvecStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent("alkeyacricket", () => AppAvecStore);

// export default from "./storybook/index";
