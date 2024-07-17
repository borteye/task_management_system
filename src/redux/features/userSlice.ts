import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userid: null,
  username: null,
  email: null,
  profile: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SET_USER: (state, { payload }) => {
      state.userid = payload.userid;
      state.username = payload.username;
      state.email = payload.email;
      state.profile = payload.profile;
    },
    CLEAR_USER: (state) => {
      state.userid = null;
      state.username = null;
      state.email = null;
      state.profile = null;
    },
  },
});

export const { SET_USER, CLEAR_USER } = userSlice.actions;

export const selectUserId = ({ user }: IUser) => user.userid;
export const selectUsername = ({ user }: IUser) => user.username;
export const selectUserEmail = ({ user }: IUser) => user.email;
export const selectUserProfile = ({ user }: IUser) => user.profile;

export default userSlice.reducer;
