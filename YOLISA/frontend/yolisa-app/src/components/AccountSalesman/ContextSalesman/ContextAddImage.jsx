import { useContext } from "react";
import AuthContext from "../../../context/auth-context";
import { Navigate } from "react-router-dom";
import AddImage from "../AddImage";

export default function ContextEditContact() {
  const ctx = useContext(AuthContext);
  ctx.isLogginSalesman = localStorage.getItem("token") ? true : false;
  return (
    <>
      {ctx.isLogginSalesman ? <AddImage /> : <Navigate to="/login" replace />}
    </>
  );
}
