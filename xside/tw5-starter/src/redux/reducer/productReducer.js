import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  selected: '',
  products: [],
  categories: [],
  loading: false,
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios('https://fakestoreapi.com/products');
    return response.data;
  }
);

export const getCategories = createAsyncThunk(
  'products/getCategories',
  async () => {
    const response = await axios(
      'https://fakestoreapi.com/products/categories'
    );
    return response.data;
  }
);

export const fetchWithCategorie = createAsyncThunk(
  'products/fetchWithCategorie',
  async (category) => {
    const response = await axios(
      `https://fakestoreapi.com/products/category/${category}`
    );
    return response.data;
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    clear: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchWithCategorie.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWithCategorie.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      });
  },
});

export const { setCategories, setProducts, setSelected, setLoading, clear } =
  productSlice.actions;

export default productSlice.reducer;
