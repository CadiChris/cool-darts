import React from 'react';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {getStore} from '../../../redux';

/***
 * https://www.native-testing-library.com/docs/setup#custom-render
 ***/

const WrapperStore = store => ({children}) => (
  <Provider store={store}>{children}</Provider>
);

const storeDeProd = getStore();
export const renderAvecStore = (ui, store = storeDeProd) =>
  render(ui, {wrapper: WrapperStore(store)});
