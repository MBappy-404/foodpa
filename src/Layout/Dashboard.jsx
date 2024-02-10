import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { Tooltip } from "antd";
import logo from '../../src/assets/assets/Logo/logo2.png'
import Navbar from "../Shared/Navbar/Navbar";

const Dashboard = () => {

  const [isAdmin] = useAdmin();
  return (
    <div className="max-w-screen-xl bg-[#e7e7e7]  mx-auto">
      {/* <!-- component --> */}

      <div>
        <div className="  flex flex-col flex-auto flex-shrink-0 antialiased ">

          {/* <!-- Sidebar --> */}
          <div className="fixed flex flex-col  hidden md:block   w-14  md:w-64  bg-[#d58b09]   h-full text-white transition-all duration-300 border-none z-10 sidebar">

            <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
              {/* Dashboard List   */}
              <ul className="flex flex-col py-4  space-y-1">
                <li className="px-5  border-b-2 border-gray-300 pb-4 mb-5 ">
                  <div className="flex flex-row items-center h-8">
                    <div className="flex items-center justify-start      border-none">
                      <h1 className="text-xl font-bold">DASHBOARD</h1>
                    </div>
                  </div>
                </li>

                {
                  isAdmin ?
                    //  Admin Dashboard 
                    <>
                      <Tooltip placement="right" title={"Admin"}>
                        <li>
                          <Link to='/dashboard/admin-dashboard' data-play='.play-admin' className="relative play-admin flex flex-row items-center h-11 focus:outline-none hover:bg-[#a66e0c]  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-[#6e562b]  pr-6">
                            <span className="inline-flex justify-center items-center ml-4">
                              <lord-icon
                                target=".play-admin"
                                src="https://cdn.lordicon.com/whrxobsb.json"
                                trigger="click"
                                colors="primary:white"
                                style={{ width: "25px", height: "25px", }}>
                              </lord-icon>
                            </span>
                            <span className="ml-2 text-sm  tracking-wide  font-[400] mt-1 truncate">Admin-Panel</span>
                          </Link>
                        </li>
                      </Tooltip>
                      <li>
                        <Link to='/dashboard/add-item' data-play='.play-addItem' className="relative play-addItem flex flex-row items-center h-11 focus:outline-none hover:bg-[#a66e0c]  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-[#6e562b]  pr-6">
                          <span className="inline-flex justify-center items-center ml-4">
                            <lord-icon
                              target=".play-addItem"
                              src="https://cdn.lordicon.com/jgnvfzqg.json"
                              trigger="click"
                              colors="primary:white"
                              style={{ width: "25px", height: "25px", }}>
                            </lord-icon>
                          </span>
                          <span className="ml-2 text-sm  tracking-wide  font-[400] mt-1 truncate">Add Items</span>
                        </Link>
                      </li>
                      <li>
                        <Link to='/dashboard/manage-item' data-play='.play-manage' className="relative play-manage flex flex-row items-center h-11 focus:outline-none hover:bg-[#a66e0c]  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-[#6e562b]  pr-6">
                          <span className="inline-flex justify-center items-center ml-4">
                            <lord-icon
                              target=".play-manage"
                              src="https://cdn.lordicon.com/ifsxxxte.json"
                              trigger="click"
                              colors="primary:white"
                              style={{ width: "25px", height: "25px", }}>
                            </lord-icon>
                          </span>
                          <span className="ml-2 text-sm  tracking-wide  font-[400] mt-1 truncate">Manage Items</span>
                        </Link>
                      </li>
                      <li>
                        <Link to='/dashboard/all-users' data-pay='play-user' className="relative play-user flex flex-row items-center h-11 focus:outline-none hover:bg-[#a66e0c]  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-[#6e562b]  pr-6">
                          <span className="inline-flex justify-center items-center ml-4">
                            <lord-icon
                              target=".play-user"
                              src="https://cdn.lordicon.com/hrjifpbq.json"
                              trigger="click"
                              colors="primary:white"
                              style={{ width: "25px", height: "25px", }}>
                            </lord-icon>
                          </span>
                          <span className="ml-2 text-sm  tracking-wide  font-[400] mt-1 truncate">All Users</span>

                        </Link>
                      </li>
                    </>
                    :
                    <>
                      {/* User Dashboard  */}
                      <li>
                        <Link to="/dashboard/user-dashboard" data-action='.play-home' className="relative play-home flex flex-row items-center h-11 focus:outline-none hover:bg-[#a66e0c]  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-[#6e562b]  pr-6">
                          <span className="inline-flex justify-center items-center">
                            <span className="inline-flex justify-center items-center ml-4">

                              <lord-icon
                                target=".play-home"
                                src="https://cdn.lordicon.com/whrxobsb.json"
                                trigger="click"
                                colors="primary:white"
                                style={{ width: "25px", height: "25px", }}>
                              </lord-icon>

                            </span>
                          </span>
                          <span className="ml-2 text-sm  tracking-wide  font-[400] mt-1 text-white truncate">My-Activity</span>
                        </Link>

                      </li>

                      <li>
                        <Link to='/dashboard/wishlist' data-play='.play-wishlist' className="play-wishlist relative flex flex-row items-center h-11 focus:outline-none hover:bg-[#a66e0c]  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-[#6e562b]  pr-6">
                          <span className="inline-flex justify-center items-center ml-4">

                            <lord-icon
                              target=".play-wishlist"
                              src="https://cdn.lordicon.com/xyboiuok.json"
                              trigger="click"
                              colors="primary:white"
                              style={{ width: "25px", height: "25px", }}>
                            </lord-icon>

                          </span>
                          <span className="ml-2 text-sm  tracking-wide  font-[400] mt-1 truncate">Wishlist</span>

                        </Link>
                      </li>

                      <li>
                        <Link to='/dashboard/myCart' data-action='.play-cart' className="play-cart relative flex flex-row items-center h-11 focus:outline-none hover:bg-[#a66e0c]  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-[#6e562b]  pr-6">
                          <span className="inline-flex justify-center items-center ml-4">

                            <lord-icon
                              target=".play-cart"
                              src="https://cdn.lordicon.com/mfmkufkr.json"
                              trigger="click"
                              colors="primary:white"
                              style={{ width: "25px", height: "25px", }}>
                            </lord-icon>
                          </span>
                          <span className="ml-2 text-sm  tracking-wide  font-[400] mt-1 truncate">My-Cart</span>
                        </Link>
                      </li>


                      <li>
                        <Link to='/dashboard/payment-history' data-pay='play-pay' className="relative play-pay flex flex-row items-center h-11 focus:outline-none hover:bg-[#a66e0c]  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-[#6e562b]  pr-6">
                          <span className="inline-flex justify-center items-center ml-4">
                            <lord-icon
                              target=".play-pay"
                              src="https://cdn.lordicon.com/ciawvzjk.json"
                              trigger="click"
                              colors="primary:white"
                              style={{ width: "25px", height: "25px", }}>
                            </lord-icon>
                          </span>
                          <span className="ml-2 text-sm  tracking-wide  font-[400] mt-1 truncate">Payment-History</span>
                        </Link>
                      </li>
                      <li>
                        <Link to='/dashboard/review' data-pay='play-review' className="relative play-review flex flex-row items-center h-11 focus:outline-none hover:bg-[#a66e0c]  text-white-600 hover:text-white-800 border-l-4 border-transparent bold-review hover:border-[#6e562b] pr-6">
                          <span className="inline-flex justify-center  items-center ml-4">
                            <lord-icon
                              target=".play-review"
                              src="https://cdn.lordicon.com/vcuhguff.json"
                              stroke="bold"
                              trigger="click"
                              colors="primary:white"
                              style={{ width: "25px", height: "25px", strokeWidth: "5px" }}>
                            </lord-icon>
                          </span>
                          <span className="ml-2 text-sm  tracking-wide  font-[400] mt-1 truncate">Reviews</span>

                        </Link>
                      </li>
                    </>
                }
                <li className="px-5 hidden border-b-2   border-gray-300 pt-8 md:block"></li>
                <li>
                  <Link to='/' data-pay='play-bug' className="relative play-bug mt-5 flex flex-row items-center h-11 focus:outline-none hover:bg-[#a66e0c]  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-[#6e562b]  pr-6">
                    <span className="inline-flex justify-center items-center ml-4">
                      <lord-icon
                        target=".play-bug"
                        src="https://cdn.lordicon.com/cnpvyndp.json"
                        trigger="click"
                        colors="primary:white"
                        style={{ width: "25px", height: "25px", }}>
                      </lord-icon>
                    </span>
                    <span className="ml-2 text-sm  tracking-wide  font-[400] mt-1 truncate">Home</span>
                  </Link>
                </li>
                <li>
                  <Link to='/menu' data-pay='play-bug' className="relative play-bug  flex flex-row items-center h-11 focus:outline-none hover:bg-[#a66e0c]  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-[#6e562b]  pr-6">
                    <span className="inline-flex justify-center items-center ml-4">
                      <lord-icon
                        target=".play-bug"
                        src="https://cdn.lordicon.com/vdjwmfqs.json"
                        trigger="click"
                        colors="primary:white"
                        style={{ width: "25px", height: "25px", }}>
                      </lord-icon>
                    </span>
                    <span className="ml-2 text-sm  tracking-wide  font-[400] mt-1 truncate">Menu</span>
                  </Link>
                </li>
                <li>
                  <Link to='/order/bread' data-pay='play-bug' className="relative play-bug  flex flex-row items-center h-11 focus:outline-none hover:bg-[#a66e0c]  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-[#6e562b]  pr-6">
                    <span className="inline-flex justify-center items-center ml-4">
                      <lord-icon
                        target=".play-bug"
                        src="https://cdn.lordicon.com/evyuuwna.json"
                        trigger="click"
                        colors="primary:white"
                        style={{ width: "25px", height: "25px", }}>
                      </lord-icon>
                    </span>
                    <span className="ml-2 text-sm  tracking-wide  font-[400] mt-1 truncate">Shop</span>
                  </Link>
                </li>

              </ul>

            </div>
            {/* <p className=" ml-5 text-xs -mb-1">Copyright @2024</p> */}
          </div>

          {/* Outlet  */}
          <div className="h-full  mt-20 md:mt-0  mb-10 md:ml-64">
            <div className=" md:hidden">
              <Navbar />
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;



