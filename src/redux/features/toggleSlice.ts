import { createSlice } from "@reduxjs/toolkit";
import { Toggle } from "../../shared/types/toggle";

const initialState = {
  SideBarToggle: false,
  NavBarToggle: false,
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
  },
});

export const { SET_SIDEBAR_TOGGLE, SET_NAVBAR_TOGGLE } = toggleSlice.actions;

export const selectSideBarToggle = ({ toggle }: Toggle) => toggle.SideBarToggle;
export const selectNavBarToggle = ({ toggle }: Toggle) => toggle.NavBarToggle;

export default toggleSlice.reducer;
