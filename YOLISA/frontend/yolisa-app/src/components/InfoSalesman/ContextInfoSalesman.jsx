import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../context/auth-context";
import InfoPage from "./InfoPage"

export default function ContextInfoSalesman() {
  const ctx = useContext(AuthContext);
  return (
    <>
      {ctx.isLogginSalesman ? (
        <Navigate to="/acount-salesman" replace />
      ) : (
        <InfoPage/>
      )}
    </>
  );
}
