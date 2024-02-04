

const RecipeSpinner = () => {
     return (
          <div>
               <div className="p-4 bg-white rounded shadow w-[320px] md:w-[550px]">
                    <div className="animate-pulse md:flex  items-center space-x-4">
                         <div className="rounded-md bg-gray-300 h-40 w-full md:w-40"></div>
                         <div className="flex-1 space-y-5 items-center mt-8 md:mt-0 py-1">
                              <div className="h-4 bg-gray-300 rounded "></div>
                              <div className="space-y-5">
                                   <div className="h-10 md:h-20 bg-gray-300 rounded"></div>
                                   <div className="h-4 bg-gray-300 rounded"></div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default RecipeSpinner;