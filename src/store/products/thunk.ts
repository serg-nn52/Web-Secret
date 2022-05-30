import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from 'network';
import { TFiltersType, TProductType } from './type';

export const getProducts = createAsyncThunk(
  `products/fetchAll`,
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/');
      const products: TProductType[] = response.data.products.map((el: any) => {
        return {
          id: el.id,
          title: el.title,
          img: el.image.desktop.x1,
          price: +el.price,
          isNew: el.is_new,
          isSecondHand: el.is_second_hand,
          inStock: el.in_stock,
        };
      });
      console.log(response.data.products);
      return products;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  },
);

export const getProductsFiltred = createAsyncThunk(
  `products/fetchFiltred`,
  async (params: TFiltersType, { rejectWithValue }) => {
    try {
      const getUrlFilterReq = () => {
        let url = '?';
        if (params.canon) {
          url += 'brands[]=1&';
        }
        if (params.nikon) {
          url += 'brands[]=9&';
        }
        if (params.minprice) {
          url += `price[min]=${params.minprice}&`;
        } else {
          url += '';
        }
        if (params.maxprice) {
          url += `price[max]=${params.maxprice}&`;
        } else {
          url += '';
        }
        console.log(params);
        return url;
      };
      const urlFilterReq = getUrlFilterReq();

      const response = await axiosInstance.get(urlFilterReq);
      const products: TProductType[] = response.data.products.map((el: any) => {
        return {
          id: el.id,
          title: el.title,
          img: el.image.desktop.x1,
          price: +el.price,
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
