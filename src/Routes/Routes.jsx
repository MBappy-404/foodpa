import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import WishList from "../Pages/Dashboard/WishList/WishList";
import UserHme from "../Pages/Dashboard/UserHome/UserHme";
import AllUsers from "../Pages/Dashboard/Users/AllUsers";
import AddItem from "../Pages/Dashboard/AddItems/AddItem";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import Payments from "../Pages/Dashboard/Payments/Payments";
import Review from "../Pages/Dashboard/Review/Review";
import AdminRoute from "./AdminRoute";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard/AdminDashboard";
import PaymentHistory from "../Pages/Dashboard/Payments/PaymentHistory";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
 
 
 

export const router = createBrowserRouter([
  
     {
       path: "/",
       element: <Main />,
       errorElement: <ErrorPage/>,
       children: [
         {
           path: "/",
           element: <Home />,
          
         },
         {
           path: "/menu",
           element: <Menu />,
          
         },
         {
           path: "/order",
           element:<Order /> 
          
         },
         {
           path: "/order/:category",
           element:<Order /> 
          
         },
         {
          path:"/contact",
          element: <Contact/>
         },
         {
          path:"/login",
          element: <Login/>
         },
         {
          path:"/signUp",
          element: <SignUp/>
         }
       ],   
     },
     {
      path:'/dashboard',
      element: <PrivateRoute><Dashboard/></PrivateRoute>,
      children: [
        {
          path:'admin-dashboard',
          element: <AdminRoute><AdminDashboard/></AdminRoute>

        },
        {
          path:'myCart',
          element:<MyCart/>
        },
        {
          path:'wishlist',
          element:<WishList/>
        },
        {
          path:'user-dashboard',
          element: <PrivateRoute> <UserHme/></PrivateRoute> 
        },
        {
          path:"all-users",
          element: <AdminRoute><AllUsers/></AdminRoute>
        },
        {
          path:"add-item",
          element: <AdminRoute><AddItem/></AdminRoute>
        },
        {
          path:"manage-item",
          element: <AdminRoute><ManageItems/></AdminRoute>
        },
        {
          path:"update-item/:id",
          element: <AdminRoute><UpdateItem/></AdminRoute>
        },
        {
          path:"payments",
          element: <Payments/>
        },
        {
          path:"payment-history",
          element: <PaymentHistory/>
        },
        {
          path:"review",
          element: <Review/>
        }
        
      ]
      
     }
   ]);