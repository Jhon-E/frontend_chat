import { Route, Routes } from "react-router-dom";
import React from "react";
const RoutesWithNotFound = ({ children }) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<div>Error 404</div>} />
    </Routes>
  );
};
export default RoutesWithNotFound;
