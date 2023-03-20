import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const SideBar = () => {
  const [searchParam, setSearchParam] = useSearchParams()
  const [category, setCatogry] = useState(searchParam.getAll("category") || []) // ["male, female"]
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
  setSearchParam(Paramobj)
  },[category])
 console.log(searchParam.getAll("category"), "This is getAll")
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
    </div>
  )
}

export default SideBar