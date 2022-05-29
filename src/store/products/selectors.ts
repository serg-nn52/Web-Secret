import { RootState } from 'store/type';

export const getIsLoading = (store: RootState) => store.products.loading;
export const getQuantityProducts = (store: RootState) =>
  store.products.products.length;
