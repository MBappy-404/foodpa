import { Badge, Button, Drawer, Dropdown, Menu } from 'antd';
import { useContext, useState } from 'react';
import logo from '../../assets/assets/Logo/logo2.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import useCart from '../../hooks/useCart';
import useWishlist from '../../hooks/useWishlist';
import useAdmin from '../../hooks/useAdmin';

function getItem(label, key, icon, children, type, linkTo,onClick) {
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
    getItem('Order', '3', null, null, null, '/order/bread', ),
    getItem('Contact', '4', null, null, null, '/contact'),
  ];

  const admin = isAdmin; // Change this condition as needed

  // show link user type 
  if (admin) {
    menuItems.push(getItem('Dashboard', 'sub2', null, [
      getItem('Dashboard', '9', null, null, null, '/dashboard/admin-dashboard'),
      getItem('All-Users', '15', null, null, null, '/dashboard/all-users'),
      getItem('Add-Items', '16', null, null, null, '/dashboard/add-item'),
      getItem('Manage-Items', '17', null, null, null, '/dashboard/manage-item'),
  
    ]),);
  } else if(user) {
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
        <div className="flex justify-between  max-w-screen-xl mx-auto items-center px-2 md:px-8">
          <div className="flex">
            <div>
              {/* <!-- Website Logo --> */}
              <a href="#" className="flex items-center py-4 md:py-6">
                <img src={logo} alt="Logo" className="w-36 mr-4" />
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
                    overlayStyle={{ width: '150px',}}
                     
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
            user?  <div className='flex justify-center items-center'>
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
            </div>:  <Link to='login' className="py-1 px-2 font-medium text-gray-500 rounded hover:bg-yellow-500 hover:text-white transition duration-300">Log In</Link>
          
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
        <Drawer title="FoodPa"   placement="right" onClose={onClose} open={open}>

          <div
            style={{
              width: 300,
              margin: 'auto',

            }}
          >
            <Menu
              mode="inline"
              style={{ borderRadius: '20px', padding: '15px', backgroundColor: '#D58B09', fontSize: '15px', color: 'white', fontFamily: 'Farro' }}
            >
              {menuItems.map(item => {
                if (item.children) {
                  return (
                    <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
                      {item.children.map(subItem => (
                        <Menu.Item key={subItem.key}>
                          <Link to={subItem.linkTo}>{subItem.label}</Link>
                        </Menu.Item>
                      ))}
                    </Menu.SubMenu>
                  );
                } else {
                  return (
                    <Menu.Item style={{ marginBottom: '15px', }} key={item.key}  >
                      <Link to={item.linkTo}>{item.label}</Link>
                    </Menu.Item>
                  );
                }
              })}
              {
                user && <Menu.Item key={'logout'}>
                <Link onClick={handleLogout}>Logout</Link>
                </Menu.Item>
              }
            </Menu>

          </div>
        </Drawer>
      </div>

    </div>







  );
};

export default Navbar;