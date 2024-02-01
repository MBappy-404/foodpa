import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import { useEffect, useState } from "react";
import { message } from "antd";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const hostImageKey = import.meta.env.VITE_Image_Upload_Token;
// console.log(hostImage);
const host_url = `https://api.imgbb.com/1/upload?key=${hostImageKey}`;

const AddItem = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [loading, setLoading] = useState();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
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
    setLoading(true)
    // console.log(data.image[0]);
    const formData = new FormData();
    formData.append("image", data.image[0]);
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
          const newMenuItems = {
            name,
            price: parseFloat(price),
            recipe,
            category: category.toLowerCase(),
            image: imageUrl,
          };
          // console.log(newMenuItems);
          axiosSecure.post("/menu", newMenuItems)
          .then((data) => {
            if (data.data.insertedId) {
              reset();
              setLoading(false)
              navigate("/dashboard/manage-item");
              Swal.fire({
                title: "Added Success!",
                text: "Your new menu item added successfully. Now you can mange your item.",
                icon: "success",
              });
            }
          });
        }
      });
  };

  return (
    <div className="px-2 md:px-5  lg:px-10   ">
      <Helmet>
        <title>Foodpa | Add-Items</title>
      </Helmet>
      <div className="pt-5">
        <SectionTittle heading={"ADD AN ITEM"} subHeading={"What's New"} />
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
              {...register("name", {
                required: "Name is Required",
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
                type="number"
                name="price"
                {...register("price", { required: "Name is Required" })}
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
                {...register("category", { required: "Name is Required" })}
                className="w-full appearance-none bg-white border border-gray-300 hover:border-gray-500 px-4 py-2.5 rounded-md   leading-tight focus:outline-none   transition"
              >
                <option value="" disabled selected>
                  Select
                </option>
                <option value="DESERT">DESERT</option>
                <option value="SUP">SOUP</option>
                <option value="SALAD">SALAD</option>
                <option value="PIZZA">PIZZA</option>
              </select>
            </div>
          </div>
          <div>
            <label className="text-sm md:text-base font-semibold block mb-2">
              Message*
            </label>
            <textarea
              placeholder="Recipe Details"
              name="recipe"
              {...register("recipe", { required: "Name is Required" })}
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
                {image ? <img id='preview_img' className="h-16 w-24 object-cover rounded-md" src={image} alt="Current profile photo" /> : <div className="h-16 w-24 object-cover rounded-md bg-gray-200"></div>}
                <p className="text-xs font-semibold text-gray-500 mt-2">Jpg, Png, Webp Only</p>
              </div>
              <label className="block">

                <input type="file"
                  name="image"
                  required
                  {...register("image", { required: "image is Required" })}
                  onChange={handleImageChange}
                  className="block cursor-pointer w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-violet-50 file:text-violet-700
        hover:file:bg-violet-100
      "/>
              </label>
            </div>
          </div>

          <button disabled={loading} type="submit"   className="  ml-1 mt-6 flex  gap-1 px-7 py-2.5 bg-[#FFA200] mb-3 hover:bg-[#222] transition-all text-sm duration-300 text-white    rounded-full  "> {loading ? <div className="loader"></div> : 'Add Item'}

          </button>
        </form>

      </div>
    </div>
  );
};

export default AddItem;
