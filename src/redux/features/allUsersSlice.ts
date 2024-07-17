import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allUsers: [],
};

export const allUsersSlice = createSlice({
  name: "allUsers",
  initialState,
  reducers: {
    SET_ALL_USERS: (state, { payload }) => {
      state.allUsers = payload;
    },
    CLEAR_ALL_USERS: (state) => {
      state.allUsers = [];
    },
  },
});

export const { SET_ALL_USERS, CLEAR_ALL_USERS } = allUsersSlice.actions;

export const selectAllUsers = ({ allUsers }: IallUsers) => allUsers.allUsers;

export default allUsersSlice.reducer;
