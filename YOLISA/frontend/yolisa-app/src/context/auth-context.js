import React from "react";
const AuthContext=React.createContext({
    isLogginSalesman:localStorage.getItem("token")?true:false,
    
});

export default AuthContext;