import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";


const ProtectedRoutes = () => {
    const user = useSelector(store => store.user);
    const navigate = useNavigate();
    
    return user !== null ? <Outlet /> : navigate("/login");
}

export default ProtectedRoutes;