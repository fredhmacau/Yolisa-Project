/* import useContext from react */
import {useContext} from "react"
import { Navigate } from "react-router-dom";
import AuthContext from "../../../context/auth-context";
import EditPost from "../EditPost";


export default function ContextEditPost(){
    const ctx = useContext(AuthContext);
    return(
        <>
            {
                ctx.isLogginSalesman?(<EditPost/>):(<Navigate to="/login" replace/>)
            }
        </>
    )
}