import { db } from "../../db";
import { ProductType } from "../ProductType";

export default async function saveProduct(product: ProductType) {
  delete product.id;
  const id = await db.products.add(product);
  return id;
}
