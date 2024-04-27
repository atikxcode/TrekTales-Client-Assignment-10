import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const PrivateRoute2 = ({children}) => {

  const {user, loading} = useContext(AuthContext);
  const location = useLocation();

  if(loading){
    return <div className="mx-auto container flex justify-center"><span className=" loading loading-dots loading-lg"></span></div> 
  }

  if(user){
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute2;