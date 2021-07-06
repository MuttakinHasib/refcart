import logger from 'redux-logger';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import rootReducers from './reducers';
import storage from './storage';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['auth/attemptSignup'],
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
  middleware: [...getDefaultMiddleware({ serializableCheck: false }), logger],
});

export const persistor = persistStore(store);
