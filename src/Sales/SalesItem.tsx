import { FlexboxGrid } from "rsuite";
import { SalesItemType } from "./SalesType";
import { Trash } from "@rsuite/icons";
import { useAppDispatch } from "../hooks";
import { salesActions } from "./SalesSlice";

export default function SalesItem({ salesItem, index }: { salesItem: SalesItemType, index: number }) {
  const dispatch = useAppDispatch();
  const remove = () => {
    dispatch(salesActions.removeProduct(index));
  }
  return (
    <FlexboxGrid style={{ width: '100%' }}>
      <FlexboxGrid.Item colspan={8}>
        {salesItem.product.name}
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={4}>
        {salesItem.quantity}
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={4}>
        {salesItem.product.price}
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={4}>
        {salesItem.discount}
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={3}>
        {salesItem.product.price * salesItem.quantity - salesItem.discount}
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={1} onClick={remove}>
        <Trash color="red" />
      </FlexboxGrid.Item>
    </FlexboxGrid>
  )
}