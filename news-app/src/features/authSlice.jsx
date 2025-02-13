import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    email: "",
    password: "",
  },
  reducers: {
    createUser: (state, { payload }) => {
      state.email = payload.email;
      state.password = payload.password;
    },
    logoutUser: (state) => {
      state.email = "";
      state.password = "";
    },
  },
});

export const { createUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;