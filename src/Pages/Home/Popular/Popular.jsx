import { Link } from "react-router-dom";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import { Badge, Tooltip } from "antd";
import useMenuData from "../../../hooks/useMenuData";
import useAuth from "../../../hooks/useAuth";

const Popular = () => {

  const { user } = useAuth()
  const [menu,refetch] = useMenuData();
  const popular = menu.filter(item => item.category === 'popular');
  const like = menu.map(item => item.like && item.like?.includes(user?.email))
   

  const handleLike = (id) => {

    const recipeLike = { like: user?.email};

    fetch(`https://bistro-boss-server-mbappy-404.vercel.app/menu/${id}`, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(recipeLike)

    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          refetch();
          //  console.log(data);
        }
      })

  }
  return (
    <div className="-mt-5 px-0 md:px-2">
      <div>
        <SectionTittle
          subHeading={"Discover Our Menu"}
          heading={"Popular Recipe"}
        />
      </div>

      <div className="flex pt-5 px-4 md:px-20 lg:px-0 justify-center">

        <div className="grid grid-cols-1 mx-auto md:grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Recipe Card 1 */}
          {
            popular.map(item =>
              <Badge.Ribbon key={item._id} style={{ fontFamily: "Farro" }} text="Popular" color="red">
                <div key={item._id} className="bg-gray-100 border border-gray-200 font-[Farro] p-3 py-5 md:py-3 my-2 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5">
                  <div
                    style={{ backgroundImage: `url(${item.image})` }}
                    className="w-full h-72 md:w-40 md:h-40 rounded-xl bg-cover"
                  ></div>
                  <div className="flex sm:flex-1 flex-col gap-2 p-1">
                    <h1 className="text-lg sm:text-xl   text-gray-600">
                      {item.name}
                    </h1>
                    <p className="text-gray-500 text-sm sm:text-base line-clamp-3">
                      {
                        item.recipe
                      }
                    </p>
                    <div className="flex gap-4 pt-5 mt-auto">
                      <Tooltip overlayStyle={{overflow:'hidden'}} placement="rightTop" title={item.like?.length > 0 && ` ${item.like?.length} ${item?.like?.length > 1 ? 'Peoples' : 'people'} liked this recipe`}>
                        <button disabled={item.like?.includes(user?.email)} onClick={() => handleLike(item._id)} className="flex bg-gray-300 items-center gap-0.5 sm:text-md border border-gray-300 px-2 py-1 rounded-full transition-colors  focus:outline-none ">
                          <lord-icon
                            target=".play-admin"
                            // src="https://cdn.lordicon.com/xyboiuok.json"
                            // src="https://cdn.lordicon.com/ulnswmkk.json"
                            src={item.like?.includes(user?.email) ? 'https://cdn.lordicon.com/ulnswmkk.json' :'https://cdn.lordicon.com/xyboiuok.json'}
                            trigger="click"
                            colors="primary:black"
                            style={{ width: "20px", height: "20px" }}
                          ></lord-icon>
                          <span className=" mt-0.5 text-xs">{like ? item.like?.length : '0'}</span>
                        </button>
                      </Tooltip>

                      <button className="ml-auto bg-gray-300 flex items-center gap-1 sm:text-md border border-gray-300 px-3 py-1 rounded-full transition-colors  focus:outline-none ">
                        <span>${item.price}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </Badge.Ribbon>
            )
          }


        </div>


      </div>

      <div className=" flex pt-5 justify-center">
        <Link to="/menu">
          <button   className="play-cart mx-auto mt-6 gap-1 px-6 py-2 bg-[#FFA200] mb-3 hover:bg-[#222] transition-all text-sm duration-500 text-white rounded-full">
            View All Recipe
          </button>          
        </Link>
      </div>
    </div>
  );
};

export default Popular;
