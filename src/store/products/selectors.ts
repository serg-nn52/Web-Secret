import { RootState } from 'store/type';

export const getIsLoading = (store: RootState) => store.products.loading;
export const getQuantityProducts = (store: RootState) =>
  store.products.products.length;
export const getAllProducts = (store: RootState) => store.products.products;
export const getFilterState = (store: RootState) => store.products.filters;
