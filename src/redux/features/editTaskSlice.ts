import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editTask:{}
};

export const editTaskSlice = createSlice({
  name: "editTask",
  initialState,
  reducers: {
    SET_EDIT_TASK: (state, { payload }) => {
      state.editTask = payload;
    },
    CLEAR_EDIT_TASK: (state) => {
      state.editTask = {};
    },
  },
});

export const { SET_EDIT_TASK, CLEAR_EDIT_TASK } = editTaskSlice.actions;

export const selectEditTask = ({ editTask }: EditTask) => editTask.editTask;

export default editTaskSlice.reducer;
