import React, { useEffect, useState } from 'react'
import { Button, Center, Container, FormControl, FormLabel, Input, Select, SelectField } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { PatchProduct } from '../Redux/productReducer/action'
const Edit = () => {
 const [data, setData] = useState({})
  const {id} = useParams()
 const product = useSelector((store)=> store.productReducer.product)
const dispatch = useDispatch()
 useEffect(()=>{
  const data = product.find((el)=>el.id === +id)
  setData(data)
 },[])

const handleChange= (e) =>{
  const {name, value} = e.target
  setData((pre)=>{
    return {...pre, [name]:value}
  })
  console.log(name, value)
}
const handleClick = () =>{
dispatch(PatchProduct(data, id))

}
 return (
    <div>
      <Container>
        <FormControl>
                <FormLabel> Edit Product Title {id}</FormLabel>
                <Input value={data.title}  onChange={handleChange}   name='title' placeholder='Product Title' />

                <FormLabel> Edit Product Image</FormLabel>
                <Input value={data.image}  onChange={handleChange}  name='image'placeholder='Product Image' />

                <FormLabel> Edit Product Brand</FormLabel>
                <Input value={data.brand} onChange={handleChange}  name='brand' placeholder='Product Brand' />

                <FormLabel> Edit Product Price</FormLabel>
                <Input value={data.price} onChange={handleChange}  type={"number"} name={"price"} placeholder='Product Price' />

                <FormLabel> Edit Product Discount</FormLabel>
                <Input value={data.discount}  onChange={handleChange} type={"number"}  name={"discount"}  placeholder='Product Discount' />

                <FormControl>
                    <FormLabel>Category</FormLabel>
                    <SelectField value={data.gender}  onChange={handleChange} width={"100%"} name='gender' placeholder='Select country'>
                        <option>Women</option>
                        <option>Men</option>
                        <option>Kids</option>
                    </SelectField>
                </FormControl>
            </FormControl>
            <Center>
            <Button onClick={handleClick} colorScheme='blue' variant='ghost' >
            Submit
            </Button>
            </Center>


        </Container>
    </div>
  )
}

export default Edit