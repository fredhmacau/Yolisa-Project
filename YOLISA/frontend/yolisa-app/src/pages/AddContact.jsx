import ContextAddContact from "../components/AccountSalesman/ContextSalesman/ContextAddContact";
import useHttp from "../Hooks/useHttp";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
export default function AddContact({ animate }) {
  const { getContactSalesman } = useHttp();
  const [contactSalesman, setContactSalesman] = useState(false);
  useEffect(() => {
    const checkContact = getContactSalesman();
    checkContact
      .then((resp) => {
        if (resp.status === 200) {
          setContactSalesman(true);
        }
      })
      .catch((error) => {
        setContactSalesman(false);
      });
  },[]);
  return (
    <>
      {contactSalesman ? (
        <Navigate to="/acount-salesman" replace />
        ) : (
        <ContextAddContact />
      )}
      
    </>
  );
}
