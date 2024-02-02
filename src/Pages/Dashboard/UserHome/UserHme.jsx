import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useReview from '../../../hooks/useReview'
import usePayment from "../../../hooks/usePayment";
import { useEffect } from "react";
import userPhoto from '../../../assets/assets/others/profile.png'

const UserHme = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [review] = useReview()
  const [payments] = usePayment();
  const { user } = useAuth();
  const payment = payments.filter(payment => payment.trxId);

  const userReview = review?.filter(userReview => userReview.email === user?.email);
  const reviews = userReview?.map(review => review.email === user.email)

  
  // const payments = userPayment?.map(payment => payment?.email === user?.email)

  // console.log(reviews?.length);
  return (
    <div className=" ">
      <Helmet>
        <title>Foodpa | User-Dashboard</title>
      </Helmet>

      <div className="px-2 md:px-5 min-h-[100vh] lg:px-10">
        <div className="grid grid-cols-1   sm:grid-cols-2 lg:grid-cols-3 py-3 gap-4">
          <Link to='/menu' className="  text-white-600" >
            <div data-pay='play-menu' className="bg-[#d58b09]  cursor-pointer play-menu  shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-[#be8f3d]  text-white font-medium group">
              <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 ">

                <div className=" flex justify-center   mt-2 ">
                  <div>
                    <lord-icon
                      target=".play-menu"
                      src="https://cdn.lordicon.com/vdjwmfqs.json"
                      trigger="hover"
                      colors="primary:#d58b09"
                      style={{ width: "30px", height: "30px", }}>
                    </lord-icon>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <h1 className="text-xl">MENU</h1>
                {/* <p>Menu</p> */}
              </div>
            </div>
          </Link>
          <Link to='/order/bread' className="  text-white-600" >
            <div data-pay='play-menu' className="bg-[#d58b09]  cursor-pointer play-menu  shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-[#be8f3d]  text-white font-medium group">
              <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 ">
                <div className=" flex justify-center  mt-2 ">
                  <div>
                    <lord-icon
                      target=".play-menu"
                      src="https://cdn.lordicon.com/evyuuwna.json"
                      trigger="hover"
                      colors="primary:#d58b09"
                      style={{ width: "30px", height: "30px", }}>
                    </lord-icon>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <h1 className="text-xl">SHOP</h1>
                {/* <p>My Orders</p> */}
              </div>
            </div>
          </Link>
          <Link to='/contact' className="  text-white-600" >
            <div data-pay='play-menu' className="bg-[#d58b09]  cursor-pointer play-menu  shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-[#be8f3d]  text-white font-medium group">
              <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 ">
                <div className=" flex justify-center  mt-2 ">
                  <div>
                    <lord-icon
                      target=".play-menu"
                      src="https://cdn.lordicon.com/rsvfayfn.json"
                      trigger="hover"
                      colors="primary:#d58b09"
                      style={{ width: "30px", height: "30px", }}>
                    </lord-icon>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <h1 className="text-xl ">CONTACT</h1>
                {/* <p>My Orders</p> */}
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row py-5 md:py-0 justify-evenly bg-gray-100  rounded-t-2xl items-center ">
        <div className=" mb-4 border-b-4 md:border-none  border-gray-300 pb-4 flex justify-start md:flex-col items-center ">
          <img src={user?.photoURL ? user?.photoURL : userPhoto} alt="User" className="w-12 h-12 md:w-20 shadow-md border md:h-20 rounded-full mr-4" />
          <span className="text-base md:text-lg font-bold text-gray-500 mt-0 md:mt-5">HEY, {user?.displayName}</span>
        </div>
        <div className="border hidden md:block border-gray-400 w-1 bg-gray-400 h-56"></div>
        <div className="">
          <h2 className="text-xl text-gray-600  font-semibold mb-3 ">Your Activity</h2>
          <ul className="text-gray-500">
            <li className="mb-2 flex justify-start gap-1">  
            <lord-icon
                 src="https://cdn.lordicon.com/pbrgppbb.json"
                colors="primary:black"
                style={{width:"22px",height:"22px", marginTop: '1px'}}>
              </lord-icon>

            Orders: {payments?.length}</li>
            <li className="mb-2 flex justify-start gap-1">
              <lord-icon
                src="https://cdn.lordicon.com/xjronrda.json"
                colors="primary:black"
                style={{width:"22px",height:"22px", marginTop: '1px'}}>
              </lord-icon>
             <span>  Reviews: {reviews?.length ? reviews?.length : '0'}</span>
              </li>
            <li className="mb-2 flex justify-start gap-1">
              <lord-icon
                src="https://cdn.lordicon.com/gjjvytyq.json"
                colors="primary:black"
                style={{width:"22px",height:"22px", marginTop: '1px'}}>
              </lord-icon>
             <span>  Payments: {payment?.length ? payment?.length : '0'}</span>
              </li>
            
            {/* <li className="mb-2">Make Review</li> */}
          </ul>
        </div>
      </div>
      </div>
     
    </div>
  );
};

export default UserHme;