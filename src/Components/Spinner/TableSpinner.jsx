import { Bars } from "react-loader-spinner";


const TableSpinner = () => {
     return (
          <div>
               <div >
                    <div className="h-16 bg-white border-b flex items-center  justify-center rounded">
                         <span className="mr-5"> Load Data</span>
                         <Bars
                              height="20"
                              width="20"
                              color="black"
                              ariaLabel="bars-loading"
                              visible={true}
                         /> </div>


               </div>
          </div>
     );
};

export default TableSpinner;