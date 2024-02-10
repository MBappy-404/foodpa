import FoodCard from "../../../Components/FoodCart/FoodCard";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import useMenuData from "../../../hooks/useMenuData";


const Recommended = () => {

     const [menu,, loading] = useMenuData();

     return (
          <div className="py-16">

               <div>
                    <SectionTittle subHeading={"Should Try"} heading={"CHEF RECOMMENDS"} />
               </div>
               <div className="p-4 mx-auto   max-w-xl md:max-w-full">

                    <div className="grid grid-cols-1 py-5 md:grid-cols-3 lg:grid-cols-4 gap-2">
                         {
                              menu?.slice(0, 4).reverse().map(item => <FoodCard loading={loading} key={item._id} item={item} />)
                         }
                    </div>
               </div>
          </div>
     );
};

export default Recommended;