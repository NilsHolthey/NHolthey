import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainPage from './components/MainPage';

import Privacy from './privacy/privacy';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'privacy',
    element: <Privacy />,
  },
  {
    path: 'main',
    element: <MainPage />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
