import {getStore} from '../../../redux';

export function storeInitialise(actions) {
  const store = getStore();
  actions.forEach(a => store.dispatch(a));
  return store;
}
