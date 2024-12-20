import { Fab, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { FaShoppingBag } from "react-icons/fa";
import { SalesItemType } from "./SalesType";
import { useAppSelector } from "../hooks";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CheckoutItem = ({ item, index }: { index: number, item: SalesItemType }) => {
  console.log(item);
  return (
    <div className={`flex items-center ${index + 1 % 2 == 1 ? 'bg-slate-100' : 'bg-white'
      }`}>
      <div className="flex-1 text-lg font-normal mx-2">
        {item.product.name}
      </div>
      <div className=" text-lg font-normal mx-2">
        {item.product.price}
      </div>
      <div className=" text-lg font-normal mx-2">
        {item.quantity} pcs
      </div>
      <div className=" text-lg font-bold mx-2">
        {item.product.price * item.quantity}
      </div>
      <div className=" p-2 m-2 bg-red-500 text-white rounded-full">
        <CloseIcon />
      </div>
    </div>
  )

}

export default function Checkout({ isCheckoutPage, setIsCheckoutPage }: { isCheckoutPage: boolean, setIsCheckoutPage: React.Dispatch<React.SetStateAction<boolean>> }) {
  const sales = useAppSelector(state => state.sales.sales);

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
          <div className=" fixed h-screen w-screen top-0 left-0 z-40 bg-white py-16">
            <div className="flex items-center">
              <div className="p-4" onClick={() => setIsCheckoutPage(false)}>
                <ArrowBackIcon />
              </div>
              <Typography variant="h4" className=" text-center">
                Checkout
              </Typography>

            </div>
            {sales.items.map((item, index) => (
              <CheckoutItem key={index} item={item} index={index} />
            ))}
          </div>
        )
      }
    </div>
  )
}