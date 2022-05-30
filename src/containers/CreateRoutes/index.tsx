import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Error404 from 'pages/Error404/Error404';
import MainPage from 'pages/MainPage/MainPage';
import PageWrapper from '../PageWrapper';

const CreateRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
};

export default CreateRoutes;
