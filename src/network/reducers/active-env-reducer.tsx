import Env from '@config/env/env.json';
import { createSlice } from '@reduxjs/toolkit';

const initialState = { activeEnv: Env, debug: false };

const activeEnvSlice = createSlice({
  name: 'activeEnv',
  initialState,
  reducers: {
    setEnv: (prevState, action) => {
      const state = { ...prevState };
      state.activeEnv = action?.payload || [];
      return state;
    },
  },
});

const activeEnvReducer = activeEnvSlice.reducer;

const { setEnv } = activeEnvSlice.actions;

export { activeEnvReducer, setEnv };

