import { useContext } from "react"
import { Navigate } from "react-router-dom"
import AuthContext from "../../context/auth-context"
import Index from "./Index"
export default function ContextLading(){
    const ctx=useContext(AuthContext)
    ctx.isLogginSalesman = localStorage.getItem("token") ? true : false;
    return (
        <>
        {
            ctx.isLogginSalesman?(<Navigate to="/acount-salesman" replace/>):(<Index/>)
        }
        </>
    )
}