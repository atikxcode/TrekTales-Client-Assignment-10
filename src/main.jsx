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
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AllTouristSpots from './Pages/AllTouristSpots/AllTouristSpots';
import AddTouristsSpot from './Pages/AddTouristsSpot/AddTouristsSpot';
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
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/alltouristspot',
        element: <AllTouristSpots></AllTouristSpots>,
      },
      {
        path: '/addtouristspot',
        element: <AddTouristsSpot></AddTouristsSpot>,
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
