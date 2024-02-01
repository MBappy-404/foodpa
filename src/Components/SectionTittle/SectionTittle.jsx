 

const SectionTittle = ({heading,subHeading}) => {
     return (
          <div className="w-full md:w-2/6 mx-auto text-center">
               <p className="text-base font-[Courgette] text-[#FFA200] mb-1">---{subHeading}---</p>
               <h2 className="text-2xl md:text-3xl text-gray-700 font-[700] py-3  uppercase  ">{heading}</h2>
          </div>
     );
};

export default SectionTittle;