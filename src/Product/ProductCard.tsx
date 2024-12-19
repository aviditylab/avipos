import { ProductTypeSerialized } from "./ProductType";
import { ReactNode } from "react";
import { Panel } from 'rsuite';

export default function ProductCard({ product, children }: { product: ProductTypeSerialized, children?: ReactNode }) {
  return (
    <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={product.image} height="180" />

      </div>
      <Panel header={product.price}>
        <p>
          <small>
            {product.name}
          </small>
        </p>
      </Panel>
      <div>
        {children}
      </div>
    </Panel>
  )
}