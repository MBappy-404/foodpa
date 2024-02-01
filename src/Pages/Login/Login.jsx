import {
     FaEnvelope,
     FaLock,
     FaEye,
     FaEyeSlash,
   } from "react-icons/fa";
   import bgImage from "../../assets/assets/home/23.jpg";
   import {
     loadCaptchaEnginge,
     LoadCanvasTemplate,
     validateCaptcha,
   } from "react-simple-captcha";
   import { useContext, useEffect, useState } from "react";
   import { Tooltip, notification } from "antd";
   import { useForm } from "react-hook-form";
   import { Link, useLocation, useNavigate } from "react-router-dom";
   import { Helmet } from "react-helmet-async";
   import { AuthContext } from "../../provider/AuthProvider";
   import Swal from "sweetalert2";
   import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { Bars } from "react-loader-spinner";
   
   const Login = () => {
     const {
       register,
       formState: { errors },
       handleSubmit,
     } = useForm();
     const [loading,setLoading]= useState()
     const [disabled, setDisabled] = useState(true);
     const [passwordVisible, setPasswordVisible] = useState(false);
     const { signIn } = useContext(AuthContext);
     const navigate = useNavigate();
     const location = useLocation();
     const from = location.state?.from?.pathname || "/";
     const [api, contextHolder] = notification.useNotification();
     const openNotification = (placement) => {
       api.success({
         message: "Captcha Correct",
         description: "Now you can login your account.",
         placement,
         duration: 10,
         motion: {
           onAppearStart: (node, props) => {
             node.style.opacity = 0;
             props.set("opacity", 1);
             props.set("transition", "opacity 0.5s ease-in-out"); // Adjust duration and easing as needed
           },
           onLeaveEnd: (node, props) => {
             props.set("opacity", 0);
             props.set("transition", "opacity 0.5s ease-in-out"); // Adjust duration and easing as needed
           },
         },
       });
     };
   
     const togglePasswordVisibility = () => {
       setPasswordVisible(!passwordVisible);
     };
   
     const [api2, contextHolder2] = notification.useNotification();
     const openNotification2 = (placement) => {
       api2.error({
         message: "Captcha Incorrect",
         description: "Please reload captcha  and try again!.",
         placement,
         duration: 10,
         motion: {
           onAppearStart: (node, props) => {
             node.style.opacity = 0;
             props.set("opacity", 1);
             props.set("transition", "opacity 0.5s ease-in-out"); // Adjust duration and easing as needed
           },
           onLeaveEnd: (node, props) => {
             props.set("opacity", 0);
             props.set("transition", "opacity 0.5s ease-in-out"); // Adjust duration and easing as needed
           },
         },
       });
     };
   
     useEffect(() => {
       loadCaptchaEnginge(6);
     }, []);
   
     const handleLogin = (data) => {
          setLoading(true)
       signIn(data.email, data.password)
         .then((result) => {
           const loggedUser = result.user;
           // console.log(loggedUser);
           setLoading(false)
           Swal.fire({
             icon: "success",
             title: "Sign In Successful",
             backdrop: `rgba(0,0,0,0.8)`,
           });
   
           navigate(from, { replace: true });
         })
         .catch((errors) => {
           // console.log(errors);
           Swal.fire({
             icon: "error",
             title: "Oops...",
             text: "Something went wrong!",
             footer: `${errors}`,
           });
         });
     };
   
     const handleCaptcha = () => {
       let user_captcha_value = document.getElementById("captcha").value;
   
       if (user_captcha_value.length === 6) {
         if (validateCaptcha(user_captcha_value) == true) {
           setDisabled(false);
           openNotification("topRight");
         } else {
           setDisabled(true);
           openNotification2("topRight");
         }
       }
     };
     return (
       <>
         <Helmet>
           <title>Foodpa-Login</title>
         </Helmet>
         {contextHolder}
         {contextHolder2}
         <div
           style={{
             backgroundImage: `url(${bgImage})`,
             backgroundPosition: "center",
           }}
           className="  lg:bg-cover"
         >
           <div className="flex justify-center items-center px-2  min-h-screen  min-w-screen">
             <div className="px-2 md:px-6 py-8  my-5 w-full max-w-md">
               <h2 className="text-3xl font-bold mb-6 text-center text-white">
                 <span className="">LogIn</span>
               </h2>
               <form onSubmit={handleSubmit(handleLogin)} className="lg:ml-4">
                 {/* Email  */}
                 <div className="mb-5">
                   <label
                     htmlFor="email"
                     className="block text-gray-700 text-sm font-bold mb-2"
                   >
                     <i className="fas fa-envelope mr-1">
                       {" "}
                       <FaEnvelope className="inline" />{" "}
                     </i>
                     Email
                   </label>
                   <div>
                     <input
                       {...register("email", {
                         required: "Email is Required",
                         maxLength: 40,
                       })}
                       id="email"
                       type="email"
                       className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                       placeholder="Enter your email"
                     />
                   </div>
                   {errors.email && (
                     <p className="text-red-400 text-sm">
                       {errors.email?.message}
                     </p>
                   )}
                 </div>
   
                 {/* Password  */}
                 <div className="mb-5">
                   <label
                     htmlFor="password"
                     className="block text-gray-700 text-sm font-bold mb-2"
                   >
                     <i className="fas fa-lock mr-1">
                       <FaLock className="inline" />
                     </i>
                     Password
                   </label>
                   <div className="relative">
                     <input
                       {...register("password", {
                         required: "Password is Required",
                         minLength: {
                           value: 6,
                           message: "Password must be 6 characters or longer",
                         },
                         pattern: {
                           value:
                             /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#%!%*?&])[A-Za-z\d@$!%*?&]{6,50}$/,
                           message: "Password must be strong",
                         },
                       })}
                       id="password"
                       type={passwordVisible ? "text" : "password"}
                       className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                       placeholder="Enter your password"
                     />
                     {/* Password visibility toggle button */}
                     <div
                       className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                       onClick={togglePasswordVisibility}
                     >
                       {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                     </div>
                   </div>
   
                   {errors.password && (
                     <p className="text-red-400 text-sm">
                       {errors.password?.message}
                     </p>
                   )}
                 </div>
   
                 {/* Captcha  */}
   
                 <div className="mb-5">
                   <label htmlFor="captcha">
                     <LoadCanvasTemplate className="text-white" />
                   </label>
   
                   <div>
                     <input
                       id="captcha"
                       onChange={handleCaptcha}
                       type="text"
                       className="shadow appearance-none border rounded w-full py-3 mt-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                       placeholder="Type captcha"
                     />
                   </div>
                 </div>
   
                 {/* Submit  */}
                 <div className="flex items-center justify-center">
                   <Tooltip
                     title={`${disabled ? "Fill all input" : ""}`}
                     color="red"
                   >
                     <button
                       type="submit"
                       className={`bg-yellow-400 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full ${
                         disabled ? "opacity-50 cursor-not-allowed" : ""
                       }`}
                       disabled={disabled}
                     >
                      {
                         loading ? <div className="flex justify-center">
                              <Bars
                         height="25"
                         width="25"
                         color="white"
                         ariaLabel="bars-loading"
                         wrapperStyle={{}}
                         wrapperClass=""
                         visible={true}
                         /> 
                         </div> : ' LogIn'
                      }
                     </button>
                   </Tooltip>
                 </div>
               </form>
   
               <p className="text-center text-gray-800 mt-3">
                 Don t have an account?{" "}
                 <Link className="text-blue-900 underline" to="/signUp">
                   SignUp
                 </Link>{" "}
               </p>
   
               <SocialLogin />
             </div>
           </div>
         </div>
       </>
     );
   };
   
   export default Login;
   