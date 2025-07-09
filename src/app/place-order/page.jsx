"use client"
import { useRouter } from "next/navigation"

const PlaceOrder = () => {
    const router = useRouter()
    const clickHandler = () =>{
        console.log("Order Placed Successfully");
        router.push("/")
    }
  return (
    <button onClick={clickHandler}>
        Place Order
    </button>
  )
}

export default PlaceOrder