import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basket: [],
  count: '',
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    clear: () => initialState,
  },
});

export const { clear } = basketSlice.actions;

export default basketSlice.reducer;
