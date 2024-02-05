import { Badge, Tooltip } from "antd";
import { Link } from "react-router-dom";
import MenuItems from "../../../Components/MenuItems/MenuItems";
import useAuth from "../../../hooks/useAuth";
import useMenuData from "../../../hooks/useMenuData";
import RecipeSpinner from "../../../Components/Spinner/RecipeSpinner";






const MenuCategory = ({ items, heading, coverBg, loading }) => {

  const { user } = useAuth()
  const [, refetch, ,] = useMenuData();
  // const offered = items.filter(item => item?.category === "offered")

  const handleLike = (id) => {
    console.log(id);
    const recipeLike = { like: user?.email };
    console.log(recipeLike);

    fetch(`https://bistro-boss-server-mbappy-404.vercel.app/menu/like/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recipeLike)

    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        if (data.matchedCount > 0) {
          refetch();
        }
      })

  }
  return (
    <div className="px-2">
      {heading && <MenuItems name={heading} image={coverBg} />}
      <div className="flex mb-10 pt-10 px-4 md:px-20 lg:px-0 justify-center">

        <div className=" grid grid-cols-1 mx-auto md:grid-cols-1 lg:grid-cols-2 gap-5   ">
          {
            items.map(item =>

              <> {loading ? <RecipeSpinner /> : <div key={item._id}>

                {
                  item.category === "offered" ?

                    <Badge.Ribbon key={item._id} style={{ fontFamily: "Farro", marginTop: '-8px' }} text="30% Off" color="red">
                      <div className="bg-gray-100 border  border-gray-200 font-[Farro] p-3 py-5 md:py-3 my-2 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5">
                        <div className=" bg-cover ">
                          <img src={item.image} className="w-full rounded-xl h-72 md:w-40 md:h-40 " alt="" />
                        </div>
                        <div className="flex sm:flex-1 flex-col gap-2 p-1">
                          <h1 className="text-lg md:text-xl  text-gray-600">
                            {item.name}
                          </h1>
                          <p className="text-gray-500 text-sm md:text-base">
                            {
                              item.recipe
                            }
                          </p>
                          <div className="flex gap-4 pt-5 mt-auto">
                            <Tooltip placement="rightTop" title={item.like?.length > 0 && ` ${item.like?.length} ${item?.like?.length > 1 ? 'Peoples' : 'people'} liked this recipe`}>
                              <button disabled={item.like?.includes(user?.email)} onClick={() => handleLike(item._id)} className="flex bg-gray-300 items-center gap-0.5 sm:text-md border border-gray-300 px-2 py-1 rounded-full transition-colors  focus:outline-none ">
                                <lord-icon
                                  target=".play-admin"

                                  src={item.like?.includes(user?.email) ? 'https://cdn.lordicon.com/ulnswmkk.json' : 'https://cdn.lordicon.com/xyboiuok.json'}
                                  trigger="click"
                                  colors="primary:#808080"
                                  style={{ width: "20px", height: "20px" }}
                                ></lord-icon>
                                <span className=" mt-0.5 text-xs">{item.like ? item.like?.length : '0'}</span>
                              </button>
                            </Tooltip>
                            <button className="ml-auto bg-gray-300 flex items-center gap-1 sm:text-md border border-gray-300 px-3 py-1 rounded-full transition-colors  focus:outline-none ">
                              <span>${item.price}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </Badge.Ribbon>

                    :

                    <div className="bg-gray-100 p-3 my-2 py-5 md:py-3 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5">
                       <div className=" bg-cover ">
                          <img src={item.image} className="w-full rounded-xl h-72 md:w-40 md:h-40 " alt="" />
                        </div>
                      <div className="flex sm:flex-1 flex-col gap-2 p-1">
                        <h1 className="text-lg md:text-xl    text-gray-600">
                          {item.name}
                        </h1>
                        <p className="text-gray-500 text-sm md:text-base">
                          {
                            item.recipe
                          }
                        </p>
                        <div className="flex gap-4 pt-5 mt-auto">
                          <Tooltip placement="rightTop" title={item.like?.length > 0 && `${item.like?.length} ${item?.like?.length > 1 ? 'Peoples' : 'people'} liked this recipe`}>
                            <button disabled={item.like?.includes(user?.email)} onClick={() => handleLike(item._id)} className="flex bg-gray-300 items-center gap-0.5 sm:text-md border border-gray-300 px-2 py-1 rounded-full transition-colors  focus:outline-none ">
                              <lord-icon
                                target=".play-admin"
                                // src="https://cdn.lordicon.com/xyboiuok.json"
                                // src="https://cdn.lordicon.com/ulnswmkk.json"
                                src={item.like?.includes(user?.email) ? 'https://cdn.lordicon.com/ulnswmkk.json' : 'https://cdn.lordicon.com/xyboiuok.json'}
                                trigger="click"
                                colors="primary:#808080"
                                style={{ width: "20px", height: "20px" }}
                              ></lord-icon>
                              <span className=" mt-0.5 text-xs">{item.like ? item.like?.length : '0'}</span>
                            </button>
                          </Tooltip>
                          <button className="ml-auto bg-gray-300 flex items-center gap-1 sm:text-md border border-gray-300 px-3 py-1 rounded-full transition-colors  focus:outline-none ">
                            <span>${item.price}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                }

              </div>} </>
            )
          }
        </div>
      </div>
      <div className="mx-auto flex mb-8 justify-center">
        {heading && <Link to={`/order/${heading}`}>
          <button className=" mx-auto mt-6  px-6 py-2 bg-[#FFA200] mb-3 hover:bg-[#222] transition-all text-sm duration-500 text-white rounded-full">
            Order Now
          </button>
        </Link>}
      </div>
    </div>
  );
};

export default MenuCategory;