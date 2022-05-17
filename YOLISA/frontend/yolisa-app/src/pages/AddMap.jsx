import ContextAddMap from "../components/AccountSalesman/ContextSalesman/ContextAddMap";
import useHttp from "../Hooks/useHttp";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
export default function AddMap({ animate }) {

  const { getMarkersPosition} = useHttp();
  const [positionSalesman, setPositionSalesman] = useState(false);
  useEffect(() => {
    const checkContact = getMarkersPosition();
    checkContact
      .then((resp) => {
        if (resp.status === 200) {
          setPositionSalesman(true);
        }
      })
      .catch((error) => {
        setPositionSalesman(false);
      });
  }, []);
  return (
    <>
      {positionSalesman ? (
        <Navigate to="/acount-salesman" replace />
      ) : (
        <ContextAddMap />
      )}
    </>
  );
}
