import { Button, VStack } from "rsuite";
import { IoMdAdd } from "react-icons/io";
import { useAppDispatch } from "../hooks";
import { productAction } from "./productSlice";

export default function AddProductButton() {
  const dispatch = useAppDispatch();
  const handleAdd = () => {
    dispatch(productAction.createProduct());
  }
  return (
    <Button style={{ width: '100%' }} appearance="primary" onClick={handleAdd}>
      <VStack spacing={2}
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}>
        <IoMdAdd fontSize="large" />
        Add Product
      </VStack>
    </Button>
  )
}