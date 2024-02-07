
import { Tab } from "@headlessui/react";
import image from "../../assets/assets/home/21-scaled2.jpeg";

import Cover from "../../Shared/Cover/Cover";
import { Fragment, useEffect, useState } from "react";
import useMenuData from '../../hooks/useMenuData';
import FoodCard from '../../Components/FoodCart/FoodCard';
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";



const Order = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const categories = ['bread', "donut", "hamburger", "pizza","sandwich","tacos"]
  const { category } = useParams();
  // console.log(category);
  const categoryIndex = categories.indexOf(category);
  const [selectedIndex, setSelectedIndex] = useState(categoryIndex)

  const [menu,,loading] = useMenuData();


  const bread = menu.filter(item => item?.category === 'bread')
  const donut = menu.filter(item => item?.category === "donut")
  const hamburger = menu.filter(item => item?.category === "hamburger")
  const pizza = menu.filter(item => item?.category === "pizza")
  //  const offered = menu.filter(item => item?.category === "offered")


  return (
    <div>
      <Helmet>
        <title>Foodpa-Order</title>
      </Helmet>
      <Cover heading={"Order"} active={'Order'} image={image} />

      <Tab.Group selectedIndex={selectedIndex} onChange={(index) => setSelectedIndex(index)}>
        <Tab.List className="bg-gray-100  flex justify-center my-10 w-[98%]  md:w-[90%] lg:w-[60%]  mx-auto rounded-md flex-wrap gap-2 p-4">
          {categories.map((category, i) => (
            <Tab key={i + 1} as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected
                      ? 'bg-yellow-500 text-white p-2 text-xs px-4 font-[400] border-none rounded-md'
                      : 'bg-gray-200 text-gray-500 hover:bg-yellow-100  text-xs font-[400]  p-2 px-4 border-none rounded-md'
                  }
                >
                  {category.toUpperCase()}
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>


        <Tab.Panels>

          <Tab.Panel className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 px-3 mb-10 ">
            {
              bread.slice().reverse().map(item => <FoodCard loading={loading} key={item._id} item={item}></FoodCard>)
            }
          </Tab.Panel>
          <Tab.Panel className="grid grid-cols-1 md:grid-cols-2 gap-3 px-3 lg:grid-cols-4 mb-10 ">
            {
              donut.slice().reverse().map(item => <FoodCard loading={loading} key={item._id} item={item}></FoodCard>)
            }
          </Tab.Panel>
          <Tab.Panel className="grid grid-cols-1 md:grid-cols-2 gap-3 px-3 lg:grid-cols-4 mb-10 ">
            {
              hamburger.slice().reverse().map(item => <FoodCard loading={loading} key={item._id} item={item}></FoodCard>)
            }
          </Tab.Panel>
          <Tab.Panel className="grid grid-cols-1 md:grid-cols-2 gap-3 px-3 lg:grid-cols-4 mb-10 ">
            {
              pizza.slice().reverse().map(item => <FoodCard loading={loading} key={item._id} item={item}></FoodCard>)
            }
          </Tab.Panel>
          <Tab.Panel className="grid grid-cols-1 md:grid-cols-2 gap-3 px-3 lg:grid-cols-4 mb-10 ">
            {
              hamburger.slice().reverse().map(item => <FoodCard loading={loading} key={item._id} item={item}></FoodCard>)
            }
          </Tab.Panel>
          <Tab.Panel className="grid grid-cols-1 md:grid-cols-2 gap-3 px-3 lg:grid-cols-4 mb-10 ">
            {
              donut.slice().reverse().map(item => <FoodCard loading={loading} key={item._id} item={item}></FoodCard>)
            }
          </Tab.Panel>

         

        </Tab.Panels>

      </Tab.Group>




    </div>
  );
};

export default Order;