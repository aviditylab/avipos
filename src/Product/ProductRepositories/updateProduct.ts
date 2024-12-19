import { db } from "../../db";
import { ProductType } from "../ProductType";

export default async function updateProduct(product: ProductType) {
  const id = await db.products.update(product.id!, product);
  return id;
}
