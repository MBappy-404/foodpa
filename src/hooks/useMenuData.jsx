import { useQuery } from "@tanstack/react-query";


const useMenuData = () => {

     const { data: menu = [], refetch } = useQuery({
          queryKey: ['menu'],
          queryFn: async () => {
               const res = await fetch('https://bistro-boss-server-mbappy-404.vercel.app/menu')
               return res.json();
          }
     })


     return [menu, refetch]

}

export default useMenuData;