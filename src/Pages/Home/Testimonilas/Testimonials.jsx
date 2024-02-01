import { SwiperSlide, Swiper } from "swiper/react";
import userPhoto from "../../../assets/assets/others/profile.png";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import useReview from "../../../hooks/useReview";
import { Rate } from "antd";

const Testimonials = () => {
  const [reviews] = useReview();
  return (
    <div className="py-16 px-2">
      <div>
        <SectionTittle
          subHeading={"Feedback from Our Customers"}
          heading={"Testimonials"}
        />
      </div>

      <Swiper
        style={{ position: "relative", overflow: "hidden" }}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".prevSlide",
          nextEl: ".nextSlide",
        }}
        loop={true}
        effect="slide" // Use the "slide" effect for smooth transitions
        speed={2000}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
          1200: {
            slidesPerView: 1,
          },
        }}
      >
        <div className="my-6   text-[#333]">
          <div className="max-w-4xl mx-auto relative">
            {reviews
              .slice(0, 5)
              .reverse()
              .map((review) => (
                <SwiperSlide key={review._id}>
                  <div className="max-w-2xl mt-12  mx-auto">
                    <div className="flex flex-col items-center text-center">
                      <img
                        src={review.photo ? review.photo : userPhoto}
                        className="w-10 h-10 md:w-20 md:h-20 rounded-full shadow-[0_2px_22px_-4px_rgba(93,96,127,0.6)] border-2 border-white"
                      />
                      <div className="mt-4">
                        <h4 className="text-sm md:text-lg font-extrabold">
                          {" "}
                          {review.name}
                        </h4>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <p className="text-sm md:text-base lg:text-lg   text-gray-500 leading-relaxed">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 md:w-6 mr-3  rotate-180 fill-gray-300 inline"
                          viewBox="0 0 475.082 475.081"
                        >
                          <path
                            d="M164.454 36.547H54.818c-15.229 0-28.171 5.33-38.832 15.987C5.33 63.193 0 76.135 0 91.365v109.632c0 15.229 5.327 28.169 15.986 38.826 10.66 10.656 23.606 15.988 38.832 15.988h63.953c7.611 0 14.084 2.666 19.414 7.994 5.33 5.325 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.413 51.675-14.275 14.271-31.499 21.409-51.678 21.409h-18.27c-4.952 0-9.233 1.813-12.851 5.427-3.615 3.614-5.424 7.898-5.424 12.847v36.549c0 4.941 1.809 9.233 5.424 12.848 3.621 3.613 7.898 5.427 12.851 5.427h18.271c19.797 0 38.688-3.86 56.676-11.566 17.987-7.707 33.546-18.131 46.68-31.265 13.131-13.135 23.553-28.691 31.261-46.679 7.707-17.987 11.562-36.877 11.562-56.671V91.361c0-15.23-5.33-28.171-15.987-38.828s-23.602-15.986-38.827-15.986zm294.635 15.987c-10.656-10.657-23.599-15.987-38.828-15.987H310.629c-15.229 0-28.171 5.33-38.828 15.987-10.656 10.66-15.984 23.601-15.984 38.831v109.632c0 15.229 5.328 28.169 15.984 38.826 10.657 10.656 23.6 15.988 38.828 15.988h63.953c7.611 0 14.089 2.666 19.418 7.994 5.324 5.328 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.416 51.675-14.274 14.271-31.494 21.409-51.675 21.409h-18.274c-4.948 0-9.233 1.813-12.847 5.427-3.617 3.614-5.428 7.898-5.428 12.847v36.549c0 4.941 1.811 9.233 5.428 12.848 3.613 3.613 7.898 5.427 12.847 5.427h18.274c19.794 0 38.684-3.86 56.674-11.566 17.984-7.707 33.541-18.131 46.676-31.265 13.134-13.135 23.562-28.695 31.265-46.679 7.706-17.983 11.563-36.877 11.563-56.671V91.361c-.003-15.23-5.328-28.171-15.992-38.827z"
                            data-original="#000000"
                          />
                        </svg>
                        {review.details}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 md:w-6 ml-3 fill-gray-300 inline"
                          viewBox="0 0 475.082 475.081"
                        >
                          <path
                            d="M164.454 36.547H54.818c-15.229 0-28.171 5.33-38.832 15.987C5.33 63.193 0 76.135 0 91.365v109.632c0 15.229 5.327 28.169 15.986 38.826 10.66 10.656 23.606 15.988 38.832 15.988h63.953c7.611 0 14.084 2.666 19.414 7.994 5.33 5.325 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.413 51.675-14.275 14.271-31.499 21.409-51.678 21.409h-18.27c-4.952 0-9.233 1.813-12.851 5.427-3.615 3.614-5.424 7.898-5.424 12.847v36.549c0 4.941 1.809 9.233 5.424 12.848 3.621 3.613 7.898 5.427 12.851 5.427h18.271c19.797 0 38.688-3.86 56.676-11.566 17.987-7.707 33.546-18.131 46.68-31.265 13.131-13.135 23.553-28.691 31.261-46.679 7.707-17.987 11.562-36.877 11.562-56.671V91.361c0-15.23-5.33-28.171-15.987-38.828s-23.602-15.986-38.827-15.986zm294.635 15.987c-10.656-10.657-23.599-15.987-38.828-15.987H310.629c-15.229 0-28.171 5.33-38.828 15.987-10.656 10.66-15.984 23.601-15.984 38.831v109.632c0 15.229 5.328 28.169 15.984 38.826 10.657 10.656 23.6 15.988 38.828 15.988h63.953c7.611 0 14.089 2.666 19.418 7.994 5.324 5.328 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.416 51.675-14.274 14.271-31.494 21.409-51.675 21.409h-18.274c-4.948 0-9.233 1.813-12.847 5.427-3.617 3.614-5.428 7.898-5.428 12.847v36.549c0 4.941 1.811 9.233 5.428 12.848 3.613 3.613 7.898 5.427 12.847 5.427h18.274c19.794 0 38.684-3.86 56.674-11.566 17.984-7.707 33.541-18.131 46.676-31.265 13.134-13.135 23.562-28.695 31.265-46.679 7.706-17.983 11.563-36.877 11.563-56.671V91.361c-.003-15.23-5.328-28.171-15.992-38.827z"
                            data-original="#000000"
                          />
                        </svg>
                      </p>
                    </div>
                    {/* RATING  */}
                    <div className="flex justify-center py-3">
                      <Rate
                        disabled
                        defaultValue={review.rating && review.rating}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </div>
        </div>

        {/* NAVIGATION  */}
        <div>
          <div className="bg-[#FFA200] prevSlide   z-10 w-10 h-10 grid items-center justify-center rounded-full rotate-90 shrink-0  cursor-pointer absolute left-0 top-0 bottom-0 my-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 fill-[#fff] inline"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                clipRule="evenodd"
                data-original="#000000"
              ></path>
            </svg>
          </div>
          <div className="bg-[#FFA200]  nextSlide  z-10 w-10 h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0  cursor-pointer absolute right-0 top-0 bottom-0 my-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 fill-[#fff] inline"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                clipRule="evenodd"
                data-original="#000000"
              ></path>
            </svg>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Testimonials;
