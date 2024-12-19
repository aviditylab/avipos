import { ProductTypeSerialized } from "./ProductType";
import deleteProduct from "./ProductRepositories/deleteProduct";
import { useContext } from "react";
import NotificationContext from "../NotificationContext";
import ProductCard from "./ProductCard";
import { Button, FlexboxGrid } from "rsuite";
import { useAppDispatch } from "../hooks";
import { productAction } from "./productSlice";
export default function ProductCardWithAction({ product }: { product: ProductTypeSerialized }) {
  const { setMessage } = useContext(NotificationContext);
  const handleDelete = async (product: ProductTypeSerialized) => {
    await deleteProduct(product.id!);
    setMessage({ text: `delete product ${product.name} success`, type: "error" })
  }
  const dispatch = useAppDispatch();
  const handleEdit = (product: ProductTypeSerialized) => {
    dispatch(productAction.editProduct(product));
  }
  return (
    <ProductCard product={product}>
      <FlexboxGrid style={{ width: "100%" }}>
        <FlexboxGrid.Item colspan={6}>
          <Button color="blue" onClick={() => handleEdit(product)}>Edit</Button>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={6}>
          <Button color="red" onClick={() => handleDelete(product)}>Delete</Button>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </ProductCard >
  )
}