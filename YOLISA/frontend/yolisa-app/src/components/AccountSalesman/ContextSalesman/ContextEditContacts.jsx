import {useContext} from "react"
import AuthContext from "../../../context/auth-context"
import EditContacts from "../EditContacts"
import {Navigate} from "react-router-dom"

export default function ContextEditContact(){
    const ctx  = useContext(AuthContext);
    ctx.isLogginSalesman = localStorage.getItem("token") ? true : false;
    return (
        <>
            {
                ctx.isLogginSalesman?(<EditContacts/>):(<Navigate to="/login" replace/>)
            }
        </>
    )
}