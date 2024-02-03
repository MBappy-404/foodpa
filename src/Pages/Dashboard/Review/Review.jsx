import { useState } from "react";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle.jsx";
import { Flex, Rate } from "antd";
import useAuth from "../../../hooks/useAuth.jsx";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../hooks/useAxiosSecure.jsx";
import { Bars } from "react-loader-spinner";

const Review = () => {
  const { user } = useAuth();
  const [value, setValue] = useState(0);
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];
  const [axiosSecure] = useAxiosSecure();
  const [loading, setLoading] = useState();
  const handleReview = (event) => {
    setLoading(true)
    event.preventDefault();

    const form = event.target;
    const recipe = form.recipe.value;
    const suggest = form.suggest.value;
    const details = form.message.value;
    const rating = value;

    const review = {
      photo: user?.photoURL,
      name: user?.displayName,
      email: user?.email,
      recipe,
      suggest,
      details,
      rating,
    };

    // store review on database
    axiosSecure.post("/reviews", review)
      .then((data) => {
        if (data.data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Thanks For Your valuable feedback.",
            icon: "success",
            timer: 1000,
            showConfirmButton: false,
          });
          setLoading(false)
          form.reset();
        }
      });

    // console.log(review);
  };
  return (
    <div className="px-2 min-h-[100vh]  md:px-5 lg:px-16  ">
      <Helmet>
        <title>Foodpa | Reviews</title>
      </Helmet>
      <div className="py-5">
        <SectionTittle heading={"Review"} subHeading={"Sharing is Caring!!"} />
      </div>

      <div className="my-6 border border-gray-200 p-2  py-5  md:p-10 mx-auto  bg-gray-50">
        <h1 className="text-3xl text-[#333] font-extrabold text-center">
          Rate Us
        </h1>
        <div className="flex justify-center pt-5">
          <Flex gap="middle" center>
            <Rate
              style={{ fontSize: 25 }}
              tooltips={desc}
              onChange={setValue}
              allowClear={false}
              value={value}
            />
            {value ? <span>{desc[value - 1]}</span> : null}
          </Flex>
        </div>
        <form onSubmit={handleReview} className="mt-8 space-y-6">
          <div>
            <label className="text-sm md:text-base font-semibold block mb-2">
              Which recipe you liked most?
            </label>
            <input
              type="text"
              placeholder="Recipe Name"
              name="recipe"
              className="w-full rounded-md py-2.5 px-4 border text-sm md:text-base  focus:outline-none focus:border-gray-400"
              required
            />
          </div>

          <div>
            <label className="text-sm md:text-base font-semibold block mb-2">
              Do you have any suggestion for us?
            </label>
            <input
              type="text"
              placeholder="Subject"
              name="suggest"
              className="w-full rounded-md py-2.5 px-4 border text-sm md:text-base  focus:outline-none focus:border-gray-400"
            />
          </div>
          <div>
            <label className="text-sm md:text-base font-semibold block mb-2">
              Message
            </label>
            <textarea
              placeholder="Message"
              rows="6"
              name="message"
              className="w-full rounded-md px-4 border text-sm md:text-base pt-2.5  focus:outline-none focus:border-gray-400"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="  ml-1 mt-6 flex  gap-1 px-7 py-2.5 bg-[#FFA200] mb-3 hover:bg-[#222] transition-all text-sm duration-300 text-white    rounded  "
          >
            {
              loading ? <div className="px-8"><Bars
              height="20"
              width="20"
              color="white"
              ariaLabel="bars-loading"
              visible={true}
            /></div> : 'Send Review'
          
            }
          </button>
        </form>
      </div>
    </div>
  );
};

export default Review;
