import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from "../../../context/auth-context"
import EditMap from '../EditMap';

export default function ContextEditMap(){
    const ctx = useContext(AuthContext);
    return (
        <>
            {
                ctx.isLogginSalesman?(<EditMap/>):(<Navigate to="/login" replace/>)
            }
        </>
    )

}