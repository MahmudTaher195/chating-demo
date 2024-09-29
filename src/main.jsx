import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Loging from './Pages/Login/Loging.jsx';
import Registration from './Pages/Registration/Registration.jsx';
import Home from './Pages/Home/Home.jsx';




const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/login",
      element: <Loging/>,
    },
    {
      path: "/registration",
      element: <Registration/>,
    },

  ]);






  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
