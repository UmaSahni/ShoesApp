import React from 'react'
import ProductList from '../Components/ProductList'
import SideBar from '../Components/SideBar'

const Product = () => {
  return (
    <div style={{display:"flex"}} >
      <div style={{width:"15rem", padding:"20px" , marginRight:"2rem", borderRight:"2px dotted grey"}}>
      <SideBar/>
      </div>
      
      <div>
      <ProductList/>
      </div>
      
    </div>
  )
}

export default Product