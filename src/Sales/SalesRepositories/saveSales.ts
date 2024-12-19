import { db } from "../../db";
import { SalesType } from "../SalesType";

export default async function saveSales(sales: SalesType) {
  console.log("save sales");
  delete sales.id;
  const id = await db.sales.add({
    ...sales,
    total: sales.items.reduce(
      (acc, product) => acc + product.quantity * product.product.price,
      0
    ),
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
  });
  console.log("sales saved", id);
  return id;
}
