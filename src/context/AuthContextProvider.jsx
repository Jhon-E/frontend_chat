import { createContext, useState } from "react";

export const AuthContext = createContext(() =>
  JSON.parse(sessionStorage.getItem("user"))
);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() =>
    JSON.parse(sessionStorage.getItem("user"))
  );
  return <AuthContext value={{ user, setUser }}>{children}</AuthContext>;
};

export default AuthContextProvider;
