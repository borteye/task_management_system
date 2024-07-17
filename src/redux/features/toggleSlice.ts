import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  SideBarToggle: false,
  NavBarToggle: false,
  EditTaskToggle: false,
};

export const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    SET_SIDEBAR_TOGGLE: (state, { payload }) => {
      state.SideBarToggle = payload;
    },
    SET_NAVBAR_TOGGLE: (state, { payload }) => {
      state.NavBarToggle = payload;
    },
    SET_EDIT_TASK_TOGGLE: (state, { payload }) => {
      state.EditTaskToggle = payload;
    },
  },
});

export const { SET_SIDEBAR_TOGGLE, SET_NAVBAR_TOGGLE, SET_EDIT_TASK_TOGGLE } =
  toggleSlice.actions;

export const selectSideBarToggle = ({ toggle }: Toggle) => toggle.SideBarToggle;
export const selectNavBarToggle = ({ toggle }: Toggle) => toggle.NavBarToggle;
export const selectEditTaskToggle = ({ toggle }: Toggle) =>
  toggle.EditTaskToggle;

export default toggleSlice.reducer;
