import { ProductTypeSerialized } from "../Product/ProductType";

export interface SalesItemType {
  product: ProductTypeSerialized;
  quantity: number;
  discount: number;
}
export interface SalesType {
  id?: number;
  items: SalesItemType[];
  total: number;
  createdAt: number;
  updatedAt: number;
}
