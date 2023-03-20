import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {
  const isAuthTrue = useSelector((store)=>store.authReducer.isAuth)
  // console.log(isAuthTrue)
  const location = useLocation()  
  console.log(location, "This is Location")
  return isAuthTrue ? children : <Navigate to={"/login"} state={location.pathname} />
}

export default PrivateRoute