 
import { Navigate, useLocation } from "react-router-dom";
import loadingImage from '../../src/assets/assets/home/d62bac00e58a2a1e41d1b77ebcd889b4.gif'
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

 

const AdminRoute = ({children}) => {
     const {user,loading} = useAuth();
     const location = useLocation();
     const [isAdmin,isAdminLoading] = useAdmin();

     if(loading || isAdminLoading){
          return <div className="flex justify-center min-h-[100vh]  "> <img src={loadingImage} className="w-80 mx-auto h-80" alt="" /></div>
     }

     if(user && isAdmin){
          return children;
     }

    

     return <Navigate to='/login' state={{from: location}} replace></Navigate>
     
};

export default AdminRoute;