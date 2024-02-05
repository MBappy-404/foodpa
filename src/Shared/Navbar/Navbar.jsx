import { Badge, Button, Drawer, Dropdown, Menu } from 'antd';
import { useContext, useState } from 'react';
import logo from '../../assets/assets/Logo/logo2.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import useCart from '../../hooks/useCart';
import useWishlist from '../../hooks/useWishlist';
import useAdmin from '../../hooks/useAdmin';
import { FaCartArrowDown, FaChartSimple,  FaFilePen, FaHeart, FaHouse,  FaPhoneVolume,  FaRegCalendarDays, FaRegCalendarPlus, FaRightFromBracket, FaRightToBracket, FaStar, FaUsers, FaUtensils } from "react-icons/fa6";

function getItem(label, key, icon, children, type, linkTo, onClick) {
  return {
    key,
    icon,
    children,
    label,
    type,
    linkTo,
    onClick
  };
}
const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const [wishlist] = useWishlist();
  const [isAdmin] = useAdmin();
  const [collapsed, setCollapsed] = useState(true);

  // console.log(wishlist);

  const handleLogout = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error))

  }

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };



  const handleMenuClick = () => {
    setOpen(false);
  };


  const items = [
    {
      key: '1',
      label: (
        <Link to={`${isAdmin ? '/dashboard/admin-dashboard' : '/dashboard/user-dashboard'}`} rel="noopener noreferrer" className='text-sm   font-[Farro] font-semibold'>
          Dashboard
        </Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link to="/dashboard/myCart" rel="noopener noreferrer" className='text-sm   font-[Farro]  font-semibold'>
          My Orders
        </Link>
      ),
    },
    {
      key: '3',
      label: (
        <a onClick={handleLogout} className='text-sm   font-[Farro] font-semibold' rel="noopener noreferrer"> Logout</a>
      ),
    },
  ];


  const menuItems = [
    getItem('Home', '1', null, null, null, '/'),
    getItem('Menu', '2', null, null, null, '/menu'),
    getItem('Order', '3', null, null, null, '/order/bread',),
    getItem('Contact', '4', null, null, null, '/contact'),
  ];

  const admin = isAdmin; // Change this condition as needed

  // show link user type 
  if (admin) {
    menuItems.push(getItem('Dashboard', 'sub2', null, [
      getItem('Admin', '9', null, null, null, '/dashboard/admin-dashboard'),
      getItem('All-Users', '15', null, null, null, '/dashboard/all-users'),
      getItem('Add-Items', '16', null, null, null, '/dashboard/add-item'),
      getItem('Manage-Items', '17', null, null, null, '/dashboard/manage-item'),

    ]),);
  } else if (user) {
    menuItems.push(getItem('Dashboard', 'sub2', null, [
      getItem('My-Activity', '9', null, null, null, '/dashboard/user-dashboard'),
      getItem('Wishlist', '12', null, null, null, '/dashboard/wishlist'),
      getItem('My-Cart', '13', null, null, null, '/dashboard/myCart'),
      getItem('Payments', '14', null, null, null, '/dashboard/payment-history'),


    ]),);
  }


  return (


    <div className="fixed left-0 right-0 top-0  z-20">
      <div className="  mx-auto bg-white shadow-lg ">
        <div className="flex justify-between  max-w-screen-xl mx-auto items-center px-3 md:px-8">
          <div className="flex">
            <div>
              {/* <!-- Website Logo --> */}
              <a href="#" className="flex items-center py-4 md:py-6">
                <Link to='/'> <img src={logo} alt="Logo" className="w-36 mr-4" /></Link>
              </a>
            </div>
          </div>
          {/* <!-- Secondary Navbar items --> */}
          <div className="hidden cursor-pointer md:flex justify-between items-center space-x-3 ">
            <div className="hidden md:flex items-center space-x-1">
              <Link to='/' className='py-4 px-2 text-gray-500 font-semibold hover:text-yellow-500 transition duration-300'>Home</Link>
              <Link to='/menu' className='py-4 px-2 text-gray-500 font-semibold hover:text-yellow-500 transition duration-300'>Our Menu</Link>
              <Link to='/order/bread' className='py-4 px-2 text-gray-500 font-semibold hover:text-yellow-500 transition duration-300'>Order</Link>
              <Link to='/contact' className='py-4 px-2 text-gray-500 font-semibold hover:text-yellow-500 transition duration-300'>Contact Us</Link>
            </div>
          </div>

          <div className='mt-3'>
            <div className='flex gap-4 items-center '>
              {
                user && <> <Link className=' hidden md:block rounded-full' to="/dashboard/myCart">
                  <Badge showZero offset={[-3, 3]} count={cart?.length ? cart?.length : 0} style={{ backgroundColor: '#FFA200' }}>
                    <lord-icon
                      src="https://cdn.lordicon.com/pbrgppbb.json"
                      colors="primary:#7A808C"
                      trigger="hover"
                      style={{ width: "30px", height: "30px", }}>
                    </lord-icon>
                  </Badge>
                </Link>
                  <Link className='rounded-full hidden md:block' to="/dashboard/wishlist" >
                    <Badge showZero count={wishlist?.length && wishlist?.length} style={{ backgroundColor: '#FFA200' }}>
                      <lord-icon
                        src="https://cdn.lordicon.com/biobqpgs.json"
                        colors="primary:#7A808C"
                        trigger="hover"
                        style={{ width: "25px", height: "25px", }}>
                      </lord-icon>
                    </Badge>
                  </Link></>
              }
              {
                user ? <div className='hidden md:block'>
                  <Dropdown
                    menu={{
                      items,
                    }}
                    placement="bottomRight"
                    overlayStyle={{ width: '150px', }}

                  >

                    <lord-icon
                      src="https://cdn.lordicon.com/xcxzayqr.json"
                      colors="primary:#7A808C"
                      trigger="hover"
                      style={{ width: "26px", height: "26px", cursor: 'pointer', marginTop: '-4px' }}>
                    </lord-icon>
                  </Dropdown>
                </div> :
                  <div className=' hidden md:block'>
                    <div className='flex -mt-3 items-center  gap-2'>
                      <Link to='login' className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-yellow-500 hover:text-white transition duration-300">Log In</Link>
                      <Link to='signUp' className="py-2 px-2 font-medium text-white bg-yellow-500 rounded hover:bg-yellow-400 transition duration-300">Sign Up</Link>
                    </div>
                  </div>

              }
            </div>
          </div>
          {/* <!-- Mobile menu button --> */}
          <div className="md:hidden flex gap-5 justify-center items-center">
            {
              user ? <div className='flex justify-center items-center'>
                <Link className=' rounded-full mt-3' to="/dashboard/myCart">
                  <Badge showZero offset={[-3, 3]} count={cart?.length ? cart?.length : 0} style={{ backgroundColor: '#FFA200' }}>
                    <lord-icon
                      src="https://cdn.lordicon.com/pbrgppbb.json"
                      colors="primary:black"
                      trigger="hover"
                      style={{ width: "30px", height: "30px", }}>
                    </lord-icon>
                  </Badge>
                </Link>
              </div> : <Link to='login' className="py-1 px-2 font-medium text-gray-500 rounded hover:bg-yellow-500 hover:text-white transition duration-300">Log In</Link>

            }
            <Button onClick={showDrawer} className="outline-none mobile-menu-button">
              <svg className=" w-6 h-6 text-gray-500 hover:text-yellow-500 "

                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </Button>
          </div>
        </div>
      </div>
      {/* <!-- mobile menu --> */}
      <div className="hidden mobile-menu">
        <Drawer placement="right" onClose={onClose} open={open}>
          <div
            style={{
              width: 'full',
              margin: 'auto',

            }}
          >

            {/* small device side menu  */}
            <nav
              className="bg-[#f7f7f8] font-[Farro]   min-w-[250px] py-6 px-4 flex flex-col overflow-auto">
              <a href="javascript:void(0)"><img src={logo} alt="logo" className='w-[100px]' />
              </a>
              <ul onClick={handleMenuClick} className="space-y-3 flex-1 mt-6">
                <li>
                  <Link to='/' className='text-gray-600'>
                    <a href="javascript:void(0)"
                      className="text-gray-600  hover:text-gray-600 font-semibold text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all">
                      <FaHouse className='mr-3 text-gray-500 mb-1 w-5 h-5' />
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to='/menu' className='text-gray-600'>
                    <a href="javascript:void(0)"
                      className="text-gray-600  hover:text-gray-600 font-semibold text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all">
                      <FaUtensils className='mr-3 text-gray-500 mb-1 w-5 h-5' />
                      Menu
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to='/order/bread' className='text-gray-600'>
                    <a href="javascript:void(0)"
                      className="text-gray-600  hover:text-gray-600 font-semibold text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all relative">
                      <FaFilePen className='mr-3 text-gray-500 mb-1 w-5 h-5' />
                      Order
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to='/contact' className='text-gray-600'>
                    <a href="javascript:void(0)"
                      className="text-gray-600  hover:text-gray-600 font-semibold text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all relative">
                      <FaPhoneVolume className='mr-3 text-gray-500 mb-1 w-5 h-5' />
                      Contact
                    </a>
                  </Link>
                </li>

                {
                  user && <>

                    {
                      isAdmin ? <>
                      {/* admin dashboard  small device */}
                        <li>
                          <a href="javascript:void(0)"
                            className="text-gray-600 hover:text-gray-600 font-semibold text-sm flex items-center hover:bg-gray-200 rounded px-4 py-4 border-b transition-all">
                            Dashboard
                          </a>
                        </li>
                        <li>
                          <Link to='/dashboard/admin-dashboard' className='text-gray-600'>
                            <a href="javascript:void(0)"
                              className="text-gray-600 hover:text-gray-600 font-semibold text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all">
                              <FaChartSimple className='mr-3 text-gray-500 mb-1 w-5 h-5' />
                              Admin-Panel
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link to='/dashboard/add-item' className='text-gray-600'>
                            <a href="javascript:void(0)"
                              className="text-gray-600 hover:text-gray-600 font-semibold text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all">
                              <FaRegCalendarPlus className='mr-3 text-gray-500 mb-1 w-5 h-5' />
                              Add-Items
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link to='/dashboard/manage-item' className='text-gray-600'>
                            <a href="javascript:void(0)"
                              className="text-gray-600 hover:text-gray-600 font-semibold text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all">
                              <FaRegCalendarDays className='mr-3 text-gray-500 mb-1 w-5 h-5' />
                              Manage-Items
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link to='/dashboard/all-users' className='text-gray-600'>
                            <a href="javascript:void(0)"
                              className="text-gray-600 hover:text-gray-600 font-semibold text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all">
                              <FaUsers className='mr-3 text-gray-500 mb-1 w-5 h-5' />
                              All-Users
                            </a>
                          </Link>
                        </li></> :
                        <>

                        {/* user dashboard small device */}
                          <li>

                            <a href="javascript:void(0)"
                              className="text-gray-600 hover:text-gray-600 font-semibold text-sm flex items-center hover:bg-gray-200 rounded px-4 py-4 border-b transition-all">
                              Dashboard
                            </a>
                          </li>
                          <li>
                            <Link to='/dashboard/user-dashboard' className='text-gray-600'>
                              <a href="javascript:void(0)"
                                className="text-gray-600 hover:text-gray-600 font-semibold text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all">
                                <FaChartSimple className='mr-3 text-gray-500 mb-1 w-5 h-5' />
                                My-Activity
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link to='/dashboard/wishlist' className='text-gray-600'>
                              <a href="javascript:void(0)"
                                className="text-gray-600 hover:text-gray-600 font-semibold text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all">
                                <FaHeart className='mr-3 text-gray-500 mb-1 w-5 h-5' />
                                WIshlist
                                <span
                                  className="bg-red-400 w-[18px] h-[18px] flex items-center justify-center text-white text-[11px] font-bold ml-auto rounded-full">{wishlist?.length}</span>
                              </a>
                            </Link>
                          </li>

                          <li>
                            <Link to='/dashboard/myCart' className='text-gray-600'>
                              <a href="javascript:void(0)"
                                className="text-gray-600 hover:text-gray-600 font-semibold text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all relative">
                                <FaCartArrowDown className='mr-3 text-gray-500 mb-1 w-5 h-5' />
                                My-Cart
                                <span
                                  className="bg-red-400 w-[18px] h-[18px] flex items-center justify-center text-white text-[11px] font-bold ml-auto rounded-full">{cart?.length}</span>
                              </a>
                            </Link>
                          </li>

                          <li>
                            <Link to='/dashboard/review' className='text-gray-600'>
                              <a href="javascript:void(0)"
                                className="text-gray-600 hover:text-gray-600 font-semibold text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all">
                                <FaStar className='mr-3 text-gray-500 mb-1 w-5 h-5' />
                                Give-Review
                              </a>
                            </Link>
                          </li>
                        
                        </>
                    }
                  </>
                }

              </ul>

              <ul onClick={handleMenuClick} className="space-y-3 text-gray-600 mt-3">

                {
                  user ? <li>
                    <a href="javascript:void(0)"
                      className="   font-semibold text-sm flex items-center  rounded px-4 py-3 transition-all">
                      <FaRightFromBracket className='mr-3 text-gray-500 mb-1 w-5 h-5' />
                      <Link onClick={handleLogout} >Log out</Link>
                    </a>
                  </li> :

                    <li>
                      <Link to='/login' className='text-gray-600'>
                        <a href="javascript:void(0)"
                          className="text-gray-600  hover:text-gray-600 font-semibold text-sm flex items-center rounded px-4 py-3 transition-all">
                          <FaRightToBracket className='mr-3 text-gray-500 mb-1 w-5 h-5' />
                          Log In
                        </a>
                      </Link>
                    </li>
                }
              </ul>
            </nav>

          </div>
        </Drawer>
      </div>

    </div>







  );
};

export default Navbar;