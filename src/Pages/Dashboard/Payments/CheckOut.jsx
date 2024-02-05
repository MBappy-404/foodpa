import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useCart from "../../../hooks/useCart";
import "./CheckOut.css";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";
import { Bars } from "react-loader-spinner";

const CheckOut = () => {
  const today = new Date();
  const date = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(today);
  const { user } = useAuth();
  const stripe = useStripe();
  const [cardError, setCardError] = useState();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [process, setProcess] = useState();
  const [transactionId, setTransactionId] = useState();

  const [cart, cartRefetch] = useCart();
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(totalPrice.toFixed(2));

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        // console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    // card Element with  Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      // console.log("error", error.message);
      setCardError(error.message);
    } else {
      // console.log("PaymentMethod", paymentMethod);
    }

    setProcess(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError);
      // console.log(confirmError);
    }

    setProcess(false);

    // console.log(paymentIntent);

    if (paymentIntent.status === "succeeded") {
      // const transactionId = paymentIntent.id;
      setTransactionId(paymentIntent.id);

      // save payment data
      const payment = {
        email: user?.email,
        trxId: paymentIntent.id,
        category: cart?.map((item) => item.category),
        price,
        payDate: date,
        quantity: cart?.length,
        cartItems: cart?.map((item) => item._id),
        menuItems: cart?.map((item) => item.orderId),
        itemsName: cart?.map((item) => item.name),
      };

      // console.log(payment);

      axiosSecure.post("/payments", payment).then((res) => {
        // console.log(res.data);
        if (res.data.insertResult && res.data.deleteResult) {
          cartRefetch();
        }
      });
    } else {
      setCardError(error.message);
    }
  };
  return (
    <div>
      {transactionId ? (
        <Result
          status="success"
          title="Successfully Purchased"
          subTitle={`Transaction Id: ${transactionId}`}
          extra={[
            <Button key="rate">
              <Link to="/dashboard/review"> Rate Us</Link>
            </Button>,
            <Button key="buy">
              <Link to="/order/bread">Buy Again</Link>
            </Button>,
          ]}
        />
      ) : (
        <div>
          <div className="pb-4 -mt-8">
            <h1 className="p-2 text-lg font-semibold">Enter Your Card Info</h1>
            <span className=" text-sm  text-gray-500">
              Total Pay Amount: ${price}
            </span>
          </div>
          <form onSubmit={handleSubmit}>
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />

            <button
              type="submit"
              className=" mx-auto mt-6 flex items-center justify-center play-view gap-1 px-8 py-2 bg-[#FFA200] mb-3 hover:bg-[#222] transition-all text-sm duration-500 text-white     rounded-full"
              disabled={!stripe || !clientSecret || process}
            >
            {
              process ? <Bars
              height="20"
              width="25"
              color="white"
              ariaLabel="bars-loading"
              visible={true}
            /> : 'Pay'
            }
            </button>
            
          </form>
        </div>
      )}
      {/* <p className="text-sm text-red-400 py-2">{cardError}</p> */}
    </div>
  );
};

export default CheckOut;
