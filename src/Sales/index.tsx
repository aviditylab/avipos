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

      {/* <AddToSales />
      <FlexboxGrid>
        <FlexboxGrid.Item as={Col} colspan={24} md={18} order={2}>
          <PanelGroup>
            {products.map((item, index) => (
              <Button key={index} onClick={() => { dispatch(salesActions.selectProduct(item)) }}>
                <ProductCard key={index} product={item} />
              </Button>
            ))}
          </PanelGroup>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item as={Col} colspan={24} md={6} style={{ paddingRight: '8px' }} order={1}>
          <VStack spacing={1}>
            <Heading level={6}>Order no. 1</Heading>
            <hr />
            <FlexboxGrid style={{ width: '100%' }}>
              <FlexboxGrid.Item colspan={8}>
                name
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={4}>
                quantity
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={4}>
                price
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={4}>
                Discount
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={3}>
                sub total
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={1}>
                <Trash />
              </FlexboxGrid.Item>
            </FlexboxGrid>
            {sales.sales.items.map((item, index) => (<SalesItem key={index} salesItem={item} index={index} />))}
            <hr />
            <FlexboxGrid style={{ width: '100%' }}>
              <FlexboxGrid.Item colspan={12}>
                <Heading level={6}>Total</Heading>
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={12}>
                <Heading level={6} style={{ textAlign: 'right' }}>{(sales.sales.items.reduce((prev = 0, current) => prev + (current.product.price * current.quantity - current.discount), 0))}</Heading>
              </FlexboxGrid.Item>
            </FlexboxGrid>
            <Button onClick={handleCheckout} appearance="primary" style={{ width: '100%' }}>Checkout</Button>
          </VStack>
        </FlexboxGrid.Item>
      </FlexboxGrid> */}
    </div>
  )
}