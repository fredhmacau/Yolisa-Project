import ContextAddImage from "../components/AccountSalesman/ContextSalesman/ContextAddImage";
import useHttp from "../Hooks/useHttp";
import {Navigate} from "react-router-dom";
import { useState,useEffect} from "react";
export default function AddImage({animate}){
    const {viewImage} = useHttp();
    const [imageSalesman, setImageSalesman] = useState(false);
    useEffect(() => {
        const checkContact = viewImage();
        checkContact.then((resp) => {
            if (resp.status === 200) {
                setImageSalesman(true);
            }
        }).catch((error)=>{
            setImageSalesman(false);
        })
    },[])
    return (
      <>
        {imageSalesman ? (
            <Navigate to="/acount-salesman" replace />
            ) : (
            <ContextAddImage />
        )}
        
      </>
    );
}