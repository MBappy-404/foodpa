import './CustomButton.css'
const CustomButton = ({name}) => {
     return (
          <div>
                  
                    <button className=" block mx-auto custom-btn  btn-15">{name}</button>
                  
          </div>
     );
};

export default CustomButton;