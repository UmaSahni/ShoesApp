import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../Pages/Admin'
import Edit from '../Pages/Edit'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Product from '../Pages/Product'
import PrivateRoute from './PrivateRoute'

const MainRoute = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/product/:id" element={
            
            <PrivateRoute>
            <Edit/>
            </PrivateRoute>
            
            }/>
            <Route path="admin" element={
            
            <PrivateRoute>
            <Admin/>
            </PrivateRoute>
           
           } /> 
            <Route path="*" element={"Page Not Found 404 Error"}/>
        </Routes>
    </div>
  )
}

export default MainRoute