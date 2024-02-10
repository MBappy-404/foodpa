
import bgImage from "../../assets/assets/home/contact.jpg";
import logo from "../../assets/assets/Logo/logo2.png";
import bottomBg from "../../assets/assets/home/4.png";
import donut from "../../assets/assets/home/hamburger-1.png";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { Bars } from "react-loader-spinner";
import { Divider } from "antd";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [loading, setLoading] = useState()
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Firebase  Authentication and Create User//

  const handleSignUp = (data) => {
    setLoading(true)
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
                    backdrop: `rgba(0,0,0,0.8) `,
                  });
                  setLoading(false)
                  navigate("/");
                }
              });
          })

          // if catch error
          .catch((error) => {
            setLoading(false)
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong, Try letter!",
              // footer: `${error}`,
            });
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong, Try letter!",
          // footer: `${error}`,
        });
      });
  };

  return (
    <div>
      <div className=" text-[#333]">
        <div style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }} className="grid lg:grid-cols-2 gap-4  relative sm:p-8 p-4 h-[320px]">
          <div>

            <div className="max-w-lg mt-24 px-6 max-lg:hidden">
              <p className="text-md mt-4 text-black">Embark on a seamless journey as you create your account. Unlock a realm of opportunities and possibilities that await you.</p>
            </div>
          </div>
          <div className="bg-white border z-10 border-gray-300  my-4 rounded-xl sm:px-6 px-4 py-8 max-w-md w-full h-max shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] max-lg:mx-auto">
            <form onSubmit={handleSubmit(handleSignUp)} >
              <div className="mb-5">
                <h3 className="text-3xl font-extrabold">Sign Up</h3>
              </div>

              <SocialLogin />
              <Divider />

              <div>
                <label className="text-sm mb-2 block">User Name</label>
                <div className="relative flex items-center">
                  <input
                    {...register("name", {
                      required: "Name is Required",
                      maxLength: 40,
                    })}
                    id="name"
                    type="name"
                    name="name" required className="w-full  focus:outline-none focus:border-gray-400 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Enter user name" />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4" viewBox="0 0 24 24">
                    <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                    <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                  </svg>
                </div>
                {errors.email && (<p className="text-red-400 text-sm"> {errors.email?.message} </p>)}
              </div>

              <div>
                <label className="text-sm mt-6 mb-2 block">Email</label>
                <div className="relative flex items-center">
                  <input
                    {...register("email", {
                      required: "Email is Required",
                      maxLength: 40,
                    })}
                    id="email"
                    type="email"
                    name="email" required className="w-full  focus:outline-none focus:border-gray-400 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Enter user email" />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 682.667 682.667">
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                      </clipPath>
                    </defs>
                    <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                      <path fill="none" strokeMiterlimit="10" strokeWidth="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path>
                      <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000"></path>
                    </g>
                  </svg>
                </div>
                {errors.email && (<p className="text-red-400 text-sm"> {errors.email?.message} </p>)}
              </div>
              <div className="mt-6">
                <label className="text-sm mb-2 block">Password</label>
                <div className="relative flex items-center">
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
                    name="password" required className="w-full text-sm border focus:outline-none focus:border-gray-400 border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Enter password" />
                  <svg onClick={togglePasswordVisibility} xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                    <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                  </svg>
                </div>
                {errors.password && (
                  <p className="text-red-400 text-sm">
                    {errors.password?.message}
                  </p>
                )}
              </div>

              <div className="mt-10">
                <button disabled={loading} type="submit" className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-black bg-[#FFA200] hover:bg-[#D58B09] focus:outline-none transition-all duration-300  focus:border-gray-400">
                  {
                    loading ?
                      <div className="flex justify-center">
                        <Bars
                          height="20"
                          width="20"
                          color="black"
                          ariaLabel="bars-loading"
                          visible={true}
                        />
                      </div> : ' LogIn'
                  }
                </button>
              </div>
              <Link to='/login'>
                <p className="text-sm mt-6 text-center">Already have an account <a href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Login</a></p>
              </Link>
            </form>
          </div>
          <div className="py-3  bottom-10 ml-5 md:fixed sm">
            <h2>Try as Admin</h2>
            <p>Admin Email: demaodmin@gmail.com</p>
            <p>Admin Password: Dead@999</p>
          </div>
          <img src={bottomBg} alt="" className="inset-x-0  absolute bottom-0" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
