import { useEffect } from "react";
import ProductCard from "./ProductCardWithAction";
import { Col, Row } from "rsuite";
import { useAppDispatch, useAppSelector } from "../hooks";

function ListProduct() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products);
  useEffect(() => {
    dispatch({ type: "PRODUCT_FETCH_REQUESTED" });
  }, [])
  return (
    <Row style={{ justifyContent: 'center', width: '100%' }}>
      {products.data.map((product, index) => {
        return (
          <Col md={4} sm={12} xs={24} key={index}>
            <ProductCard key={index} product={product} />
          </Col>
        )
      })}
    </Row>
  )
}

export default ListProduct;