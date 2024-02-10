import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Feature from "../Feature/Feature";
import Popular from "../Popular/Popular";
import Recommended from "../Recommended/Recommended";
import Testimonials from "../Testimonilas/Testimonials";
import Membership from "../Membership/Membership";
import { useEffect } from "react";
import Faq from "../Faq/Faq";



const Home = () => {
     useEffect(() => {
          window.scrollTo(0, 0);
     }, []);

     return (
          <div>
               {/* home page layout  */}
               <Helmet>
                    <title>Foodpa-Home</title>
               </Helmet>
               <Banner />
               <Category />
               <Popular />
               <Recommended />
               <Feature />
               <Testimonials />
               <Membership />
               <Faq />
          </div>
     );
};

export default Home;