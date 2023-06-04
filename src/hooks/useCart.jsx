import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"
import { useQuery } from "@tanstack/react-query";

export const useCart = () => {
  const {user} = useContext(AuthContext);
  const {isLoading, refetch, isError, data: cart = [], error} = useQuery(
    {
        queryKey: ['cart', user?.email],
        queryFn: async()=>{
            const response = await fetch(`http://localhost:5000/carts?email=${user.email}`)
            return response.json();
        },

    }
  )

  return [cart, refetch]
}