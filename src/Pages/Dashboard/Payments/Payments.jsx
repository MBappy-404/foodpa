import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";
 

 


 const stripePromise = loadStripe(import.meta.env.VITE_Payment_Key);
//  console.log(stripePromise);
const Payments = () => {

  
 
     return (
          <div className=" mx-auto my-8">
         <div className=" mx-auto">
         <Elements stripe={stripePromise}>
            <CheckOut/>
          </Elements>
         </div>
         
      </div>
      
      
     );
};

export default Payments;