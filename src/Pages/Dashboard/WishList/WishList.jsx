import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import CustomButton from "../../../Components/Button/CustomButton";
import useWishlist from "../../../hooks/useWishlist";
import useAuth from "../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";



const WishList = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { user } = useAuth();
  const [wishlist, refetch] = useWishlist();
  const [axiosSecure] = useAxiosSecure();

  const handleCart = item => {
    // console.log(item);

    const cartItem = { orderId: item._id, name: item.name, image: item.image, price: item.price, recipe: item.recipe, email: user?.email }
    //  send database
    axiosSecure.post('http://localhost:5000/carts' , cartItem)
  
      .then(data => {
        if (data.data.result.acknowledged && data.data.deleteResult.deletedCount) {
          // console.log(data.result.acknowledged && data.deleteResult.deletedCount);
          Swal.fire({
            title: "Success!",
            text: "Item added to cart.",
            icon: "success",
            timer: 1000,
            showConfirmButton: false
          });
          refetch();
        }
      })

  }


  const handleDeleteWishlist = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want delete this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        axiosSecure.delete(`/wishlist/${id}`)
          .then(data => {
            if (data.data.deletedCount > 0) {
              // console.log(data.deletedCount);
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Item has been deleted.",
                icon: "success",
                timer: 1000,
                showConfirmButton: false
              });

            }
          })
      }
    });
  }

  return (
    <div>
  <Helmet>
        <title>Foodpa | Wishlist</title>
      </Helmet>

      <div className="min-h-[100vh]">
        <div className=" px-2 md:px-5 lg:px-10 mx-auto">
          <div className="overflow-x-auto bg-gray-100 mt-3 px-1 md:px-2 rounded-t-2xl">
          <h2 className="text-xl md:text-2xl   font-bold pt-5 ml-2 text-gray-500">Wishlist ({wishlist?.length})</h2>
            <table className="mt-5 w-full border-collapse divide-y">
              <thead className="whitespace-nowrap border-t text-left">
                <tr>
                  <th className="text-base text-gray-500 p-4">Items</th>
                  <th className="text-base text-gray-500 p-4">Price</th>
                  <th className="text-base text-gray-500 p-4">Cart</th>
                  <th className="text-base text-gray-500 p-4">Remove</th>
                </tr>
              </thead>
              <tbody className="whitespace-nowrap divide-y">

                {
                  wishlist?.length ? <>{
                    wishlist.map(item => <tr key={item._id}>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-6 w-max">
                          <div className="h-20 shrink-0">
                            <img src={item.image} className="w-full h-full object-contain" />
                          </div>
                          <div>
                            <p className="text-lg font-bold text-[#333]">{item.name}</p>
                            <p className="text-xs text-gray-400">{item.date}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <h4 className="text-lg font-bold text-[#333]">${item.price}</h4>
                      </td>
                      <td className="py-3 px-4">
                        <button onClick={() => handleCart(item)} className="font-base text-sm bg-[#FFA200] text-white px-3 py-1.5 rounded-full">Move To Cart</button>
                      </td>
                      <td className="py-3 px-4">
                        <button onClick={() => handleDeleteWishlist(item._id)} type="button" className="bg-transparent border flex items-center  px-2 py-2 font-semibold">
                          <lord-icon
                            src="https://cdn.lordicon.com/wpyrrmcq.json"
                            trigger="hover"
                            colors="primary:red"
                            style={{ width: "20px", height: "20px", }}>
                          </lord-icon>
                        </button>
                      </td>

                    </tr>)
                  }</> :
                    <>
                      <tr>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-6 w-max">
                            <div className="h-20 w-28 bg-gray-300 "></div>
                            <div className="w-32 h-6 bg-gray-300 "></div>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="w-16 h-6 bg-gray-300 "></div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <button className="font-base text-sm bg-gray-300 text-white px-3 h-6 rounded-full w-20 "></button>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="bg-gray-300 border flex items-center px-2 py-2 font-semibold w-12 h-6 "></div>
                        </td>
                      </tr>

                    </>
                }

              </tbody>
            </table>

            {!wishlist?.length && <div>
              <p className="text-lg text-center text-gray-500">Your wishlist is empty.</p>
              <div className=" flex justify-center mb-5">
                <Link to='/order/bread'>
                <button className=" ml-1 mt-6 flex  gap-1 px-7 py-2.5 bg-[#FFA200] mb-3 hover:bg-[#222] transition-all text-sm duration-300 text-white    rounded-full ">
                      Add To Cart
                    </button>
                </Link>
              </div>
            </div>}
          </div>

        </div>
      </div>
    </div>
  );
};

export default WishList;




