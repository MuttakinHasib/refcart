import logger from 'redux-logger';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import rootReducers from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  blacklist:['auth']
};

const rootReducer = (state, action) => {
  if (action.type === 'auth/logout') {
    Object.keys(state).forEach(key => {
      storage.removeItem(`persist:${key}`);
    });
    state = undefined;
  }
  return rootReducers(state, action);
};

const reducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), logger],
});

export const persistor = persistStore(store);
