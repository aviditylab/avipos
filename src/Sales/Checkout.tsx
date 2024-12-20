import { Fab } from "@mui/material";
import { FaShoppingBag } from "react-icons/fa";

export default function Checkout({ isCheckoutPage, setIsCheckoutPage }: { isCheckoutPage: boolean, setIsCheckoutPage: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <div>
      {
        !isCheckoutPage && (
          <div className=" fixed right-10 bottom-20 z-50 ">
            <Fab color="primary" onClick={() => setIsCheckoutPage(true)}>
              <FaShoppingBag />
            </Fab>
          </div>
        )
      }
      {
        isCheckoutPage && (
          <div className=" fixed h-screen w-screen top-0 left-0 z-40 bg-white scroll">
            <h1>Checkout</h1>
          </div>
        )
      }
    </div>
  )
}