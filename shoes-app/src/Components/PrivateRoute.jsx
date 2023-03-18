import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
  const isAuthTrue = useSelector((store)=>store.authReducer.isAuth)
  console.log(isAuthTrue)
    return isAuthTrue ? children : <Navigate to={"/login"} />
}

export default PrivateRoute