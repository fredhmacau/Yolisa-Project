import { useContext } from "react"
import { Navigate } from "react-router-dom"
import AuthContext from "../../context/auth-context"
import Index from "./Index"
export default function ContextLading(){
    const ctx=useContext(AuthContext)
    return (
        <>
        {
            ctx.isLogginSalesman?(<Navigate to="/acount-salesman" replace/>):(<Index/>)
        }
        </>
    )
}