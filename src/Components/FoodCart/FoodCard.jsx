import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Tooltip, message } from "antd";
import useCart from "../../hooks/useCart";
import useWishlist from "../../hooks/useWishlist";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const FoodCard = ({ item }) => {
  const today = new Date();
  const date = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(today);
  const { name, image, price, recipe, _id } = item;
  const [wishlist] = useWishlist();
  const [cart] = useCart();
  const isWishlist = wishlist.some((itemId) =>
    itemId?.itemId?.includes(item._id),
  );
  const isCart = cart.some((itemId) => itemId.orderId?.includes(item._id));
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [, wishlistRefetch] = useWishlist();
  const [, cartRefetch] = useCart();
  const [axiosSecure] = useAxiosSecure()

  const [messageApi, contextHolder] = message.useMessage();
  const info = () => {
    messageApi.success("Added to Cart");
  };
  const infoWishlist = () => {
    messageApi.success("Added to wishlist");
  };

  const handleCart = (item) => {
    // console.log(item);

    if (user && user?.email) {
      // console.log(item);
      const cartItem = {
        orderId: _id,
        name,
        category: item.category,
        image,
        price,
        recipe,
        email: user?.email,
      };
      //  send database
      axiosSecure.post("/carts", cartItem)

        .then((data) => {
          if (data.data.result.acknowledged) {
            // console.log(data.insertedId);
            cartRefetch();
            info();
          }
        });
    } else {
      Swal.fire({
        title: "OPSS!",
        text: "Please Login and Order",
        icon: "warning",
        showCancelButton: true,
        backdrop: `rgba(0,0,0,0.8)`,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };


  const addWishList = (item) => {
    const WishListItem = {
      itemId: _id,
      name,
      date: date,
      image,
      price,
      recipe,
      email: user?.email,
    };

    // console.log(WishListItem);
    if (user && user?.email) {
      //  send database
      axiosSecure.post("/wishlist", WishListItem)
        .then((data) => {
          if (data.data.insertedId) {
            // console.log(data.insertedId);
            wishlistRefetch();
            infoWishlist();
          }
        });
    } else {
      Swal.fire({
        title: "OPSS!",
        text: "Please Login and Order",
        icon: "warning",
        showCancelButton: true,
        backdrop: `rgba(0,0,0,0.8)`,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div>
      {contextHolder}

      <div className="bg-gray-100 rounded-2xl p-3 cursor-pointer  duration-500 transition-all relative">
        <Tooltip
          placement="leftTop"
          title={isWishlist ? "Already Added" : "Add To Wishlist"}
        >
          <button
            disabled={isWishlist}
            onClick={() => addWishList(item)}
            data-play={`play-${_id}`}
            className={` play-${_id} w-8 h-8 flex items-center ${isWishlist ? "bg-[#FFA200]" : "bg-gray-200"}   hover:bg-[#FFA200] transition-all duration-500  justify-center rounded-full cursor-pointer absolute top-4 right-4`}
          >
            {isWishlist ? (
              <lord-icon
                src="https://cdn.lordicon.com/ulnswmkk.json"
                trigger="click"
                target={`.play-${_id}`}
                colors="primary:white"
                style={{ width: "20px", height: "20px" }}
              ></lord-icon>
            ) : (
              <lord-icon
                src="https://cdn.lordicon.com/xyboiuok.json"
                trigger="click"
                target={`.play-${_id}`}
                colors="primary:black"
                style={{ width: "20px", height: "20px" }}
              ></lord-icon>
            )}
          </button>
        </Tooltip>
        <div className="    overflow-hidden mx-auto  ">
          <img
            src={image}
            alt="Product 1"
            className="h-full w-full  rounded-lg object-contain"
          />
        </div>
        <div className="text-center mt-4">
          <h3 className="text-lg font-bold text-gray-800">{name}</h3>
          <h4 className="text-xl text-gray-700 font-bold mt-4">
            ${price} <span className="text-gray-400 ml-2 font-medium">$15</span>
          </h4>

          {isCart ? (
            <Link to="/dashboard/myCart">
              <button
                type="button"
                data-play="play-view"
                className=" mx-auto mt-6 flex items-center justify-center play-view gap-1 px-6 py-2 bg-[#FFA200] mb-3 hover:bg-[#222] transition-all text-sm duration-500 text-white     rounded-full"
              >
                View in cart
                <lord-icon
                  src="https://cdn.lordicon.com/mfmkufkr.json"
                  trigger="click"
                  target=".play-view"
                  colors="primary:white"
                  style={{ width: "20px", height: "20px" }}
                ></lord-icon>
              </button>
            </Link>
          ) : (
            <button
              onClick={() => handleCart(item)}
              type="button"
              data-play="play-cart"
              className="play-cart mx-auto mt-6 flex items-center justify-center gap-1 px-6 py-2 bg-[#FFA200] mb-3 hover:bg-[#222] transition-all text-sm duration-500 text-white     rounded-full"
            >
              Add to cart
              <lord-icon
                src="https://cdn.lordicon.com/mfmkufkr.json"
                trigger="click"
                target=".play-cart"
                colors="primary:white"
                style={{ width: "20px", height: "20px" }}
              ></lord-icon>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
