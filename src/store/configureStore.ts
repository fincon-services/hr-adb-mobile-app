import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { reduxStorage } from './storage';
import { rootReducers } from './RootReducer';
import { baseApi } from '../services/api';
import { setupListeners } from '@reduxjs/toolkit/query';

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  whitelist: ['auth'],
  stateReconciler: autoMergeLevel2,
};

// Apply persistReducer to root reducers
const persistedReducer = persistReducer(persistConfig, rootReducers);

// Create store with middleware
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware): any =>
    getDefaultMiddleware({
      serializableCheck: {
        // Required for redux-persist compatibility
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware), // Add RTK Query middleware
});

//Create persistor for use with PersistGate
const persistor = persistStore(store);

//Setup refetch listeners for RTK Query
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export { store, persistor };
