import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isFetching: false,
    error: false,
  },

  reducers: {
    getUsersStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getUsersSuccess: (state, action) => {
      state.isFetching = false;
      state.users = action.payload;
      state.error = false;
    },
    getUsersFail: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { getUsersFail, getUsersStart, getUsersSuccess } =
  usersSlice.actions;

export default usersSlice.reducer;
