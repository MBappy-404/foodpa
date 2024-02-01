import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../provider/AuthProvider';
import { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';


const useCart = () => {

     const { user,loading } = useContext(AuthContext);
     const [axiosSecure] = useAxiosSecure();

     const { refetch: cartRefetch, data: cart = [] } = useQuery({
          queryKey: ['carts', user?.email],
          enabled: !loading,
          queryFn: async () => {
               const res = await axiosSecure.get(`/carts?email=${user?.email}`);
               // console.log(res.data);
               return res.data;
          }
     })

     return [cart, cartRefetch];

}

export default useCart;