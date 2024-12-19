import ProductModal from "./ProductModal";
import ListProduct from "./ListProduct";
import AddProductButton from "./AddProductButton";
import { VStack } from "rsuite";

export default function Product() {
  return (
    <VStack spacing={3}>
        <AddProductButton />
        <ProductModal />
        <ListProduct />
    </VStack >
  )
}