import { createSlice } from "@reduxjs/toolkit";
import { Token } from "../../shared/types/user";

const initialState = {
  token: null,
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    SET_TOKEN: (state, { payload }) => {
      state.token = payload.token;
    },
    CLEAR_TOKEN: (state) => {
      state.token = null;
    },
  },
});

export const { SET_TOKEN, CLEAR_TOKEN } = tokenSlice.actions;

export const selectToken = ({ token }: Token) => token.token;

export default tokenSlice.reducer;
