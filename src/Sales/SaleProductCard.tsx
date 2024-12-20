import { Button, Card, CardContent, CardMedia, Typography, } from "@mui/material";
import { ProductTypeSerialized } from "../Product/ProductType";
import { useDispatch } from "react-redux";
import { salesSlice } from "./SalesSlice";

export default function SaleProductCard({ product }: { product: ProductTypeSerialized }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({ type: salesSlice.actions.selectProduct.type, payload: product });
  }
  return (
    <div className=" w-full">
      <Card sx={{ width: "100%", display: 'flex' }}>
        <CardMedia
          component="img"
          sx={{ width: '30%', height: 'auto', aspectRatio: '1' }}
          image={product.image}
          alt={product.name}
        />
        <CardContent
          className=" flex-1 flex flex-col justify-between">
          <Typography variant="h6" sx={{ color: 'text.secondary' }} className=" text-center">
            {product.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} className=" text-center">
            {product.description}
          </Typography>
          <Typography variant="h5" className=" text-green-700 text-center">
            ${product.price}
          </Typography>
          <Button variant="contained" color="primary" className="w-full" onClick={handleClick}>
            Add to cart
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}