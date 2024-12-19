import { db } from "../../db";

export default async function getSales(
  dateFrom: Date = new Date(),
  dateTo: Date = new Date()
) {
  console.log("sales");
  dateFrom.setHours(0, 0, 0, 0);
  dateTo.setHours(23, 59, 59, 999);
  return await db.sales
    .filter(
      (sale) =>
        sale.createdAt >= dateFrom.getTime() &&
        sale.createdAt <= dateTo.getTime()
    )
    .toArray();
}
