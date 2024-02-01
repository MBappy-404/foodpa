

const Footer = () => {
  // let year = new Date();


  return (
    <div>
      <footer className="bg-[#f2eded] py-8 px-10  ">
        <div className="lg:max-w-[50%] mx-auto text-center">
          <h3 className="text-3xl font-bold text-black">Newsletter</h3>
          <p className="text-sm mt-6 text-gray-400">
            Subscribe to our newsletter and stay up to date with the latest news,
            updates, and exclusive offers. Get valuable insights. Join our community
            today!
          </p>
          <div className="bg-[#dddddd] flex px-2 py-1 rounded-full text-left mt-10">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full outline-none bg-transparent text-sm pl-2"
            />
            <button
              type="button"
              className="bg-[#FFA200]   transition-all text-white text-sm rounded-full px-5 py-2 ml-4"
            >
              Submit
            </button>
          </div>
        </div>
        <hr className="border-gray-300 my-12" />
        <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-6 text-black">About Us</h4>
            <p className="text-gray-400 mb-2 text-sm">
              Mon – Thu: 10:00 Am – 01:00 Am <br />
              Saturday: 11:00 Am To Midnight <br />
              Friday: Kitchen Closed
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-black">Services</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-400 hover:text-[#FFA200] transition-all text-[15px]"
                >
                  Bread
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-400 hover:text-[#FFA200] transition-all text-[15px]"
                >
                  Donut
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-400 hover:text-[#FFA200] transition-all text-[15px]"
                >
                  Pizza
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-400 hover:text-[#FFA200] transition-all text-[15px]"
                >
                  Hamburger
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-black">USEFUL LINKS</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-400 hover:text-[#FFA200] transition-all text-[15px]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-400 hover:text-[#FFA200] transition-all text-[15px]"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-400 hover:text-[#FFA200] transition-all text-[15px]"
                >
                  Order
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-400 hover:text-[#FFA200] transition-all text-[15px]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-black">About Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-400 hover:text-[#FFA200] transition-all text-[15px]"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-400 hover:text-[#FFA200] transition-all text-[15px]"
                >
                  Mission and Values
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-400 hover:text-[#FFA200] transition-all text-[15px]"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-400 hover:text-[#FFA200] transition-all text-[15px]"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>


    </div>
  );
};

export default Footer;