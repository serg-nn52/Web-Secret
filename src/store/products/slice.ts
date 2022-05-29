import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TProductType, TStateTypeProducts } from './type';
import { getProducts } from './thunk';

const initialState: TStateTypeProducts = {
  loading: false,
  products: [],
  error: null,
};
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.pending.type]: (state: TStateTypeProducts) => {
      state.loading = true;
      state.error = null;
    },
    [getProducts.fulfilled.type]: (
      state: TStateTypeProducts,
      action: PayloadAction<TProductType[]>,
    ) => {
      state.loading = false;
      state.products = action.payload;
    },
    [getProducts.rejected.type]: (state: TStateTypeProducts) => {
      state.loading = false;
      state.error = null;
    },
  },
});

export default productsSlice.reducer;
