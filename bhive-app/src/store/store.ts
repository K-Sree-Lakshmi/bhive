import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import spaceOverviewReducer from "../services/spaceOverviewService";

const rootReducer = combineReducers({
  // Add reducers here
  spaceOverview: spaceOverviewReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
