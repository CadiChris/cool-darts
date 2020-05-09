import React from 'react';
import {AppRegistry} from 'react-native';
import {getStore} from './redux';
import App from './App';
import {name as appName} from './app.json';

const store = getStore();

AppRegistry.registerComponent(appName, () => () => <App store={store} />);
