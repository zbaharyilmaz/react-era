import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getirData = createAsyncThunk("haber/getirData", async () => {
  const res = await axios(
    "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=a64a7c54deea4bcb851217c8579a155d"
  );
  return res.data.articles;
});

export const haberSlice = createSlice({
  name: "haberSlice",
  initialState: {
    haberler: [],
    loading: false,
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
