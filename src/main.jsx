import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root';
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import Navbar from './Pages/Navbar/Navbar';
import Footer from './Pages/Footer/Footer';
import AuthProvider from './Providers/AuthProvider';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:'/navbar',
        element: <Navbar></Navbar>,
      },
      {
        path: '/footer',
        element: <Footer></Footer>,
      },
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />

    </AuthProvider>
  </React.StrictMode>,
)
