import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {persistStore} from 'redux-persist';
import rootReducer from './root-reducer';

let middleware = applyMiddleware(thunk);
if (__DEV__) {
  const logger = createLogger({
    level: 'info',
    collapsed: true,
  });
  middleware = applyMiddleware(thunk, logger);
}
export const store = createStore(rootReducer, middleware);
export default () => {
  const persistor = persistStore(store);
  return {store, persistor};
};
