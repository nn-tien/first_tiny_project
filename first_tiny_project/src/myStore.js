import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import { middleware } from './navigation/containers';

let logger = createLogger({
  timestamps: true,
  duration: true
});

const tilteStore = createStore(
  rootReducer,
  compose(applyMiddleware(middleware, thunk, logger))
);

export default tilteStore;
