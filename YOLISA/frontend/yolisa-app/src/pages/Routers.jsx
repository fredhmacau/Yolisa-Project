import {Routes,Route} from "react-router-dom"
import AlterPassword from "./AlterPassword";

import CreateAccountSalesman from "./CreateAccountSalesman"
import Landing from "./Landing"
import LoginSalesman from "./LoginSalesman"
import SendEmailAlterPass from "./SendEmailAlterPass";


export default function Routers(){
    return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LoginSalesman />} />
        <Route path="/create-account" element={<CreateAccountSalesman />} />
        <Route path="/send-email" element={<SendEmailAlterPass/>} />
        <Route path="/alter-pass" element={<AlterPassword/>} />
      </Routes>
    );
}
