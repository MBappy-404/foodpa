import { Tooltip } from "antd";
import { useContext, useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import donut from "../../assets/assets/home/donut-1.png";
import logo from "../../assets/assets/Logo/logo2.png";
import { RotatingLines } from "react-loader-spinner";

const SocialLogin = () => {
  const { googleSignIn, facebookSignIn } = useContext(AuthContext);
  const [googleLoading, setGoogleLoading] = useState();
  const [facebookLoading, setFacebookLoading] = useState();
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    setGoogleLoading(true)
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser);
        // save user on Database
        const user = {
          name: loggedUser.displayName,
          email: loggedUser.email,
          photo: loggedUser.photoURL,
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
            // console.log(data);

            Swal.fire({
              imageUrl: `${logo}`,
              imageWidth: 200,
              imageAlt: "Custom image",
              title: "Welcome to Foodpa",
              background: "#fff url(/images/trees.png)",
              backdrop: `rgba(0,0,0,0.8) url(${donut}) top right no-repeat `,
            });
            setGoogleLoading(false)
            navigate("/");
          })
          .catch(error =>
            Swal.fire({
              icon: "error",
              title: "Ops!",
              text: "Try Few Moments Letter",

            })
          )

      })
      .catch((error) =>

        Swal.fire({
          icon: "error",
          title: "Ops!",
          text: "Try Few Moments Letter",

        })

      );
  };

  const handleFacebookSignIn = () => {
    setFacebookLoading(true)
    facebookSignIn()
      .then((result) => {
        const loggedUser = result.user;
        // console.log(result.user);

        const user = {
          name: loggedUser.displayName,
          email: loggedUser.email,
          photo: loggedUser.photoURL,
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
            // console.log(data);

            Swal.fire({
              imageUrl: `${logo}`,
              imageWidth: 200,
              imageAlt: "Custom image",
              title: "Welcome to Foodpa",
              background: "#fff url(/images/trees.png)",
              backdrop: `rgba(0,0,0,0.8) url(${donut}) top right no-repeat `,
            });
            setFacebookLoading(false)
            navigate("/");
          })
          .catch(error =>
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong, Try letter!",
              // footer: `${error}`,
            })
          )
      })

      .catch((error) =>

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong, Try letter!",
          // footer: `${error}`,
        })

      );
  };
  return (
    <div>
      <div className="mt-3">
        <p className="text-sm text-gray-400 mb-4">Continue with  </p>
        <div className=" flex justify-start space-x-4 ">
          <button onClick={handleGoogleSignIn} type="button" className="py-2.5 px-4 flex justify-center gap-3 text-sm font-semibold rounded text-gray-500 bg-gray-100 hover:bg-gray-200 focus:outline-none">
            {
              googleLoading ?  <span className="block"><RotatingLines
              visible={true}
              height="20"
              width="20"
              color="grey"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
              
              /></span>  :   <svg xmlns="http://www.w3.org/2000/svg" width="20px" className="inline" viewBox="0 0 512 512">
                <path fill="#fbbd00"
                  d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                  data-original="#fbbd00" />
                <path fill="#0f9d58"
                  d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                  data-original="#0f9d58" />
                <path fill="#31aa52"
                  d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                  data-original="#31aa52" />
                <path fill="#3c79e6"
                  d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                  data-original="#3c79e6" />
                <path fill="#cf2d48"
                  d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                  data-original="#cf2d48" />
                <path fill="#eb4132"
                  d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                  data-original="#eb4132" />
              </svg>
            }
            Google
          </button>
          <button onClick={handleFacebookSignIn} type="button" className="py-2.5 px-4 flex gap-4 text-sm font-semibold rounded text-gray-500 bg-gray-100 hover:bg-gray-200 focus:outline-none">
           {
            facebookLoading ?  <span className="block"><RotatingLines
            visible={true}
            height="20"
            width="20"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            
            /></span>  :  <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="#007bff" viewBox="0 0 167.657 167.657">
            <path d="M83.829.349C37.532.349 0 37.881 0 84.178c0 41.523 30.222 75.911 69.848 82.57v-65.081H49.626v-23.42h20.222V60.978c0-20.037 12.238-30.956 30.115-30.956 8.562 0 15.92.638 18.056.919v20.944l-12.399.006c-9.72 0-11.594 4.618-11.594 11.397v14.947h23.193l-3.025 23.42H94.026v65.653c41.476-5.048 73.631-40.312 73.631-83.154 0-46.273-37.532-83.805-83.828-83.805z" data-original="#010002"></path>
          </svg>
           }
            Facebook
          </button>


        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
