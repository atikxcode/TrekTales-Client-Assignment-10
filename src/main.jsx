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
import ViewDetails from './Pages/ViewDetails/ViewDetails';
import FilteredTouristSpot from './Pages/FilteredTouristSpot/FilteredTouristSpot';

import Country from './Pages/Countries/Country';
import PrivateRoute from './Pages/PrivateRoutes/PrivateRoute';
import PrivateRoute2 from './Pages/PrivateRoutes/PrivateRoute2';
import MyList from './Pages/MyList/MyList';
import CountryBasedFiltered from './Pages/FilteredTouristSpot/CountryBasedFiltered';
import PrivateRoute3 from './Pages/PrivateRoutes/PrivateRoute3';
import UpdateTourCard from './Pages/UpdateTourCard/UpdateTourCard';
import Happiness from './Pages/Happiness/Happiness';




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
        element: <PrivateRoute><AddTouristsSpot></AddTouristsSpot></PrivateRoute>,
      },
      {
        path: '/viewdetails/:id',
        element: <PrivateRoute2><ViewDetails></ViewDetails></PrivateRoute2>,
        loader: ({params}) => fetch(`http://localhost:5000/touristspot/${params.id}`)
      },
      
      {
        path: '/country',
        element: <Country></Country>,
        
        
      },
      {
        path: '/filteredtouristspot',
        element: <FilteredTouristSpot></FilteredTouristSpot>,
        
        
      },
      
      {
        path: '/mylist',
        element: <PrivateRoute3><MyList></MyList></PrivateRoute3>,
       
        
      },
      {
        path: '/countrybasedfiltered',
        element: <CountryBasedFiltered></CountryBasedFiltered>,
       
        
      },

      {
        path: '/updatetourcard/:id',
        element: <UpdateTourCard></UpdateTourCard>,
        loader: ({params}) => fetch(`http://localhost:5000/touristspot/${params.id}`)
      },

      {
        path: '/happiness',
        element: <Happiness></Happiness>
      }
      
      
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
