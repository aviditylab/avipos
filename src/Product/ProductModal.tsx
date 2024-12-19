import { useState } from "react";
import { ProductType } from "./ProductType";
import saveProduct from "./ProductRepositories/saveProduct";
import ProductForm from "./ProductForm";
import updateProduct from "./ProductRepositories/updateProduct";
import { Button, Modal, useToaster } from "rsuite";
import NotificationMessage from "../Utils/NotificationMessage";
import { useAppDispatch, useAppSelector } from "../hooks";
import { unserializeProduct } from "./ProductTransformer";
import { productAction } from "./productSlice";


export default function ProductModal() {
  const { selectedProduct, isCreating, isEditing } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const [product, setProduct] = useState<ProductType>(unserializeProduct(selectedProduct));
  const handleClose = () => {
    dispatch(productAction.removeSelectedProduct());
  }

  const validateProduct = () => {
    if (product.name === '') {
      return false;
    }
    if (product.price === 0) {
      return false;
    }
    return true;
  }
  const toaster = useToaster();
  const handleSaveProduct = async () => {
    if (!validateProduct()) return;
    if (isEditing) await updateProduct(product)
    else
      await saveProduct(product);
    setProduct(unserializeProduct(null));
    toaster.push(NotificationMessage({ text: `Product ${product.name} successfully`, type: "success" }), { placement: 'bottomEnd' });
  }
  return (
    <>
      <Modal
        open={isCreating || isEditing}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Modal.Header>
          <Modal.Title>{isCreating && `Add new`} {isEditing && `Edit`} product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProductForm />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSaveProduct} appearance="primary" style={{ width: '100%' }}>
            {isEditing && 'Update'}
            {isCreating && 'Save'}
          </Button>
        </Modal.Footer>
      </Modal>
    </>

  )
}