import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Bars } from "react-loader-spinner";
import { useQuery } from "@tanstack/react-query";

const hostImageKey = import.meta.env.VITE_Image_Upload_Token;
// console.log(hostImage);
const host_url = `https://api.imgbb.com/1/upload?key=${hostImageKey}`;

const UpdateItem = () => {
  const { id } = useParams();
  // console.log(id);

  const { data: menu = {} } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      // setLoading(true)
      const res = await axiosSecure.get(`/menu/${id}`);
      const data = await res.data;
      // setLoading(false)
      return data;
    },
  });
  // console.log(menu);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [loading, setLoading] = useState();
  const { register, handleSubmit, reset } = useForm();
  const [image, setImage] = useState(null);
  const [axiosSecure] = useAxiosSecure();
  const navigate = useNavigate();

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      setImage(null);
    }
  };

  const handleSubmitItems = (data) => {
    setLoading(true);
    // console.log(data.image[0]);
    const formData = new FormData();
    formData.append("image", data.image[0]);

    if (data.image[0]) {
      // console.log(formData);

      fetch(host_url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((resImage) => {
          // console.log(resImage);
          if (resImage.success) {
            // console.log(resImage.data.display_url);
            const imageUrl = resImage.data.display_url;
            const { name, price, recipe, category } = data;
            const updateMenuItems = {
              name: name ? name : menu.name,
              price: price ? parseFloat(price) : menu.price,
              recipe: recipe ? recipe : menu.recipe,
              category: category ? category.toLowerCase() : menu.category,
              image: imageUrl,
            };
            // console.log(newMenuItems);
            //    console.log(updateMenuItems);
            fetch(
              `https://bistro-boss-server-mbappy-404.vercel.app/menu/${menu._id}`,
              {
                method: "PUT",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(updateMenuItems),
              },
            )
              .then((res) => res.json())
              .then((data) => {
                // console.log(data);
                if (data.acknowledged) {
                  reset();
                  setLoading(false);
                  navigate("/dashboard/manage-item");
                  Swal.fire({
                    title: "Item Updated!",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }
              });
          }
        });
    } else {
      const { name, price, recipe, category } = data;
      const updateMenuItems = {
        name: name ? name : menu.name,
        price: price ? parseFloat(price) : menu.price,
        recipe: recipe ? recipe : menu.recipe,
        category: category ? category.toLowerCase() : menu.category,
        image: menu.image,
      };
      //     console.log(updateMenuItems);
      fetch(
        `https://bistro-boss-server-mbappy-404.vercel.app/menu/${menu._id}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updateMenuItems),
        },
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.acknowledged) {
            reset();
            setLoading(false);
            navigate("/dashboard/manage-item");
            Swal.fire({
              title: "Item Updated!",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
  };

  return (
    <div className="px-2 md:px-5 min-h-[100vh]  lg:px-10   ">
      <Helmet>
        <title>Foodpa | Update-Items</title>
      </Helmet>
      <div className="pt-5">
        <SectionTittle heading={"Update ITEM"} subHeading={"What's New"} />
      </div>
      {/* <!-- component --> */}
      <div className="my-6 border border-gray-200 p-2  md:p-10 mx-auto  bg-gray-50">
        <form
          onSubmit={handleSubmit(handleSubmitItems)}
          className="mt-2 px-3 space-y-6 py-5"
        >
          <div>
            <label className="text-sm md:text-base font-semibold block mb-2">
              Recipe Name*
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              defaultValue={menu.name}
              {...register("name", {
                maxLength: 40,
              })}
              className="w-full rounded-md py-2.5 px-4 border text-sm md:text-base  focus:outline-none focus:border-gray-400"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="text-sm md:text-base font-semibold block mb-2">
                Recipe Price*
              </label>
              <input
                type="text"
                defaultValue={menu.price}
                name="price"
                {...register("price")}
                placeholder="Price(number)"
                className="w-full rounded-md py-2.5 px-4 border text-sm md:text-base  focus:outline-none focus:border-gray-400"
              />
            </div>
            <div className="relative inline-block w-full text-gray-700">
              <label className="text-sm md:text-base font-semibold block mb-2">
                Select Category*
              </label>
              <select
                name="category"
                defaultValue={menu.category}
                required
                {...register("category")}
                className="w-full appearance-none uppercase bg-white border border-gray-300 hover:border-gray-500 px-4 py-2.5 rounded-md   leading-tight focus:outline-none   transition"
              >
                {menu.category ? (
                  <option selected value={menu.category}>
                    {menu.category}
                  </option>
                ) : (
                  <option disabled>SELECT</option>
                )}
                <option value="BREAD">BREAD</option>
                <option value="DONUT">DONUT</option>
                <option value="HAMBURGER">HAMBURGER</option>
                <option value="PIZZA">PIZZA</option>
                <option value="popular">Popular</option>
                <option value="offered">Offer</option>
              </select>
            </div>
          </div>
          <div>
            <label className="text-sm md:text-base font-semibold block mb-2">
              Message*
            </label>
            <textarea
              placeholder="Recipe Details"
              defaultValue={menu.recipe}
              name="recipe"
              {...register("recipe")}
              rows="6"
              className="w-full rounded-md px-4 border text-sm md:text-base pt-2.5  focus:outline-none focus:border-gray-400"
            ></textarea>
          </div>

          <div>
            <label className="text-sm md:text-base font-semibold block mb-3">
              Upload Recipe Photo*
            </label>
            <div className="flex items-center space-x-2">
              <div className="shrink-0">
                {image || menu.image ? (
                  <img
                    id="preview_img"
                    className="h-16 w-24 object-cover rounded-md"
                    src={image ? image : menu.image}
                    alt="item"
                  />
                ) : (
                  <div className="h-16 w-24 object-cover rounded-md bg-gray-200"></div>
                )}
                <p className="text-xs font-semibold text-gray-500 mt-2">
                  Jpg, Png, Webp Only
                </p>
              </div>
              <label className="block">
                <input
                  type="file"
                  name="image"
                  {...register("image")}
                  onChange={handleImageChange}
                  className="block cursor-pointer w-full text-sm text-slate-500
             file:mr-4 file:py-2 file:px-4
             file:rounded-full file:border-0
             file:text-sm file:font-semibold
             file:bg-violet-50 file:text-violet-700
             hover:file:bg-violet-100
           "
                />
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="  ml-1 mt-6 flex  gap-1 px-7 py-2.5 bg-[#FFA200] mb-3 hover:bg-[#222] transition-all text-sm duration-300 text-white    rounded  "
          >
            {loading ? (
              <div className="px-3.5">
                <Bars
                  height="20"
                  width="20"
                  color="white"
                  ariaLabel="bars-loading"
                  visible={true}
                />
              </div>
            ) : (
              "Update"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
