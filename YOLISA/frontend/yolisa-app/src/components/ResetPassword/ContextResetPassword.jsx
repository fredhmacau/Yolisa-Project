import { useContext } from "react"
import { Navigate } from "react-router-dom"
import AuthContext from "../../context/auth-context"
import MainReset from "./MainReset"


export default function ContextResetPassowrd(){
    const ctx=useContext(AuthContext)
    return(
        <>
            {
                ctx.isLogginSalesman?(<Navigate to="acount-salesman" replace/>):(<MainReset/>)
            }
        </>
    )
}