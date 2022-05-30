export type TStateTypeProducts = {
  loading: boolean;
  products: TProductType[];
  error: any | null;
  filters: TFiltersType;
};

export type TProductType = {
  id: string;
  title: string;
  img: string;
  price: number;
  isNew: boolean;
  isSecondHand: boolean;
  inStock: boolean;
};

export type TFiltersType = {
  canon: boolean;
  nikon: boolean;
  minprice: string;
  maxprice: string;
};
