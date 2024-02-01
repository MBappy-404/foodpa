import { Tooltip } from "antd";
import { useContext } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import donut from "../../assets/assets/home/donut-1.png";
import logo from "../../assets/assets/Logo/logo2.png";

const SocialLogin = () => {
  const { googleSignIn, facebookSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
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

            navigate("/");
          });
      })
      .catch((error) => console.log(error));
  };

  const handleFacebookSignIn = () => {
    facebookSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(result.user);

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

            navigate("/");
          });
      })

      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="mt-3">
        <p className="text-center text-gray-800">Or log in with:</p>
        <div className="flex justify-center mt-2">
          <Tooltip title="Continue with Facebook" color="blue">
            <a
              onClick={handleFacebookSignIn}
              className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
            >
              <i className="fab fa-facebook-f">
                {" "}
                <FaFacebook />
              </i>
            </a>
          </Tooltip>
          <Tooltip title="Continue with Google" color="red">
            <a
              onClick={handleGoogleSignIn}
              className="bg-red-500 cursor-pointer hover:bg-red-500 text-white font-bold py-2 px-4 rounded mx-2"
            >
              <i className="fab fa-google">
                {" "}
                <FaGoogle />{" "}
              </i>
            </a>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
