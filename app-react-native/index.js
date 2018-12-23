import React from "react";
import { AppRegistry } from "react-native";
import { BackButton, NativeRouter } from "react-router-native";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import App from "./App";
import undoable from "./src/undo/undoable";
import cricket from "./src/Cricket/reducer";
import burma from "./src/Burma/reducer";
import inscriptionDesJoueurs from "./src/InscriptionDesJoueurs/reducer";
import { DEMARRER_BURMA } from "./src/Burma/actions";
import { DEMARRER_CRICKET } from "./src/Cricket/actions";

const store = createStore(
  combineReducers({
    inscriptionDesJoueurs,
    cricket: undoable(cricket, [DEMARRER_CRICKET]),
    burma: undoable(burma, [DEMARRER_BURMA])
  })
);

const AppDecoree = () => (
  <Provider store={store}>
    <NativeRouter>
      <BackButton>
        <App />
      </BackButton>
    </NativeRouter>
  </Provider>
);

AppRegistry.registerComponent("alkeyacricket", () => AppDecoree);

// export default from "./storybook";
