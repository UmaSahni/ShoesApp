import { FAILURE_LOGIN, REQUEST_LOGIN, SUCCESS_LOGIN } from "./actionTypes"

const initialState = {
    isLoading : false,
    isError: false,
    isAuth: false,
    token:""
}

export const reducer = (state = initialState , {type, payload}) => {
switch(type){
    case REQUEST_LOGIN :{
        return {...state, isLoading:true}
    }
    case SUCCESS_LOGIN:{
        return {...state, isLoading: false, isError: false, isAuth: true, token: payload}
    }
    case FAILURE_LOGIN:{
        return {...state, isLoading: false, isError: true}
    }
    default : return state
}
}