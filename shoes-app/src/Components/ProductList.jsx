import { Grid, SimpleGrid, useBreakpointValue } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom'
import { getProduct } from '../Redux/productReducer/action'
import RroductCard from './RroductCard'

const ProductList = () => {
  const [searchparam] = useSearchParams()
  const location = useLocation()
  const dispatch = useDispatch()
  const product = useSelector((store)=> store.productReducer.product)

  // console.log(searchparam.getAll("category"))
  const obj = {
    params :{
      gender:searchparam.getAll("category"),
      _sort :  searchparam.get("order") && "price",
      _order : searchparam.get("order")
    }
  }
  
  useEffect(()=>{
    dispatch(getProduct(obj))
  },[location.search])
  
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