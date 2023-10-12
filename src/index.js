import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MosquesPage from './Components/MosquesPage/MosquesPage';
import Areas from './Components/Areas/Areas';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import VideoList from './Components/Video/VideoList';
import Projects from './Components/Projects/Projects';
import Spinner from './Components/Spinner/Spinner';

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
  {
    path: '/Videos',
    element: <VideoList />,
  },
  {
    path: '/Hakkinda',
    element: <Projects />,
  },
  {
    path: '/Spinner',
    element: <Spinner />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <React.Suspense fallback={<Spinner />}>
      <RouterProvider router={routers} />
    </React.Suspense>
  </React.StrictMode>
);
