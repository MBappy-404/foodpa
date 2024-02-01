

const MenuItems = ({ image, name }) => {
     return (
          <div>
               <div className='bg-[#95A500] mx-auto text-white py-10  p-2 rounded-xl relative'>
                    <div className="mt-4">
                         <div className="relative flex flex-col justify-between h-full p-2 rounded-xl">
                              <div className="py-20 relative flex cursor-pointer justify-center p-2 rounded-xl before:absolute before:inset-y-0 items-center before:transition before:duration-500 hover:before:opacity-100">
                                   <div className="relative text-center">
                                        <h4 className="text-5xl uppercase font-semibold">{name}</h4>
                                   </div>
                              </div>
                              <img className="absolute bottom-0 left-0 w-[10rem] translate-x-5 scale-x-[-1]  translate-y-16 md:w-[13rem] transition duration-300" src={image} alt="" />
                              <img className="absolute bottom-0 right-0 w-[10rem] translate-y-16  -translate-x-5 md:w-[13rem] transition duration-300" src={image} alt="" />
                         </div>
                    </div>
               </div>


          </div>
     );
};

export default MenuItems;