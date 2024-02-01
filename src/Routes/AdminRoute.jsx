 
import { Navigate, useLocation } from "react-router-dom";
import { Spin } from "antd";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

 

const AdminRoute = ({children}) => {
     const {user,loading} = useAuth();
     const location = useLocation();
     const [isAdmin,isAdminLoading] = useAdmin();

     if(loading || isAdminLoading){
          return <div className="flex justify-center  mt-[300px]"><Spin size="large" /></div>
     }

     if(user && isAdmin){
          return children;
     }

    

     return <Navigate to='/login' state={{from: location}} replace></Navigate>
     
};

export default AdminRoute;