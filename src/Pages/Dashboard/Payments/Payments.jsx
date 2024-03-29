import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";

// Stripe payment api key 
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Key);
//  console.log(stripePromise);
const Payments = ({ counter }) => {

     return (
          <div className=" mx-auto my-8">
               <div className=" mx-auto">
                    <Elements stripe={stripePromise}>
                         <CheckOut counter={counter} />
                    </Elements>
               </div>

          </div>


     );
};

export default Payments;