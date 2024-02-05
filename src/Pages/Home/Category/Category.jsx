// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

// images 

import slideImage1 from '../../../assets/assets/home/bread-1.png'
import slideImage2 from '../../../assets/assets/home/donut-1.png'
import slideImage3 from '../../../assets/assets/home/hamburger-1.png'
import slideImage4 from '../../../assets/assets/home/sandwich-1.png'
import slideImage5 from '../../../assets/assets/home/pizza-1.png'
import slideImage6 from '../../../assets/assets/home/tacos-1.png'
import SectionTittle from '../../../Components/SectionTittle/SectionTittle';
import { Link } from 'react-router-dom';
import useMenuData from '../../../hooks/useMenuData';

const Category = () => {

const [menu] = useMenuData();

const bread = menu.filter(item => item.category === 'bread')
const donut = menu.filter(item => item.category === 'donut')
const hamburger = menu.filter(item => item.category === 'hamburger')
const pizza = menu.filter(item => item.category === 'pizza')
const sandwich = menu.filter(item => item.category === 'donut')
const tacos = menu.filter(item => item.category === 'bread')
 


  return (
    <div className="px-2  overflow-hidden ">
      <div>
        <SectionTittle subHeading={"From: 9am to 10pm"} heading={"Order Online"} />
      </div>

      <div className='py-10 md:py-10 relative  -mt-5 md:mt-0  px-2 md:px-5 '>
        <Swiper
          style={{ paddingBottom: '40px' }}
          navigation={{
            //  slidesPerView:true,
            prevEl: '.prev',
            nextEl: '.next',
          }}
          // navigation={true}
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          effect="slide"  // Use the "slide" effect for smooth transitions
          speed={1000} 
          breakpoints={{
            0: {
              slidesPerView: 1,

            },
            768: {
              slidesPerView: 2,

            },
            1024: {
              slidesPerView: 3,

            },
            1200: {
              slidesPerView: 3,

            },
          }}

          modules={[Navigation]}
          className="mySwiper"
        >

          <div className='swiper-wrapper'>

            <SwiperSlide>
              <Link to={`/order/bread`}>
                <div className='bg-[#95A500]  text-white py-4 p-2     rounded-xl'>

                  <div className="mt-4">
                    <div className="relative flex flex-col justify-end  p-2 rounded-b-xl ">
                      <div className="   relative flex cursor-pointer justify-between p-2 rounded-xl before:absolute before:inset-y-0  items-center     before:transition before:duration-500 hover:before:opacity-100">
                        <div className="  relative ml-4 md:ml-3">
                          <h4 className="text-xl md:text-2xl  font-semibold">BREAD</h4>
                          <h4 className='text-sm '>{bread?.length} Items</h4>                  
                        </div>
                        <img className="absolute bottom-0 translate-y-14 translate-x-9 md:translate-x-11 right-6 w-[11rem] md:w-[13rem]  transition duration-300 " src={slideImage1} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link to={`/order/donut`}>
                <div className='bg-[#FE8712]  text-white py-4 p-2    rounded-xl'>
                  <div className="mt-4">
                    <div className="relative flex flex-col justify-end  p-2 rounded-b-xl ">
                      <div className="   relative flex cursor-pointer justify-between p-2 rounded-xl before:absolute before:inset-y-0  items-center     before:transition before:duration-500 hover:before:opacity-100">
                        <div className="  relative ml-4 md:ml-3">
                          <h4 className="text-xl md:text-2xl  font-semibold">DONUT</h4>
                          <h4 className='text-sm '>{donut?.length} Items</h4>
                        </div>
                        <img className="absolute bottom-0 translate-y-14 translate-x-9 md:translate-x-11 right-6 w-[11rem] md:w-[13rem] transition duration-300 " src={slideImage2} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link to={`/order/hamburger`}>
                <div className='bg-[#59A1E7]  text-white py-4 p-2    rounded-xl'>
                  <div className="mt-4">
                    <div className="relative flex flex-col justify-end  p-2 rounded-b-xl ">
                      <div className="   relative flex cursor-pointer justify-between p-2 rounded-xl before:absolute before:inset-y-0  items-center     before:transition before:duration-500 hover:before:opacity-100">
                        <div className="  relative ml-4 md:ml-3">
                          <h4 className="text-xl md:text-2xl  font-semibold">HAMBURGER</h4>
                          <h4 className='text-sm '>{hamburger?.length} Items</h4>
                        </div>
                        <img className="absolute bottom-0 translate-y-14 translate-x-9 md:translate-x-11 right-6 w-[11rem] md:w-[13rem] transition duration-300 " src={slideImage3} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link to={`/order/pizza`}>
                <div className='bg-[#FE8712]  text-white py-4 p-2    rounded-xl'>
                  <div className="mt-4">
                    <div className="relative flex flex-col justify-end  p-2 rounded-b-xl ">
                      <div className="   relative flex cursor-pointer justify-between p-2 rounded-xl before:absolute before:inset-y-0  items-center     before:transition before:duration-500 hover:before:opacity-100">
                        <div className="  relative ml-4 md:ml-3">
                          <h4 className="text-xl md:text-2xl  font-semibold">PIZZA</h4>
                          <h4 className='text-sm '>{pizza?.length} Items</h4>
                        </div>
                        <img className="absolute bottom-0 translate-y-14 translate-x-9 md:translate-x-11 right-6 w-[11rem] md:w-[13rem] transition duration-300 " src={slideImage5} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link to={`/order/sandwich`}>
                <div className='bg-[#59A1E7]  text-white py-4 p-2    rounded-xl'>
                  <div className="mt-4">
                    <div className="relative flex flex-col justify-end  p-2 rounded-b-xl ">
                      <div className="   relative flex cursor-pointer justify-between p-2 rounded-xl before:absolute before:inset-y-0  items-center     before:transition before:duration-500 hover:before:opacity-100">
                        <div className="  relative ml-4 md:ml-3">
                          <h4 className="text-xl md:text-2xl  font-semibold">SANDWICH</h4>
                          <h4 className='text-sm '>{sandwich?.length} Items</h4>
                        </div>
                        <img className="absolute bottom-0 translate-y-14 translate-x-9 md:translate-x-11 right-6 w-[11rem] md:w-[13rem] transition duration-300 " src={slideImage4} alt="" />

                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link to={`/order/tacos`}>
                <div className='bg-[#FE8712]  text-white py-4 p-2    rounded-xl'>
                  <div className="mt-4">
                    <div className="relative flex flex-col justify-end  p-2 rounded-b-xl ">
                      <div className="   relative flex cursor-pointer justify-between p-2 rounded-xl before:absolute before:inset-y-0  items-center     before:transition before:duration-500 hover:before:opacity-100">
                        <div className="  relative ml-4 md:ml-3">
                          <h4 className="text-xl md:text-2xl  font-semibold">TACOS</h4>
                          <h4 className='text-sm '>{tacos?.length} Items</h4>
                        </div>
                        <img className="absolute bottom-0 translate-y-14 translate-x-9 md:translate-x-11 right-6 w-[11rem] md:w-[13rem] transition duration-300 " src={slideImage6} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>

      {/* NAVIGATION BAR  */}
      <div className=' flex justify-between   '>
        <div className="bg-[#FFA200] prev   -translate-y-[162px]    z-10  w-10 h-10 grid items-center justify-center rounded-full rotate-90 shrink-0  cursor-pointer    left-0 top-0 bottom-0 my-auto">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-[#fff] inline" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z" clipRule="evenodd" data-original="#000000"></path>
          </svg>
        </div>
        <div className="bg-[#FFA200]  next -translate-y-[162px]   z-10   w-10 h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0  cursor-pointer    right-0 top-0 bottom-0 my-auto">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-[#fff] inline" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z" clipRule="evenodd" data-original="#000000"></path>
          </svg>
        </div>

      </div>

    </div>
  );
};

export default Category;