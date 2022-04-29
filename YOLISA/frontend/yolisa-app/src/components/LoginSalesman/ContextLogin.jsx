import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../context/auth-context";
import FormLogin from "./FormLogin";

export default function ContextLogin(){
    const ctx=useContext(AuthContext)
    return(
    <>
        {
            ctx.isLogginSalesman?(<Navigate to="/acount-salesman"/>):(<FormLogin/>)
        }
    </>
    )
}