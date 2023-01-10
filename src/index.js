import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux/es';
import { router } from './components/routes/routes';
import { RouterProvider } from 'react-router-dom';


import { store } from './components/redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);


