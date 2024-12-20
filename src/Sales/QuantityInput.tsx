import { Box, Button, css, Modal, TextField, Typography } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { salesSlice } from "./SalesSlice";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function QuantityInput() {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    dispatch({ type: salesSlice.actions.unselectProduct.type });
    setOpen(false)
  }
  const selectedProduct = useAppSelector(state => state.sales.selectedProduct);
  useEffect(() => {
    if (selectedProduct) setOpen(true);
  }, [selectedProduct])
  const [quantity, setQuantity] = useState(1);
  const handleChangeQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value))
  }
  const handleAddToCart = () => {
    dispatch({ type: salesSlice.actions.addProduct.type, payload: { ...selectedProduct, quantity } });
    handleClose();
  }
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className=" flex flex-col gap-y-2">
          <div>
            <img src={selectedProduct?.image} alt={selectedProduct?.name} className="w-full" />
          </div>
          <Typography variant="h5" sx={{ color: 'text.secondary' }}>
            {selectedProduct?.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {selectedProduct?.description}
          </Typography>
          <Typography variant="h5" sx={{ color: 'text.secondary' }}>
            ${selectedProduct?.price}
          </Typography>
          <TextField id="outlined-basic" label="Quantity" variant="outlined" type="number" className="w-full" value={quantity} onChange={handleChangeQuantity} />
          <Button onClick={handleAddToCart} variant="contained" color="primary" className='w-full'>Add to Cart</Button>
        </div>
      </Box>
    </Modal>
  )
}