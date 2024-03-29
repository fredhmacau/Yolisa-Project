import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../context/auth-context";
import FormNewAccount from "./FormNewAccount";

export default function ContextCreateAcount(){
    const ctx=useContext(AuthContext);
    ctx.isLogginSalesman = localStorage.getItem("token") ? true : false;
    return (
        <>
            {
                ctx.isLogginSalesman?(<Navigate to="/acount-salesman" replace/>):(<FormNewAccount/>)
            }
        </>
    );
}