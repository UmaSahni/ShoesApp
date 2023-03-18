import { Button, Center, Container, FormControl, FormLabel, Input, Select, SelectField } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddProduct } from '../Redux/productReducer/action'
const initialState = {
    image:"",
    price:"",
    brand:"",
    discount:"",
    title:"",
    gender:"",
}
const Admin = () => {
    const [product , setProduct] = useState(initialState)
    const dispatch = useDispatch()
    const handleChange = (e) =>{
       const {name, value} = e.target
        
       setProduct(pre => {
            return {...pre, [name]:value}
        })
    }
   const handleSubmit = () =>{
   dispatch(AddProduct(product))
    setProduct(initialState)
   }
    return (
        <Container>
            <FormControl>
                <FormLabel> Add Product Title</FormLabel>
                <Input name='title'value={product.title} onChange={(e)=>handleChange (e) } placeholder='Product Title' />

                <FormLabel> Add Product Image</FormLabel>
                <Input name='image'value={product.image} onChange={(e)=>handleChange (e) } placeholder='Product Image' />

                <FormLabel> Add Product Brand</FormLabel>
                <Input name='brand'value={product.brand} onChange={(e)=>handleChange (e) } placeholder='Product Brand' />

                <FormLabel> Add Product Price</FormLabel>
                <Input type={"number"} name='price'value={product.price} onChange={(e)=>handleChange (e) } placeholder='Product Price' />

                <FormLabel> Add Product Discount</FormLabel>
                <Input type={"number"} name='discount'value={product.discount} onChange={(e)=>handleChange (e) } placeholder='Product Discount' />

                <FormControl>
                    <FormLabel>Category</FormLabel>
                    <SelectField  width={"100%"} name='gender'value={product.gender} onChange={(e)=>handleChange (e)} placeholder='Select country'>
                        <option>Women</option>
                        <option>Men</option>
                        <option>Kids</option>
                    </SelectField>
                </FormControl>
            </FormControl>
            <Center>
            <Button onClick={handleSubmit}  colorScheme='blue' variant='ghost' >
            Submit
            </Button>
            </Center>


        </Container>
    )
}

export default Admin