import { Outlet, Route, Navigate } from "react-router-dom";

const ProtectedRoutes = ({ isAllowed, navigateTo = "/" }) => {
    console.log(isAllowed);
    
    return isAllowed?<Outlet/>:<Navigate replace to={navigateTo}/>;
}
 
export default ProtectedRoutes;