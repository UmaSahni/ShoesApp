import { Grid, SimpleGrid, useBreakpointValue } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../Redux/productReducer/action'
import RroductCard from './RroductCard'

const ProductList = () => {
  const dispatch = useDispatch()
  const product = useSelector((store)=> store.productReducer.product)
//   const columnSize = useBreakpointValue({ base: '1fr', md: '2fr', lg: '1fr 1fr 1fr 1fr 1fr' });
  useEffect(()=>{
    dispatch(getProduct)
  },[])
  
    return (
    <Grid templateColumns='repeat(3, 1fr)' gap={4}>
        {
            product.length > 0 && product.map((el)=>{
                return <RroductCard key={el.id} {...el} />
            })
        }
    </Grid>
  )
}

export default ProductList