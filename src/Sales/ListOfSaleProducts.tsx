import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks"
import SaleProductCard from "./SaleProductCard";

export default function ListOfSaleProducts() {
  const productsIsFetched = useAppSelector(state => state.products.isFetched);
  const products = useAppSelector(state => state.products.data);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (productsIsFetched) return;
    dispatch({ type: 'PRODUCT_FETCH_REQUESTED' });
  }, []);
  return (
    <div className="w-full flex flex-col space-y-2 p-2">
      {products.map((item, index) => (
        <SaleProductCard key={index} product={item} />
      ))}
    </div>
  )
}