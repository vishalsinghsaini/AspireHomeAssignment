import AsyncStorage from "@react-native-async-storage/async-storage";
import { AnyAction, combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { homeReducer } from "./home-reducer";
import { activeEnvReducer } from "./active-env-reducer";

const combinedReducer = combineReducers({
  homeReducer,
  activeEnvReducer
});

export type RootState = ReturnType<typeof combinedReducer>;

const rootReducer = (state: RootState, action: AnyAction) => {
  let stateData = state;
  if (action.type === "logout/clearReducer") { // --> in case we want to clear data on logout
    stateData = {} as RootState;
  }
  return combinedReducer(stateData, action);
};

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: [], // --> add reducer to whitelist this will make the reducer persist
  //  the data even after killing the app
};

export const persistedReducer = persistReducer<any>(persistConfig, rootReducer);
