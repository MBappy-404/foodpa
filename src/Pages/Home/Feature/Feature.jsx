
import { Link } from 'react-router-dom';
import featureImage from '../../../assets/assets/home/home-shop.jpg'


const Feature = () => {
  return (
    <div>
      <section
        className="bg-cover bg-center   flex items-center justify-center"
        style={{
          backgroundImage: `url(${featureImage})`,
        }}
      >
        <div className='py-5 md:py-24 '>
          <div className='text-center'>
            <h3 className="text-sm md:text-xl mb-3 md:mb-5 font-[Courgette]">Fast processing</h3>
            <h1 className="text-xl md:text-3xl text-red-600 py-1   font-[800]   mb-2 md:mb-4">
              DELICIOUS, ATTRACTIVE
              <br />
              <span className=" mt-1 md:mt-2 block">AND BEAUTIFUL</span>
            </h1>
            <p className='text-white text-sm'>Consumption trends of busy people…</p>
            <Link to='/order/bread'>  <button className="bg-red-600 mt-10  text-white   py-2 px-5 rounded-md text-xs md:text-base ">SHOP NOW</button></Link>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Feature;