import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./protectedRoutes/ProtectedRoutes";
import { use } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import Chat from "../pages/Chat";
import Login from "../pages/public/Login";
import Signin from "../pages/public/Signup";

const AppRoutes = () => {
  const authContext = use(AuthContext);

  if (!authContext) {
    throw new Error("Para usar AuthContext debe estar dentro del provider.");
  }

  const { user } = authContext;

  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta protegida */}
        <Route element={<ProtectedRoutes isAllowed={!!user} />}>
          <Route path="/chat" element={<Chat />} />
        </Route>
        {/* Ruta pública */}
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        {/* Ruta para manejar 404 */}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
