import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    SET_TASKS: (state, { payload }) => {
      state.tasks = payload;
    },
    CLEAR_TASKS: (state) => {
      state.tasks = [];
    },
  },
});

export const { SET_TASKS, CLEAR_TASKS } = tasksSlice.actions;

export const selectTasks = ({ tasks }: ITasks) => tasks.tasks;

export default tasksSlice.reducer;
