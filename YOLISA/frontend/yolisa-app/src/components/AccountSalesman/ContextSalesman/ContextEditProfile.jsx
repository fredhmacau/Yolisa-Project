import {useContext} from "react"
import { Navigate } from "react-router-dom"
import AuthContext from "../../../context/auth-context"
import EditProfile from "../EditProfile"
export default function ContentEditProfile(){
    const ctx=useContext(AuthContext)
    ctx.isLogginSalesman = localStorage.getItem("token") ? true : false;
    return (
        <>
            {
                ctx.isLogginSalesman?(<EditProfile/>):(<Navigate to="/login" replace/>)
            }
        </>
    )
}