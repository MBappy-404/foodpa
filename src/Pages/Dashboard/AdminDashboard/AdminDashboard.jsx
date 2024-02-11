import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import { FaCubes } from 'react-icons/fa';
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect } from "react";
import { Chart } from "tw-elements";

const AdminDashboard = () => {
     useEffect(() => {
          window.scrollTo(0, 0);
     }, []);
     const { user } = useAuth();
     const [axiosSecure] = useAxiosSecure()

     // load data for all overview [only admin can access]
     const { data: status = {} } = useQuery({
          queryKey: ['admin-status'],
          queryFn: async () => {
               const res = await axiosSecure.get('/admin-status')
               return res.data
          }
     })

     // load data for order overview
     const { data: statics = [] } = useQuery({
          queryKey: ['statics'],
          queryFn: async () => {
               const res = await axiosSecure.get('/statics')
               return res.data;
          }

     })

     // filter data for categories count 
     const bread = statics.filter(item => item.category?.includes('bread')).map(item => item.category?.length);
     const donut = statics.filter(item => item.category?.includes('donut')).map(item => item.category?.length);
     const hamburger = statics.filter(item => item.category?.includes('hamburger')).map(item => item.category?.length);
     const pizza = statics.filter(item => item.category?.includes('pizza')).map(item => item.category?.length);


     // bar chart info 
     const dataBarDarkMode = {
          type: "bar",
          data: {
               labels: ["Bread", "Donut", "Hamburger", "Pizza", "Sandwich", "Tacos"],
               datasets: [
                    {
                         label: "Orders by categories",
                         data: [bread?.length, donut?.length, hamburger?.length, pizza?.length, bread?.length, pizza?.length],
                         backgroundColor: "#d58b09"
                    },
               ],
          },
     };

     const optionsDarkMode = {
          scales: {
             y: {
                ticks: {
                   color: "white",
                },
             },
             x: {
                ticks: {
                   color: "yellow",
                },
                grid: {
                   display: false, // Hide the x-axis grid lines
                },
             },
          },
          plugins: {
             legend: {
                labels: {
                   color: "green",
                },
             },
          },
       };
       


     // bar chart from tailwind elements 
     new Chart(
          document.getElementById("darkmode-customization"),
          dataBarDarkMode,
          {},
          optionsDarkMode
     );




     return (
          <div className="min-h-[100vh]">
               <Helmet>
                    <title>Foodpa | Dashboard</title>
               </Helmet>

               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-2 md:px-5 lg:px-10 p-4 gap-4">
                    <div className="bg-[#d58b09] shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-[#be8f3d]  text-white font-medium group">
                         <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                              <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-[#d58b09] dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                         </div>
                         <div className="text-right">
                              <p className="text-2xl">{status?.users}</p>
                              <p>Customers</p>
                         </div>
                    </div>
                    <div className="bg-[#d58b09] shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-[#be8f3d]  text-white font-medium group">
                         <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                              <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-[#d58b09] dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                         </div>
                         <div className="text-right">
                              <p className="text-2xl">{status?.orders}</p>
                              <p>Orders</p>
                         </div>
                    </div>
                    <div className="bg-[#d58b09] shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-[#be8f3d]  text-white font-medium group">
                         <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                              <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-[#d58b09] dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                         </div>
                         <div className="text-right">
                              <p className="text-2xl">${status?.revenue}</p>
                              <p>Revenue</p>
                         </div>
                    </div>
                    <div className="bg-[#d58b09] shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-[#be8f3d]  text-white font-medium group">
                         <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                              <FaCubes className="text-xl text-[#d58b09] w-10 h-10" />
                         </div>
                         <div className="text-right">
                              <p className="text-2xl">{status?.products}</p>
                              <p>Products</p>
                         </div>
                    </div>
               </div>

               <div>
                    {/* welcome text  */}
                    <div>
                         <h2 className="text-xl text-gray-500 md:text-3xl px-2 md:px-5 lg:px-10 pt-2 font-semibold">Hi,Welcome Back {user.displayName}</h2>
                    </div>

                    {/* Overview  Chart  */}
                    <div className="mt-10 md:mt-20 px-3">
                         <h1 className=" text-xl md:text-2xl font-base text-gray-500 text-center mb-8">Orders Overview</h1>
                         <div className="mx-auto w-full overflow-hidden md:w-3/5">
                              <canvas id="darkmode-customization"> </canvas>
                         </div>
                    </div>
               </div>


          </div>
     );
};

export default AdminDashboard;