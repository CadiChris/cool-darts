import React from "react";
import { AppRegistry } from "react-native";
import { NativeRouter } from "react-router-native";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import App from "./App";
import undoable from "./src/undo/undoable";
import cricket from "./src/Cricket/reducer";
import burma from "./src/Burma/reducer";
import inscriptionDesJoueurs from "./src/InscriptionDesJoueurs/reducer";

const store = createStore(
  combineReducers({
    inscriptionDesJoueurs,
    cricket: undoable(cricket),
    burma
  })
);

const AppDecoree = () => (
  <Provider store={store}>
    <NativeRouter>
      <App />
    </NativeRouter>
  </Provider>
);

AppRegistry.registerComponent("alkeyacricket", () => AppDecoree);

// export default from "./storybook/index";
