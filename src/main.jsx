  import React from 'react'
  import ReactDOM from 'react-dom/client'
  import App from './App.jsx'
  import Aboutpage from './component/Aboutpage.jsx'
  import './index.css'
  import { createBrowserRouter, RouterProvider } from 'react-router-dom'
  import Home from './component/Home.jsx'
  import Sponsorshippage from './component/Sponsorshippage.jsx'
  import Contactus from './component/Contactus.jsx'
  import Teampage from './component/Teampage.jsx'

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {path: "/", element: <Home/>},
        {path: "/aboutus", element: <Aboutpage/>},
        {path: "/sponsorship", element: <Sponsorshippage/>},
        {path: "/team", element: <Teampage/>}
      
      ]
    },
  
  ]);

  ReactDOM.createRoot(document.getElementById('root')).render(
    
      <RouterProvider router={router}/>
  
  )
