import { configureStore } from "@reduxjs/toolkit";
import yetkiSlice from "../features/yetkiSlice";
import haberSlice from "../features/haberSlice";

const store = configureStore({
  reducer: {
    yetkiSlice: yetkiSlice, 
    haberSlice: haberSlice,
  },
});

export default store;
