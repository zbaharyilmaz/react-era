import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  const res = await axios(
    "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=a64a7c54deea4bcb851217c8579a155d"
  );
  return res.data.articles;
});

export const newsSlice = createSlice({
  name: "newsSlice",
  initialState: {
    articles: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNews.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.articles = payload;
      });
  },
});

export default newsSlice.reducer;