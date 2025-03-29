import { createSlice } from '@reduxjs/toolkit';

export interface UserDataProps {
  availableBalance: number,
  name: string,
  cardNumber: string,
  cvv: number,
  cardValidThru: number,
  type: string,
  spendingLimit: number,
  spendingLimitUsed: number,
  cardFreeze: false
}
export interface HomeState {
  userData: UserDataProps | any;
}

const initialState: HomeState = {
  userData: {},
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload
    }
  },
});

const homeReducer = homeSlice.reducer;

const { setUserData } = homeSlice.actions;

export { homeReducer, setUserData };

