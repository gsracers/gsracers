import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import EngineLoading from './component/Enginereving.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

// Lazy loading components
const Home = lazy(() => import('./pages/Home.jsx'));
const Aboutpage = lazy(() => import('./pages/Aboutpage.jsx'));
const Sponsorshippage = lazy(() => import('./pages/Sponsorshippage.jsx'));
const Teampage = lazy(() => import('./pages/Teampage.jsx'));

// Fallback loader component
const Loading = () => <div>Loading...</div>;

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Suspense fallback={<EngineLoading />}><Home /></Suspense> },
      { path: '/aboutus', element: <Suspense fallback={<EngineLoading />}><Aboutpage /></Suspense> },
      { path: '/sponsorship', element: <Suspense fallback={<EngineLoading />}><Sponsorshippage /></Suspense> },
      { path: '/team', element: <Suspense fallback={<EngineLoading />}><Teampage /></Suspense> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
