import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { filtres } from '../../constants/index';

import { getProducts, getProductsFiltred } from './thunk';
import { TProductType, TStateTypeProducts } from './type';

const initialState: TStateTypeProducts = {
  loading: false,
  products: [],
  error: null,
  filters: {
    canon: false,
    nikon: false,
    minprice: '',
    maxprice: '',
  },
};
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setBrandFilter(
      state: TStateTypeProducts,
      action: PayloadAction<{ name: string; value: boolean }>,
    ) {
      if (action.payload.name === filtres.CANON) {
        state.filters!.canon = action.payload.value;
      }
      if (action.payload.name === filtres.NIKON) {
        state.filters!.nikon = action.payload.value;
      }
    },
    setPriceFilter(
      state: TStateTypeProducts,
      action: PayloadAction<{ name: string; value: string }>,
    ) {
      if (action.payload.name === filtres.MINPRICE) {
        state.filters!.minprice = action.payload.value;
      }
      if (action.payload.name === filtres.MAXPRICE) {
        state.filters!.maxprice = action.payload.value;
      }
    },
  },
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
    [getProductsFiltred.pending.type]: (state: TStateTypeProducts) => {
      state.error = null;
      state.loading = true;
    },
    [getProductsFiltred.fulfilled.type]: (
      state: TStateTypeProducts,
      action: PayloadAction<TProductType[]>,
    ) => {
      state.loading = false;
      state.products = action.payload;
    },
    [getProductsFiltred.rejected.type]: (state: TStateTypeProducts) => {
      state.loading = false;
      state.error = null;
    },
  },
});

export const { setBrandFilter, setPriceFilter } = productsSlice.actions;
export default productsSlice.reducer;
