import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from 'network';
import { TProductType } from './type';

export const getProducts = createAsyncThunk(
  `products/fetchAll`,
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/');
      console.log(response.data.products);
      const products: TProductType[] = response.data.products.map((el: any) => {
        return {
          id: el.id,
          title: el.title,
          img: el.image.desktop.x1,
          price: el.price,
          isNew: el.is_new,
          isSecondHand: el.is_second_hand,
          inStock: el.in_stock,
        };
      });
      return products;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  },
);
