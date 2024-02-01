// import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';
import styleImage from '../../assets/assets/home/4.png'

const Cover = ({ image, heading, subHeading, active }) => {
  return (
    <div className="relative mt-10"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        objectFit: 'cover',
      }}>
      <div >
        <div className="absolute inset-x-0 bottom-0">

          <img src={styleImage} alt="" />
        </div>

        <div className="py-20 md:py-40">
          <div className="text-center mb-5 mt-14">
            <h2 className="text-3xl md:text-5xl text-white font-semibold">{heading}</h2>
            <h2 className="text-2xl text-white font-semibold">{subHeading}</h2>
          </div>
          {
            active &&
            <ul className="flex items-center  justify-center font-[sans-serif] space-x-2">
              <li className="text-gray-300 hover:text-yellow-500 text-sm md:text-base   cursor-pointer">
                <Link to='/'> Home</Link>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-300 w-2.5 md:w-3 -rotate-90" viewBox="0 0 24 24">
                  <path fillRule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    clipRule="evenodd" data-original="#000000"></path>
                </svg>
              </li>
              <li className="text-yellow-500 text-sm  md:text-base  ">
                {active}
              </li>
            </ul>
          }
        </div>


      </div>
    </div>
  );
};

export default Cover;
