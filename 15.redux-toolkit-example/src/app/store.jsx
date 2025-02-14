import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import newsSlice from "../features/newsSlice";

const store = configureStore({
  reducer: {
    authSlice: authSlice, 
    newsSlice: newsSlice,
  },
});

export default store;
