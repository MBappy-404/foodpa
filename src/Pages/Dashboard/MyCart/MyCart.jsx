import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Payments from "../Payments/Payments";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyCart = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openModal, setOpenModal] = useState(false);
  const [cart, refetch] = useCart();
  const [axiosSecure] = useAxiosSecure();
  const totalPrice = cart?.reduce((sum, item) => {
    return sum + item.price;
  }, 0);

  const [counter, setCounter] = useState(1);

  // Function to handle the increase button click
  const handleIncrease = (id) => {

    setCounter(counter + 1)
     
  
  };

  // Function to handle the decrease button click
  const handleDecrease = (id) => {
   
  
  };
  const handleDelete = (id) => {
    // console.log(id);
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
        axiosSecure.delete(`/carts/${id}`,)
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
        <title>Foodpa | My-Cart</title>
      </Helmet>
      <div className=" px-2 md:px-10 min-h-[100vh] lg:px-10">
        <div className="max-w-7xl mx-auto">

          <div className="overflow-x-auto bg-gray-100 mt-3 px-1 md:px-2  rounded-t-2xl">
            <h2 className="text-xl  md:text-2xl font-bold pt-5 ml-2 text-gray-500">My Cart ({cart?.length})</h2>
            <table className="mt-5 w-full border-collapse  ">
              <thead className="whitespace-nowrap text-left border-b border-t">
                <tr>
                  <th className="text-base text-gray-500 p-4">Items</th>
                  <th className="text-base text-gray-500 p-4">Price</th>
                  <th className="text-base text-gray-500 p-4">Quantity</th>
                  <th className="text-base text-gray-500 p-4">Remove</th>

                </tr>
              </thead>
              <tbody className="whitespace-nowrap ">
                {
                  cart?.length ? <>
                    {
                      cart.map(item =>
                        <tr key={item._id} className=" border-b">
                          <td className=" py-3 px-4">
                            <div className="flex items-center gap-6 w-max">
                              <div className="h-12 md:h-20 border shrink-0">
                                <img src={item.image} className="w-20 md:w-24 shadow-lg h-full object-cover" />
                              </div>
                              <div>
                                <p className="text-sm  md:text-lg font-bold text-gray-500">{item.name}</p>
                              </div>
                            </div>
                          </td>
                          <td className=" py-3 px-6">
                            <h4 className="text-sm md:text-lg font-bold text-gray-500">${item.price}</h4>
                          </td>

                          {/* Item Quantity  */}
                          <td className=" py-3 px-6">
                            <div className="flex  divide-x border w-max">
                              
                              <button type="button" className="bg-transparent px-3 py-1   font-semibold text-gray-500 text-md">
                                {counter}
                              </button>
                               
                            </div>
                          </td>
                          {/* Delete cart icon  */}
                          <td className="  py-3 px-6">
                            <button onClick={() => handleDelete(item._id)} type="button" className="bg-transparent border flex items-center  px-2 py-2 font-semibold">
                              <lord-icon
                                src="https://cdn.lordicon.com/wpyrrmcq.json"
                                trigger="hover"
                                colors="primary:red"
                                style={{ width: "20px", height: "20px", }}>
                              </lord-icon>
                            </button>
                          </td>

                        </tr>)
                    }

                  </> : <>
                  {/* when cart is null  */}
                   <tr>
                    <td className=" py-3 px-4">
                      <div className="flex items-center gap-6 w-max">
                        <div className="h-10 w-16 md:h-20 md:w-28 bg-gray-300 "></div>
                        <div className="w-16 h-4 md:w-32 md:h-6 bg-gray-300 "></div>
                      </div>
                    </td>
                    <td className=" py-3 px-4">
                      <div className="w-10 h-4 md:w-16 md:h-6 bg-gray-300 "></div>
                    </td>
                    <td className=" py-3 px-4">
                      <div className="flex divide-x border w-max">
                        <div className="bg-gray-100 px-4 py-2 font-semibold  w-10 h-3 md:h-6 "></div>
                        <div className="bg-transparent px-4 py-2 font-semibold text-gray-500 text-md w-10 h-3 md:h-6 "></div>
                        <div className="bg-gray-300 text-white px-4 py-2 font-semibold w-10 h-3 md:h-6 "></div>
                      </div>
                    </td>
                    <td className=" py-3 px-4">
                      <div className="bg-gray-300 border  flex items-center px-2 py-2 font-semibold  h-2 md:w-12 md:h-6 "></div>
                    </td>
                  </tr>

                  </>
                }

              </tbody>

            </table>
            <div>

              {!cart?.length &&
                <>
                  <p className="text-lg text-center text-gray-500">Your Cart is empty.</p>
                  <div className="  flex  mb-5 justify-center">

                    <Link to='/order/bread'>
                      <Link to='/order/bread'>
                        <button className=" ml-1 mt-6 flex  gap-1 px-5 md:px-7 py-2 md:py-2.5 bg-[#FFA200] mb-3 hover:bg-[#222] transition-all text-xs md:text-sm duration-300 text-white    rounded-full ">
                          Go to Order
                        </button>
                      </Link>
                    </Link>
                  </div>
                </>

              }
            </div>
          </div>

          {/* check out and sub total  */}
          {
            cart?.length > 0 &&
            <div className=" max-w-sm transition-all  bg-gray-100 p-3  duration-500 ml-auto">
              <ul className="text-gray-500 divide-y">
                <li className="flex flex-wrap gap-4 text-sm md:text-md py-3">Subtotal <span className="ml-auto font-bold">${totalPrice}</span></li>
                <li className="flex flex-wrap gap-4 text-sm md:text-md py-3">Discount <span className="ml-auto font-bold">$0.00</span></li>
                <li className="flex flex-wrap gap-4 text-sm md:text-md py-3">Tax <span className="ml-auto font-bold">$0.00</span></li>
                <li className="flex flex-wrap gap-4 text-sm md:text-md py-3 font-bold">Total <span className="ml-auto">${totalPrice.toFixed(2)}</span></li>
              </ul>
              <button onClick={() => setOpenModal(true)} type="button" className="mt-6 text-sm md:text-md px-6 py-2.5 w-full bg-[#FFA200] hover:bg-[#222]  transition-all duration-500 text-white rounded">Check
                out</button>
            </div>

          }
        </div>
        {
          cart?.length > 0 && <p className="  flex justify-end" >  <a target=" _blank" href="https://stripe.com/docs/testing" className="text-xs   pt-3 text-blue-600 font-semibold underline">Try demo payment</a></p>
        }
      </div>


      <div className="mx-auto flex items-center justify-center">
        <div className={`fixed flex justify-center items-center z-[100] ${openModal ? 'visible opacity-1' : 'invisible opacity-0'} p-2 sm:p-0 inset-0 backdrop-blur-sm bg-black/20 duration-100`}>
          <div className={`  w-full max-w-lg  2xl:max-w-xl p-4 text-center bg-white drop-shadow-2xl rounded-lg ${openModal ? 'scale-1 opacity-1 duration-500' : 'scale-0 opacity-0 duration-500'}`}>
            <div className="flex justify-end pr-2">
              <lord-icon onClick={() => setOpenModal(false)}
                src="https://cdn.lordicon.com/nqtddedc.json"
                trigger="hover"
                colors="primary:black"
                style={{ width: "25px", height: "25px", cursor: 'pointer' }}>
              </lord-icon>
            </div>
            <Payments counter={counter} />

          </div>
        </div>
      </div>

    </div>
  );
};

export default MyCart;



