import { useQuery } from "@tanstack/react-query";
import { Tooltip } from "antd";
import { useContext, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import defaultUser from '../../../assets/assets/others/profile.png'
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";


const AllUsers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  // load users 
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  //    Delete User //////////////////////////

  const handleDeleteUser = (id) => {

    if (user?.email !== "sadikulsad0810@gmail.com") {
      // delete only me 😃
      Swal.fire({
        title: "OPS!",
        text: " You cannot change or modify 😃.",
        icon: "warning",
        footer:'Only Main Admin Can Change'
      });
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "You want delete this user!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://bistro-boss-server-mbappy-404.vercel.app/users/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                // console.log(data.deletedCount);
                refetch();
                Swal.fire({
                  title: "Deleted!",
                  text: "User has been deleted.",
                  icon: "success",
                });
              }
            });
        }
      });
    }

  }


  //   Promote  Admin ///////////////////////////

  const handleAdmin = (user) => {
    // console.log(id);
    if(user?.email  != "sadikulsad0810@gmail.com"){
      Swal.fire({
        title: "OPS!",
        text: " You cannot change or modify 😃.",
        icon: "warning",
        footer:'Only Main Admin Can Change'
      });
    }else{
      fetch(`https://bistro-boss-server-mbappy-404.vercel.app/users/admin/${user._id}`, {
        method: "PATCH",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            // console.log(data.deletedCount);
            refetch();
            Swal.fire({
              title: "Success!",
              text: `${user.name} Promoted to ADMIN.`,
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
  };

  return (
    <div>
      <Helmet>
        <title>Foodpa | Users</title>
      </Helmet>
      <div className="  px-2 md:px-5  lg:px-10">
        <div className="pt-3">
          <SectionTittle heading={'All Users'} subHeading={'Your Customers'} />
        </div>
        <div className="w-full overflow-hidden  rounded-lg py-5 shadow-xs">
          <div className="w-full overflow-x-auto rounded-t-2xl">
            <table className="w-full ">
              <thead>
                <tr className="text-xs font-semibold tracking-wide   text-left text-white uppercase border-b  bg-[#D58B09]   ">
                  <th className="px-5 py-5">No</th>
                  <th className="px-5 py-5">Name</th>
                  <th className="px-5 py-5">Email</th>
                  <th className="px-5 py-5">Role</th>
                  <th className="px-5 py-5">Manage</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y dark:divide-gray-700 ">
                {users?.map((user, index) => (
                  <>
                    {" "}
                    <tr
                      key={user._id}
                      className="bg-gray-50  hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400"
                    >
                      <td className="px-5 py-3 text-sm">{index + 1}</td>
                      <td className="px-5 py-3">
                        <div className="flex items-center text-sm">
                          <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                            <img
                              className="object-cover border border-gray-200 w-full h-full rounded-full"
                              src={user?.photo ? user.photo : defaultUser}
                              alt=""
                              loading="lazy"
                            />
                            <div
                              className="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            ></div>
                          </div>
                          <div>
                            <p className="font-semibold">{user?.name}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-3 text-sm">{user?.email}</td>

                      {/* verify customer or admin  */}

                      {user?.role === "admin" ? (

                        // ADMIN /////
                        <td
                          data-play="play-admin"
                          className="px-5  cursor-default play-admin py-3 text-xs"
                        >
                          <span className="px-2 py-2 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                            <lord-icon
                              target=".play-admin"
                              src="https://cdn.lordicon.com/lomfljuq.json"
                              trigger="boomerang"
                              colors="primary:blue"
                              style={{
                                width: "20px",
                                height: "20px",
                                marginBottom: "-5px",
                                marginRight: "8px",
                              }}
                            ></lord-icon>
                            ADMIN
                          </span>
                        </td>
                      ) : (
                        // Customer //////

                        <td
                          onClick={() => handleAdmin(user)}

                          className="px-5 cursor-pointer  py-3 text-xs"
                        >
                          <Tooltip
                            title="Make Admin"
                            placement="leftTop"
                            color="green"
                            overlayStyle={{ overflow: 'hidden' }}
                          >
                            <span className="px-2 py-2  flex md:block  font-semibold leading-tight text-gray-500 bg-green-100 rounded-full  ">
                              <lord-icon
                                target=".play-customer"
                                src="https://cdn.lordicon.com/hrjifpbq.json"
                                colors="primary:gray"
                                style={{
                                  width: "20px",
                                  height: "20px",
                                  marginBottom: "-5px",
                                  marginRight: "5px",
                                }}
                              ></lord-icon>
                              <span className="mt-1 md:mt-0">Customer</span>
                            </span>
                          </Tooltip>
                        </td>
                      )}

                      {/* Delete Customer   */}
                      <td
                        onClick={() => handleDeleteUser(user._id)}
                        data-play="play-trash"
                        className="px-5 cursor-pointer play-trash py-3 text-xs"
                      >
                        <div className="font-semibold py-3 px-2  leading-tight rounded-full  ">
                          <Tooltip
                            overlayStyle={{ overflow: 'hidden' }}
                            title={user.role === "admin" ? "Delete Admin" : "Delete Customer"}
                            placement="leftTop"
                            color="red"
                          >
                            <lord-icon
                              target=".play-trash"
                              src="https://cdn.lordicon.com/wpyrrmcq.json"
                              trigger="click"
                              style={{ width: "25px", height: "25px" }}
                            ></lord-icon>
                          </Tooltip>
                        </div>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
