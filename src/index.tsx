import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import Preloader from './components/Preloader';

import App from './containers/App';
import ErrorBoundary from './containers/ErrorBoundary';
import store, { persistor } from './store';
import './styles/index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={<Preloader />} persistor={persistor}>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </PersistGate>
      </BrowserRouter>
    </Provider>
    ,
  </React.StrictMode>,
);
