import { useQuery } from "@tanstack/react-query";

 

const useReview = () => {
     const {data: reviews=[],refetch: reviewRefetch} = useQuery({
          queryKey: ['reviews'],
          queryFn: async() =>{
               const res = await fetch('https://bistro-boss-server-mbappy-404.vercel.app/reviews')
              return res.json();
          }
     })


     return [reviews,reviewRefetch]
};

export default useReview;