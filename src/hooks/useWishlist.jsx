import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../provider/AuthProvider';
import { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';


const useWishlist = () => {

     const { user,loading } = useContext(AuthContext);

     const [axiosSecure] = useAxiosSecure();

     const { refetch: wishlistRefetch, data: wishlist = [] } = useQuery({
          queryKey: ['wishlist', user?.email],
          enabled: !loading, 
          queryFn: async () => {
               const res = await axiosSecure.get(`/wishlist?email=${user?.email}`);
               // console.log(res.data);
               return res.data;
          }
     })

     return [wishlist, wishlistRefetch];

}

export default useWishlist;