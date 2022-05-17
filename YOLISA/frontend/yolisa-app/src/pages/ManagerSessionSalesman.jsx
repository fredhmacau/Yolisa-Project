import useHttp from "../Hooks/useHttp";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

export default function ManagerSessionSalesman({ animate }) {
    const { getContactSalesman } = useHttp();
    const [contactSalesman, setContactSalesman] = useState(false);

    useEffect(() => {
      const checkContact = getContactSalesman();
      checkContact.then((resp) => {
        if (resp.status === 200) {
          setContactSalesman(true);
        } else {
          setContactSalesman(false);
        }
      });
    }, []);

  return (
    <>
      {contactSalesman ? (
        <Navigate to="/acount-salesman" replace/>
      ) : (
        <Navigate to="/acount-salesman/config/add-image" replace />
      )}
    </>
  );
}
