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

         

          <div className="mt-5  space-y-4 sm:space-y-0 sm:grid md:grid-cols-2 lg:grid-cols-3 sm:gap-6   lg:mx-auto">
            <div className="border border-neutral-200 rounded-lg shadow-sm divide-y divide-neutral-200">
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-neutral-900">Personal</h2>
                <p className="mt-4 text-sm h-10 text-neutral-500">Enjoy our basic dining experience with a selection of appetizers, entrees, and desserts.</p>
                <p className="mt-4 flex flex-col space-y-2">
                  <span className="flex flex-row space-x-2 items-center">
                    <span className="text-5xl font-extrabold text-neutral-600">$19</span>
                    <span className="text-sm font-medium text-neutral-500">per month<br /> billed annually</span></span>
                </p>
                <a  onClick={() => setOpenModal(true)} 
                  className="mt-8 block w-full bg-[#FFA200] border cursor-pointer border-transparent rounded-md py-2 text-sm font-semibold text-white text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Get
                  Started
                </a>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-neutral-900 tracking-wide uppercase">What's included</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex space-x-3 "><svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24"
                    className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                    <span className="text-sm text-neutral-500"> 10% discount on all beverages</span>
                  </li>
                  <li className="flex space-x-3 "><svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24"
                    className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                    <span className="text-sm text-neutral-500"> Priority seating on weekends</span>
                  </li>
                  <li className="flex space-x-3 "><svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24"
                    className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                    <span className="text-sm text-neutral-500">Access to our standard menu items</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border border-neutral-200 rounded-lg shadow-sm divide-y divide-neutral-200">
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-neutral-900">Family</h2>
                <p className="mt-4 text-sm h-10 text-neutral-500">Perfect for families, enjoy a shared dining experience with customizable options.</p>
                <p className="mt-4 flex flex-col space-y-2">

                  <span className="flex flex-row space-x-2 items-center">
                    <span className="text-5xl font-extrabold text-neutral-600">$69</span>
                    <span className="text-sm font-medium text-neutral-500">per month<br /> billed annually</span></span>
                </p>
                <a  onClick={() => setOpenModal(true)} 
                  className="mt-8 block w-full bg-[#FFA200] border cursor-pointer border-transparent rounded-md py-2 text-sm font-semibold text-white text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Get
                  Started
                </a>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-neutral-900 tracking-wide uppercase">What's included</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex space-x-3 "><svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24"
                    className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                    <span className="text-sm text-neutral-500">20% discount on all beverages</span>
                  </li>
                  <li className="flex space-x-3 "><svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24"
                    className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                    <span className="text-sm text-neutral-500"> Dedicated family seating area</span>
                  </li>
                  <li className="flex space-x-3 "><svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24"
                    className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                    <span className="text-sm text-neutral-500"> Access to kids' menu with special pricing</span>
                  </li>
                  <li className="flex space-x-3 "><svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24"
                    className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                    <span className="text-sm text-neutral-500"> Shared family meals with customizable options</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border border-neutral-200 rounded-lg shadow-sm divide-y divide-neutral-200">
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-neutral-900">Premium</h2>
                <p className="mt-4 text-sm h-10 text-neutral-500">Elevate your dining experience with our exclusive Premium membership..</p>
                <p className="mt-4 flex flex-col space-y-2">

                  <span className="flex flex-row space-x-2 items-center">
                    <span className="text-5xl font-extrabold text-neutral-600">$99</span>
                    <span className="text-sm font-medium text-neutral-500">per month<br /> billed annually</span></span>
                </p>
                <a  onClick={() => setOpenModal(true)} 
                  className="mt-8 block w-full bg-[#FFA200] border cursor-pointer border-transparent rounded-md py-2 text-sm font-semibold text-white text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Get
                  Started
                </a>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-neutral-900 tracking-wide uppercase">What's included</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex space-x-3 "><svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24"
                    className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                    <span className="text-sm text-neutral-500"> Unlimited complimentary beverages</span>
                  </li>
                  <li className="flex space-x-3 "><svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24"
                    className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                    <span className="text-sm text-neutral-500"> Access to VIP lounge with private dining options</span>
                  </li>
                  <li className="flex space-x-3 "><svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24"
                    className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                    <span className="text-sm text-neutral-500"> Personalized menu customization</span>
                  </li>
                  <li className="flex space-x-3 "><svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24"
                    className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                    <span className="text-sm text-neutral-500">Priority access to special events and promotions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* modal  */}
        <div className="mx-auto flex items-center justify-center">
          <div className={`fixed flex justify-center items-center z-[100] ${openModal ? 'visible opacity-1' : 'invisible opacity-0'} p-2 sm:p-0 inset-0 backdrop-blur-sm bg-black/20 duration-100`}>
            <div className={`  w-full max-w-lg  2xl:max-w-xl p-4 text-center bg-white drop-shadow-2xl rounded-2xl ${openModal ? 'scale-1 opacity-1 duration-500' : 'scale-0 opacity-0 duration-500'}`}>
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