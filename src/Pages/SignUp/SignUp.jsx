import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import bgImage from "../../assets/assets/home/24.jpg";
import logo from "../../assets/assets/Logo/logo2.png";
import donut from "../../assets/assets/home/hamburger-1.png";
import { useContext, useEffect, useState } from "react";
import { Tooltip } from "antd";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { createUser, updateUserProfile } = useContext(AuthContext);
  // const [success,setSuccess] = useState()
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Firebase  Authentication Create User//

  const handleSignUp = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser);
        // get name from fire base
        updateUserProfile(data.name)
          .then(() => {
            // save user on Database
            const user = {
              name: data.name,
              email: data.email,
              password: data.password,
            };

            fetch("https://bistro-boss-server-mbappy-404.vercel.app/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(user),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  Swal.fire({
                    imageUrl: `${logo}`,
                    imageWidth: 200,
                    imageAlt: "Custom image",
                    title: "Welcome to Foodpa",
                    background: "#fff url(/images/trees.png)",
                    backdrop: `rgba(0,0,0,0.8) url(${donut}) top right no-repeat `,
                  });

                  navigate("/");
                }
              });
          })

          // if catch error
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
              footer: `${error}`,
            });
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: `${error}`,
        });
      });
  };

  return (
    <>
      <Helmet>
        <title>Foodpa | SignUp</title>
      </Helmet>
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
              <span className="">Sign Up</span>
            </h2>
            <form onSubmit={handleSubmit(handleSignUp)} className="lg:ml-4">
              {/* Name  */}
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  <i className="fas fa-envelope mr-1">
                    {" "}
                    <FaUser className="inline" />{" "}
                  </i>
                  Full-Name
                </label>
                <div>
                  <input
                    {...register("name", {
                      required: "Name is Required",
                      maxLength: 40,
                    })}
                    id="name"
                    type="text"
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your name"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-400 text-sm">{errors.name?.message}</p>
                )}
              </div>

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

              {/* Submit  */}
              <div className="flex items-center justify-center">
               
                  <button
                    type="submit"
                    className={`bg-yellow-400 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full`}
                   
                  >
                    LogIn
                  </button>
              
              </div>
            </form>

            <p className="text-center text-gray-800 mt-3">
              Already have account?{" "}
              <Link to="/login" className="text-blue-900 underline">
                Login
              </Link>{" "}
            </p>

            <SocialLogin />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
