import { useEffect, useState } from "react";
import ProductCard from "../Product/ProductCard";
import AddToSales from "./AddToSales";
import { Button, Col, FlexboxGrid, Heading, PanelGroup, VStack } from 'rsuite';
import { Trash } from "@rsuite/icons";
import SalesItem from "./SalesItem";
import { useAppDispatch, useAppSelector } from "../hooks";
import { salesActions } from "./SalesSlice";
import ListOfSaleProducts from "./ListOfSaleProducts";
import QuantityInput from "./QuantityInput";
import Checkout from "./Checkout";

export default function Sales() {
  const sales = useAppSelector(state => state.sales);
  const productsIsFetched = useAppSelector(state => state.products.isFetched);
  const products = useAppSelector(state => state.products.data);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (productsIsFetched) return;
    dispatch({ type: 'PRODUCT_FETCH_REQUESTED' });
  }, []);
  const [isCheckoutPage, setIsCheckoutPage] = useState(false);
  const handleShowCheckoutPage = () => {
    setIsCheckoutPage(true);
  }
  return (
    <div className=" my-16">
      <Checkout isCheckoutPage={isCheckoutPage} setIsCheckoutPage={setIsCheckoutPage} />

      {
        !isCheckoutPage && (
          <>
            <ListOfSaleProducts />
            <QuantityInput />
          </>
        )
      }
    </div>
  )
}