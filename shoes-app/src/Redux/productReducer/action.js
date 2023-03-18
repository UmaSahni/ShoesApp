import axios from "axios"
import AlertBox from "../../Components/AlertBox"
import { ADD_PRODUCT_FAILURE, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS } from "./actionTypes"

export const AddProduct = (productData) => (dispatch)=> {
    dispatch({type:ADD_PRODUCT_REQUEST})
    
    axios.post("http://localhost:8080/products", productData )
    .then((res)=>{
        console.log(res)
        dispatch({type:ADD_PRODUCT_SUCCESS, payload:res})
        
    })
    .catch((err)=>dispatch({type:ADD_PRODUCT_FAILURE}))
}