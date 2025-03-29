import AsyncStorage from "@react-native-async-storage/async-storage";
import { AnyAction, combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { homeReducer } from "./home-reducer";

const combinedReducer = combineReducers({
  homeReducer,
});

export type RootState = ReturnType<typeof combinedReducer>;

const rootReducer = (state: RootState, action: AnyAction) => {
  let stateData = state;
  if (action.type === "logout/clearReducer") {
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
