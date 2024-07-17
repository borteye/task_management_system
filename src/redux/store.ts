import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import tokenReducer from "./features/tokenSlice";
import userReducer from "./features/userSlice";
import toggleReducer from "./features/toggleSlice";
import allUsersReducer from "./features/allUsersSlice";
import tasksReducer from "./features/tasksSlice";
import editTaskReducer from "./features/editTaskSlice";

const rootReducer = combineReducers({
  token: tokenReducer,
  user: userReducer,
  toggle: toggleReducer,
  allUsers: allUsersReducer,
  tasks: tasksReducer,
  editTask: editTaskReducer
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
