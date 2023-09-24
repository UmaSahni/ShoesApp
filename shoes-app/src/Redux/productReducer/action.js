import axios from "axios"
import AlertBox from "../../Components/AlertBox"
import { ADD_PRODUCT_FAILURE, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, Get_Product_Success } from "./actionTypes"

export const AddProduct = (productData) => (dispatch)=> {
    dispatch({type:ADD_PRODUCT_REQUEST})
    
    axios.post("https://complete-projects-json-server.onrender.com/products", productData )
    .then((res)=>{
        console.log(res)
        dispatch({type:ADD_PRODUCT_SUCCESS, payload:res})
        
    })
    .catch((err)=>dispatch({type:ADD_PRODUCT_FAILURE}))
}


export const getProduct =(paramobj) => (dispatch) =>{
    dispatch({type: ADD_PRODUCT_REQUEST})
    axios.get("https://complete-projects-json-server.onrender.com/products", paramobj )
    .then((res)=>{
        dispatch({type:Get_Product_Success, payload:res.data})
    })
    .catch(()=>dispatch({type:ADD_PRODUCT_FAILURE}))
}

export const PatchProduct = (dataobj, id) =>(dispatch)=>{
dispatch({type:ADD_PRODUCT_REQUEST})
 return axios.patch(`https://complete-projects-json-server.onrender.com/products/${id}`, dataobj)
.then(()=> {
    dispatch({type:PatchProduct, payload:dataobj})
})
.catch({type:ADD_PRODUCT_REQUEST})
}