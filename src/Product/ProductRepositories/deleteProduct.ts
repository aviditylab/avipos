import { db } from "../../db";

export default async function deleteProduct(id: number): Promise<void> {
  await db.products.delete(id);
}
