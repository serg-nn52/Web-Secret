export type TStateTypeProducts = {
  loading: boolean;
  products: TProductType[];
  error: any | null;
};

export type TProductType = {
  id: string;
  title: string;
  img: string;
  price: string;
  isNew: boolean;
  isSecondHand: boolean;
  inStock: boolean;
};
