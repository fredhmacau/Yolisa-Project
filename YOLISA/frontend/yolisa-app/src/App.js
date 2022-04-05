import { BrowserRouter } from "react-router-dom";
import Routers from "./pages/Routers";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </>
  );
}
