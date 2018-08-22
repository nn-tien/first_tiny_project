import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
//import { middleware } from './navigation/containers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

let logger = createLogger({
  timestamps: true,
  duration: true
});

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  __DEV__
    ? compose(applyMiddleware(thunk, logger))
    : compose(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export { store, persistor };
