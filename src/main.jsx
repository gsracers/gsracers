import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Aboutpage from './components/Aboutpage.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {path: "/", element: <Home/>},
      {path: "/aboutus", element: <Aboutpage/>}
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}/>
 
)
