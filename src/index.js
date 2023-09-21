import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MosquesPage from './Components/MosquesPage/MosquesPage';
import Areas from './Components/Areas/Areas';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const routers = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/MosquesPage',
    element: <MosquesPage />,
  },
  {
    path: '/Areas',
    element: <Areas />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>
);
