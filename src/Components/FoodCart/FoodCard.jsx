import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Tooltip, message } from "antd";
import useCart from "../../hooks/useCart";
import useWishlist from "../../hooks/useWishlist";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Spinner from "../Spinner/Spinner";
import { FaStar } from "react-icons/fa6";

const FoodCard = ({ item, loading }) => {
   const today = new Date();
   const [openModal, setOpenModal] = useState(false);
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
   const [axiosSecure] = useAxiosSecure();

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
         axiosSecure.post("/wishlist", WishListItem).then((data) => {
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

         {loading ? (
            <Spinner />
         ) : (
            <div className="bg-gray-100 rounded-2xl p-3 border cursor-pointer  duration-500 transition-all relative">
               <Tooltip
                  overlayStyle={{ overflow: "hidden" }}
                  placement="leftTop"
                  title={isWishlist ? "Already Added" : "Add To Wishlist"}
               >
                  {/* wishlist button  */}
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
               <div className="overflow-hidden mx-auto bg-white rounded-lg  ">
                  <img
                     src={image}
                     onClick={() => setOpenModal(true)}
                     alt="Product"
                     className=" w-full md:h-[250px]   h-full  rounded-lg"
                  />
               </div>
               {/* preview item image modal  */}
               <div
                  onClick={() => setOpenModal(false)}
                  className={`fixed flex  justify-center items-center z-[100] ${openModal ? "visible opacity-1" : "invisible opacity-0"} inset-0 w-full h-full  bg-black/60 duration-100`}
               >
                  <div
                     onClick={(e_) => e_.stopPropagation()}
                     className={`absolute w-[300px] md:w-[500px]   drop-shadow-2xl rounded-lg ${openModal ? "opacity-1 duration-300 translate-y-0" : "-translate-y-20 opacity-0 duration-150"} group overflow-hidden`}
                  >
                     {/* close button */}
                     <svg
                        onClick={() => setOpenModal(false)}
                        className="w-10 mx-auto  absolute right-2 top-2 drop-shadow-[0_0_10px_black] cursor-pointer"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                           id="SVGRepo_tracerCarrier"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                           <path
                              d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                              fill="#fff"
                           ></path>
                        </g>
                     </svg>
                     {/* image */}
                     <img
                        src={item.image}
                        className="min-w-[300px] md:min-w-[400px] bg-white min-h-[200px] md:min-h-[350px] bg-black/20"
                        alt=""
                     />
                  </div>
               </div>

               <div className="text-center mt-4">
                  <h3 className="text-lg font-bold text-gray-800">{name}</h3>
                  <h4 className="text-xl text-gray-700 font-bold mt-2">
                     ${price}{" "}
                     <del className="text-gray-400 ml-2 font-medium ">$15</del>
                  </h4>
                  <div className="flex gap-1 mt-1 text-xs justify-center items-center text-gray-400">
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <span className="mt-1">(0)</span>
                  </div>
                  {/* cart button  */}
                  {isCart ? (
                     <Link to="/dashboard/myCart">
                        <button
                           type="button"
                           data-play="play-view"
                           className=" mx-auto mt-3 flex items-center justify-center play-view gap-1 px-6 py-2.5 bg-[#FFA200] mb-3 hover:bg-[#222] transition-all text-sm duration-500 text-white     rounded-full"
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
                        className="play-cart mx-auto mt-3 flex items-center justify-center gap-1 px-6 py-2.5 bg-[#FFA200] mb-3 hover:bg-[#222] transition-all text-sm duration-500 text-white     rounded-full"
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
         )}
      </div>
   );
};

export default FoodCard;
