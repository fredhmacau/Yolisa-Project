import AcountPage from "./AcountPage";
import { useContext } from "react";
import AuthContext from "../../context/auth-context";
import { Navigate } from "react-router-dom";
export default function MainContext(){
    const ctx=useContext(AuthContext);

    return (
        <>
            {
                ctx.isLogginSalesman?(<AcountPage/>):(<Navigate to="/login" replace/>)
            }
        </>
    )
}