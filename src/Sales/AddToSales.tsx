import { ChangeEvent, useRef, useState } from "react"
import { useAppDispatch, useAppSelector } from "../hooks";
import { salesActions } from "./SalesSlice";
import { SalesItemType } from "./SalesType";
import { Button, Modal } from "rsuite";
import { Input } from "rsuite";

export default function AddToSales() {
  const selectProduct = useAppSelector(state => state.sales.selectedProduct);
  const dispatch = useAppDispatch();
  const quantityRef = useRef<HTMLInputElement>(null);
  const [productSale, setProductSale] = useState<SalesItemType>({
    product: selectProduct!,
    quantity: 1,
    discount: 0
  });
  const handleChangeValue = (value: string, event: ChangeEvent<HTMLInputElement>) => {
    setProductSale((prev) => { return { ...prev, [event.target.name]: value } as SalesItemType });
  }
  const handleAddSales = () => {
    if (!productSale || !selectProduct)
      return;
    dispatch(salesActions.addProduct({ ...productSale, product: selectProduct }))
    dispatch(salesActions.unselectProduct())
  }
  return (
    <Modal
      open={selectProduct !== null}
      onClose={() => { dispatch({ type: salesActions.unselectProduct.type }) }}
    >
      <Modal.Header>
        <Modal.Title>Add to Sales</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label>quantity</label>
        <Input ref={quantityRef} id="outlined-basic" name="quantity" required type="number" value={(productSale?.quantity)?.toString()} onChange={handleChangeValue} />
        <label>discount</label>
        <Input id="outlined-basic" name="discount" required type="number" value={(productSale?.discount)?.toString()} onChange={handleChangeValue} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleAddSales} appearance="primary" style={{ width: '100%' }}>
          Add
        </Button>
      </Modal.Footer>
    </Modal >
  )
}