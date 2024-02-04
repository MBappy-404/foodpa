

const Spinner = () => {
     return (
          <div>
               <div className="py-4 rounded shadow-md  my-2 animate-pulse bg-gray-50">
                    <div className="flex p-4 space-x-3 ">
                         <div className="flex-shrink-0 w-full h-40 rounded-md bg-gray-300"></div>
                    </div>
                    <div className="p-4 space-y-4 px-8">
                         <div className="w-full h-4 rounded bg-gray-300"></div>
                         <div className="w-full h-4 rounded bg-gray-300"></div>
                         <div className="w-full h-4 rounded bg-gray-300"></div>
                    </div>
               </div>
          </div>
     );
};

export default Spinner;