import { Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const SideBar = () => {
  const [searchParam, setSearchParam] = useSearchParams()
  const [category, setCatogry] = useState(searchParam.getAll("category") || []) // ["male, female"]
 const [order, setOrder] = useState("")
  const handleChange = (e) =>{
  let newCategory = [...category];
  const value = e.target.value

  if(newCategory.includes(value)){
    newCategory = newCategory.filter((el)=>el!==value)
  }else{
    newCategory.push(value)
  }
  setCatogry(newCategory)
  }
  console.log(category)
 
  useEffect(()=>{
    const Paramobj = {
      category
    }
    order && (Paramobj.order = order)
    
    setSearchParam(Paramobj)
  },[category, order])

 
const handleSort = (e) =>{
setOrder(e.target.value)
}


//  console.log(searchParam.getAll("category"), "This is getAll")
  return (
    <div>
      <h3> <b>Filter By</b> </h3>
      <div>
        <input type="checkbox"  value={"Men"} onChange={handleChange} checked={category.includes("Men")}  ></input>
        <label>Men</label>
        <div>
          <input type="checkbox" value={"Women"}  onChange={handleChange} checked={category.includes("Women")} ></input>
          <label>Women</label>
        </div>
        <div>
          <input type="checkbox"  value={"Kids"} onChange={handleChange} checked={category.includes("Kids")} ></input>
          <label>Kids</label>
        </div>
      </div>
      <br></br>
      <br/>
      <div>
       <Heading size={"sm"} >Sort by price</Heading>
        <div onChange={handleSort} >
        <div  >
        <input name='order' defaultChecked={order==="asc"}   value={"acs"} type="radio"  />
        <label>Asc</label>
        </div>
      
      <div>
        <input name='order' defaultChecked={order==="desc"}  value={"desc"} type="radio"  />
        <label >Dec</label>
      </div>
      </div>
      </div>
    </div>
  )
}

export default SideBar