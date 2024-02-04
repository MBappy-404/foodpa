import { useQuery } from "@tanstack/react-query";
import { useState } from "react";


const useMenuData = () => {
     const [loading, setLoading] = useState();

     const { data: menu = [], refetch } = useQuery({
          queryKey: ['menu'],
          queryFn: async () => {
               setLoading(true)
               const res = await fetch('https://bistro-boss-server-mbappy-404.vercel.app/menu')
               const data = await res.json();
               setLoading(false)
               return data;
          }
     })


     return [menu, refetch, loading,setLoading]

}

export default useMenuData;