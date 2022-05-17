import { Routes, Route } from "react-router-dom";
import EditProfile from "./EditProfile";
import AuthContext from "../context/auth-context";
import AlterPassword from "./AlterPassword";
import CreateAccountSalesman from "./CreateAccountSalesman";
import Landing from "./Landing";
import LoginSalesman from "./LoginSalesman";
import SendEmailAlterPass from "./SendEmailAlterPass";
import SessionSalesman from "./SessionSalesman";
import EditContact from "./EditContact";
import EditMapLocation from "./EditMapLocation";
import EditPost from "./EditPost";
import SearchResult from "./SearchResult";
import InfoSalesman from "./InfoSalesman";
import NotFound from "./NotFound";
import AddImage from "./AddImage";
import AddContact from "./AddContact";
import AddMap from "./AddMap";
import ManagerSessionSalesman from "./ManagerSessionSalesman";

export default function Routers() {
  return (
    <AuthContext.Provider
      value={{
        isLogginSalesman: localStorage.getItem("token") ? true : false,
      }}
    >
      <Routes>
        <Route path="/" element={<Landing animate={true} />} />
        <Route
          path="/search=:query"
          element={<SearchResult animate={true} />}
        />
        <Route
          path="/info-salesman/:idSalesman/:idPost"
          element={<InfoSalesman animate={true} />}
        />
        <Route path="/login" element={<LoginSalesman animate={true} />} />
        <Route
          path="/create-account"
          element={<CreateAccountSalesman animate={true} />}
        />
        <Route
          path="/send-email"
          element={<SendEmailAlterPass animate={true} />}
        />
        <Route path="/alter-pass" element={<AlterPassword animate={true} />} />
        <Route
          path="/acount-salesman"
          element={<SessionSalesman animate={true} />}
        />
        <Route
          path="/check/acount-salesman"
          element={<ManagerSessionSalesman animate={true} />}
        />
        <Route
          path="/acount-salesman/config/add-image"
          element={<AddImage animate={true} />}
        />
        <Route
          path="/acount-salesman/config/add-contact"
          element={<AddContact animate={true} />}
        />
        <Route
          path="/acount-salesman/config/add-map"
          element={<AddMap animate={true} />}
        />
        <Route
          path="/acount-salesman/edit-profile"
          element={<EditProfile animate={true} />}
        />
        <Route
          path="/acount-salesman/edit-contact"
          element={<EditContact animate={true} />}
        />
        <Route
          path="/acount-salesman/edit-contact/alter-map"
          element={<EditMapLocation animate={true} />}
        />
        <Route
          path="/acount-salesman/edit-post/:id"
          element={<EditPost animate={true} />}
        />

        <Route path="*" element={<NotFound animate={true} />} />
      </Routes>
    </AuthContext.Provider>
  );
}
