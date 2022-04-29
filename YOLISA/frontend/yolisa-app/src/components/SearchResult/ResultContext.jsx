import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../context/auth-context";
import ResultPage from "./ResultPage";

export default function ContextResetPassowrd() {
  const ctx = useContext(AuthContext);
  return (
    <>
      {ctx.isLogginSalesman ? (
        <Navigate to="acount-salesman" replace />
      ) : (
        <ResultPage />
      )}
    </>
  );
}
