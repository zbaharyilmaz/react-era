import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getirData = createAsyncThunk("haber/getirData", async () => {
  const res = await axios(
    "https://newsapi.org/v2/top-headlines?country=tr&apiKey=3f7b3b7b7b7b4f3b8"
  );
  return res.data.articles;
});

export const haberSlice = createSlice({
  name: "haberSlice",
  initialState: {
    haberler: [],
    loading: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getirData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getirData.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.haberler = payload;
      });
  },
});

export default haberSlice.reducer;
