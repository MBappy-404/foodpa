import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spin } from "antd";

 

const PrivateRoute = ({children}) => {
     const {user,loading} = useContext(AuthContext);
     const location = useLocation()

     if(loading){
          return <div className="flex justify-center h-screen  mt-[300px]"><Spin size="large" /></div>
     }
   
     if(user){
          return children;
     }
     return <Navigate to='/login' state={{from: location}} replace></Navigate>
     
};

export default PrivateRoute;