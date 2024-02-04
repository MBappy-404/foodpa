import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import loadingImage from '../../src/assets/assets/home/d62bac00e58a2a1e41d1b77ebcd889b4.gif'

 

const PrivateRoute = ({children}) => {
     const {user,loading} = useContext(AuthContext);
     const location = useLocation()

     if(loading){
          return <div className=" flex justify-center items-center min-h-[100vh]"> <img src={loadingImage} alt="" className="w-60 -translate-x-20 mx-auto h-40" /></div>
     }
   
     if(user){
          return children;
     }
     return <Navigate to='/login' state={{from: location}} replace></Navigate>
     
};

export default PrivateRoute;