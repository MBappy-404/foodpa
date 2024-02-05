import Swal from "sweetalert2";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import useMenuData from "../../../hooks/useMenuData";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import TableSpinner from "../../../Components/Spinner/TableSpinner";
import { Link } from "react-router-dom";


const ManageItems = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [menu,refetch, loading] = useMenuData();
  const [axiosSecure] =  useAxiosSecure();

  const handleDelete = (item) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You want delete this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async(result) => {
      if (result.isConfirmed) {
       const res = await axiosSecure.delete(`/menu/${item._id}`)
           
            // console.log(res.data);
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Item has been deleted.",
                icon: "success",
                timer:1000,
                showConfirmButton:false
              });
              

            }
           
           
      }
    });
  }
  return (
    <div className="min-h-[100vh]">
        <Helmet>
        <title>Foodpa | Manage-Items</title>
      </Helmet>
      <div className="mt-4 px-2 md:px-5   lg:px-10 ">
        <div>
          <SectionTittle subHeading={'hurry up'} heading={'Manage Items'}/>
        </div>
        <div className=" overflow-x-auto rounded-t-2xl   mx-auto mt-5">
          <table className="min-w-full   rounded-t-2xl  ">
            <thead className=" bg-[#D58B09] ">
              <tr className="border-b-2 text-white ">
                <th className="px-6 py-5 text-left text-sm font-semibold">No</th>
                <th className="px-6 py-5 text-left text-sm font-semibold">
                  Name
                </th>
                <th className="px-6 py-5 text-left text-sm font-semibold">
                  Price

                </th>
                <th className="px-6 py-5 text-left text-sm font-semibold">
                  Action

                </th>
               
              </tr>
            </thead>
            <tbody className="whitespace-nowrap">
            
            {
              !loading && Array.isArray(menu) && <> {
                menu?.slice().reverse().map((item,index) =>   
                <tr key={item._id} className="bg-white border-b">
                  <td className="px-6 py-3 text-sm">{index+1}</td>
                <td className="px-6 py-3 text-sm">
                  <div className="flex items-center cursor-pointer">
                    <img src={item.image} className="w-10 h-10 rounded-full shrink-0" />
                    <div className="ml-4">
                      <h2 className="text-sm text-black">{item.name}</h2>
                      
                    </div>
                  </div>
                </td>
                <td className="px-6 py-3 text-sm">
                  ${item.price}
                </td>
               
                <td className="px-6 py-3">
               <Link to={`/dashboard/update-item/${item._id}`}>
               <button className="mr-4" title="Edit">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 fill-blue-500 hover:fill-blue-700"
                      viewBox="0 0 348.882 348.882">
                      <path
                        d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z"
                        data-original="#000000" />
                      <path
                        d="M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z"
                        data-original="#000000" />
                    </svg>
                  </button>
               </Link>
                  <button onClick={() => handleDelete(item)} data-play="play-trash" className="px-2    py-1 cursor-pointer play-trash text-sm">
                        <lord-icon
                          target=".play-trash"
                          src="https://cdn.lordicon.com/wpyrrmcq.json"
                          trigger="click"
                          style={{ width: "25px", height: "25px", }}>
                        </lord-icon>
                      </button>
                </td>
              </tr>)
               }</>
            }
            </tbody>
          </table>
          {
            loading && <TableSpinner/> 
          }
        </div>
      </div>
    </div>
  );
};

export default ManageItems;