import slider1 from '../../../assets/assets/home/22.jpg'
import slider2 from '../../../assets/assets/home/16-2.jpg'
import slider3 from '../../../assets/assets/home/15-3.jpg'
import slider4 from '../../../assets/assets/home/4.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-fade';
// Import Swiper styles
import 'swiper/css';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
 

// Initialize Swiper core and modules



const Banner = () => {
  

  return (
    <div className="pb-10 md:pb-20">

      <Swiper
        slidesPerView={1}
        loop={true}
        effect={'fade'}
        autoplay={{
          delay: 3500, // Delay between transitions in milliseconds (ms)
          disableOnInteraction: false // Allow user interaction to pause autoplay
        }}
        

        speed={1500}

        modules={[Navigation, Autoplay, EffectFade]}
        className="mySwiper"




      >
        
        <SwiperSlide>
          <div className="relative mt-16 bg-gray-900">
            {/* Background Image */}
            <img
              className="w-full object-cover h-[200px] md:h-full"
              src={slider1}
              alt="Background Image"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#001300]" style={{ width: '50%' }} ></div>

            {/* Text Container */}
            <div data-aos="fade-right" className="absolute inset-0    flex items-center px-4 md:px-8 lg:px-16 xl:px-24 text-white">
              <div className="w-1.5/2 ml-3 md:w-1/2 "> {/* Adjust the width of the text container */}
               <h3 className="text-xs md:text-2xl mb-3 md:mb-5 font-[Courgette]">Popular, Well-liked </h3>
                <h1 className="text-sm md:text-4xl lg:text-5xl font-extrabold leading-tight mb-2 md:mb-4">
                DELICIOUS FAST FOOD <br />
                 <span className=" mt-1 md:mt-2 block"> THE TONGUE </span>
                </h1>
              <Link to='/order/bread'>  <button className="bg-[#FFA200]   text-white font-bold py-1 px-3 md:py-2 md:px-5 rounded-md text-[10px] mt-1 md:text-base ">SHOP NOW</button></Link>
              </div>
            </div>

            {/* Bottom Image */}
            <img src={slider4} alt="" className="inset-x-0 absolute bottom-0" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative mt-16 bg-gray-900">
            {/* Background Image */}
            <img
              className="w-full object-cover h-[200px] md:h-full"
              src={slider2}
              alt="Background Image"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#001300]" style={{ width: '50%' }} ></div>

            {/* Text Container */}
           <div>
           <div data-aos="fade-right" className="absolute inset-0    flex items-center px-4 md:px-8 lg:px-16 xl:px-24 text-white">
              <div className="w-1.5/2 ml-3 md:w-1/2"> {/* Adjust the width of the text container */}
               <h3 className="text-xs md:text-2xl mb-3 md:mb-5 font-[Courgette]">Loved by many people</h3>
                <h1 className="text-sm md:text-4xl lg:text-5xl font-extrabold leading-tight mb-2 md:mb-4">
                  LOOKING FOR POPULAR <br />
                 <span className=" mt-1 md:mt-2 block"> FAST FOOD</span>
                </h1>
              <Link to='/order/bread'>  <button className="bg-[#FFA200]   text-white font-bold py-1 px-3 md:py-2 md:px-5 rounded-md text-[10px] mt-1 md:text-base ">SHOP NOW</button></Link>

              </div>
            </div>
           </div>

            {/* Bottom Image */}
            <img src={slider4} alt="" className="inset-x-0 absolute bottom-0" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative mt-16 bg-gray-900">
            {/* Background Image */}
            <img
              className="w-full object-cover h-[200px] md:h-full"
              src={slider3}
              alt="Background Image"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#001300]" style={{ width: '50%' }} ></div>

            {/* Text Container */}
            <div data-aos="fade-right" className="absolute inset-0    flex items-center px-4 md:px-8 lg:px-16 xl:px-24 text-white">
              <div className="w-1.5/2 ml-3 md:w-1/2"> {/* Adjust the width of the text container */}
               <h3 className="text-xs md:text-2xl mb-3 md:mb-5 font-[Courgette]">Popular Fast Food</h3>
               <h1 className="text-sm md:text-4xl lg:text-5xl font-extrabold leading-tight mb-2 md:mb-4">
                  SELECTION FOR A  <br />
                 <span className=" mt-1 md:mt-2 block"> NEW DAY</span>
                </h1>
              <Link to='/order/bread'>  <button className="bg-[#FFA200]   text-white font-bold py-1 px-3 md:py-2 md:px-5 rounded-md text-[10px] mt-1 md:text-base ">SHOP NOW</button></Link>
              </div>
            </div>

            {/* Bottom Image */}
            <img src={slider4} alt="" className="inset-x-0 absolute bottom-0" />
          </div>
        </SwiperSlide>
      </Swiper>



    </div>
  );
};

export default Banner;