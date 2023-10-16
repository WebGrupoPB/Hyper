import React from 'react'
/* import ReactDOM from 'react-dom/client' */
import App from './App.jsx'
import Home from './routes/Home.jsx'
import Maps from './components/Maps.jsx'


import './index.css'

import * as ReactDOM from "react-dom/client";
import {
   createBrowserRouter,
   RouterProvider,
 } from "react-router-dom";
 
 const router = createBrowserRouter([
   {
     path: "/",
     element: <Home />,
     errorElement: <h1>Error Page</h1>,
   },

  {
    path: "/map",
    element: <Maps />,
  },

 ]); 

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
   <React.StrictMode>
     <RouterProvider router={router} />
   </React.StrictMode>
 );
