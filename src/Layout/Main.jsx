 
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const Main = () => {

     const location = useLocation();
     const loginPage = location.pathname.includes('login')
     const signUpPage = location.pathname.includes('signUp')
     return (
          <div className=' max-w-screen-xl    mx-auto'>
               
             {(signUpPage || loginPage) ||   <Navbar/>}
               <Outlet/>
              {(signUpPage || loginPage) ||  <Footer/>}
          </div>
     );
};

export default Main;