import { useAppDispatch } from 'hooks/useAppDispatch';
import React, { useEffect } from 'react';
import { getProducts } from 'store/products/thunk';
import CreateRoutes from '../CreateRoutes';

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return <CreateRoutes />;
};

export default App;
