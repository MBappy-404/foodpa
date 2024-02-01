import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

 

const usePayment = () => {

     const [axiosSecure] = useAxiosSecure();
     const {user} = useAuth();

     const {data: payments=[],refetch: paymentRefetch} = useQuery({
          queryKey: ['payments', user?.email],
          queryFn: async() =>{
               const res = await axiosSecure.get(`/payments?email=${user?.email}`)
              return res.data;
          }
     })


     return [payments,paymentRefetch]
};

export default usePayment;