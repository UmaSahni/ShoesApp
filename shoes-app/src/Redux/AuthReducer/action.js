import axios from "axios"
import { FAILURE_LOGIN, REQUEST_LOGIN, SUCCESS_LOGIN } from "./actionTypes"

export const LoginFun = (userData) => (dispatch) => {
    dispatch({ type: REQUEST_LOGIN })
    axios
    .post("https://reqres.in/api/login", userData)
    .then((res) => {
            console.log(res)
            dispatch({ type: SUCCESS_LOGIN, payload: res.data.token })
        })
    .catch(() => dispatch({ type: FAILURE_LOGIN }))
}