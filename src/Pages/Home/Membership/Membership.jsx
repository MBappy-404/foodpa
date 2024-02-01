import { useState } from "react";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import comingSoon from "../../../assets/assets/home/pngtree-coming-soon-lettering-ribbon-banner-with-announcement-speaker-free-png-png-image_3986898.png";



const Membership = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <div className=" text-gray-500  px-4 py-8">
        <div className="mx-auto">
          <div className="text-center">
            <SectionTittle subHeading={'Our Membership'} heading={'Price Plan'} />
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-10 max-md:max-w-sm max-md:mx-auto">
            <div className="bg-gray-200 w-full rounded-lg relative overflow-hidden transition-all">
              <div className="p-6 pb-24">
                <div className="text-left">
                  <h4 className="text-xl mb-4 font-semibold">Basic Plan</h4>
                  <h3 className="text-xl md:text-3xl text-[#FFA200] font-semibold">$19.99/month</h3>
                  <p className="text-sm mt-4">Enjoy our basic dining experience with a selection of appetizers, entrees, and desserts.</p>
                </div>
                <div className="mt-8">
                  <ul className="space-y-4">
                    <li className="flex items-center text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]" viewBox="0 0 24 24">
                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                      </svg>
                      Access to our standard menu items
                    </li>
                    <li className="flex items-center text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]" viewBox="0 0 24 24">
                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                      </svg>
                      10% discount on all beverages
                    </li>
                    <li className="flex items-center text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]" viewBox="0 0 24 24">
                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                      </svg>
                      Priority seating on weekends
                    </li>

                  </ul>
                </div>
              </div>

              <div className="flex  justify-center">
                <button onClick={() => setOpenModal(true)} type="button" className="my-6 w-[80%] md:w-[50%] mx-auto absolute bottom-0 px-2 h-11  font-semibold text-white    bg-[#FFA200]  hover:bg-[#222] transition-all rounded-full text-sm duration-500">Get started today</button>
              </div>
            </div>
            <div className="bg-gray-200  rounded-lg   relative overflow-hidden transition-all">
              <div className="p-6 pb-24">
                <div className="text-left">
                  <h4 className="text-xl mb-4 font-semibold">Family Plan</h4>
                  <h3 className="text-xl md:text-3xl text-[#FFA200]  font-semibold">$49.99/month</h3>
                  <p className="text-sm mt-4">Perfect for families, enjoy a shared dining experience with customizable options.</p>
                </div>
                <div className="mt-8">
                  <ul className="space-y-4">
                    <li className="flex items-center text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]" viewBox="0 0 24 24">
                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                      </svg>
                      Shared family-style meals with customizable options
                    </li>
                    <li className="flex items-center text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]" viewBox="0 0 24 24">
                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                      </svg>
                      Access to kids' menu with special pricing
                    </li>
                    <li className="flex items-center text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]" viewBox="0 0 24 24">
                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                      </svg>
                      20% discount on all beverages
                    </li>
                    <li className="flex items-center text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]" viewBox="0 0 24 24">
                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                      </svg>
                      Dedicated family seating area
                    </li>

                  </ul>
                </div>
              </div>

              <div className="flex  justify-center">
                <button onClick={() => setOpenModal(true)} type="button" className="my-6 w-[80%] md:w-[50%] mx-auto absolute bottom-0 px-2 h-11 text-sm font-semibold   bg-[#FFA200] text-white hover:bg-[#222] transition-all rounded-full  duration-500">Get started today</button>
              </div>
            </div>

            <div className="bg-gray-200 rounded-lg  relative overflow-hidden transition-all">
              <div className="p-6 pb-24">
                <div className="text-left">
                  <h4 className="text-xl mb-4 font-semibold">Premium Plan</h4>
                  <h3 className="text-xl md:text-3xl text-[#FFA200]  font-semibold">$99.99/month</h3>
                  <p className="text-sm mt-4">Elevate your dining experience with our exclusive Premium membership.</p>
                </div>
                <div className="mt-8">
                  <ul className="space-y-4">
                    <li className="flex items-center text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]" viewBox="0 0 24 24">
                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                      </svg>
                      Access to VIP lounge with private dining options
                    </li>
                    <li className="flex items-center text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]" viewBox="0 0 24 24">
                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                      </svg>
                      Personalized menu customization
                    </li>
                    <li className="flex items-center text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]" viewBox="0 0 24 24">
                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                      </svg>
                      Unlimited complimentary beverages
                    </li>
                    <li className="flex items-center text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]" viewBox="0 0 24 24">
                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                      </svg>
                      Priority access to special events and promotions
                    </li>
                    <li className="flex items-center text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]" viewBox="0 0 24 24">
                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                      </svg>
                      Dedicated concierge service
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex  justify-center">
                <button onClick={() => setOpenModal(true)} type="button" className="my-6 w-[80%] md:w-[50%] mx-auto absolute bottom-0 px-2 h-11   font-semibold text-white   bg-[#FFA200]  hover:bg-[#222] transition-all rounded-full text-sm duration-500">Get started today</button>
              </div>
            </div>
          </div>
        </div>
        {/* modal  */}
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
            <div className="flex justify-center">
            <img src={comingSoon} alt="" />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Membership;