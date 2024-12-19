// db.ts
import Dexie, { type EntityTable } from "dexie";
import { ProductType } from "./Product/ProductType";
import { SalesType } from "./Sales/SalesType";

const db = new Dexie("pos") as Dexie & {
  products: EntityTable<ProductType, "id">;
  sales: EntityTable<SalesType, "id">;
};

// Schema declaration:
db.version(1).stores({
  products: "++id, name, description, price, image, createdAt, updatedAt",
  sales: "++id, items, total, createdAt, updatedAt",
});

export { db };
