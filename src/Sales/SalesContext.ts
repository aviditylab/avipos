import { createContext, Dispatch, SetStateAction } from "react";
import { SalesItemType, SalesType } from "./SalesType";

export const SalesContext = createContext<{
  sales: SalesType;
  setSales: Dispatch<SetStateAction<SalesType>>;
  addProductToSales: SalesItemType | null;
  setAddProductToSales: Dispatch<SetStateAction<SalesItemType | null>>;
}>({
  sales: {
    id: 0,
    items: [],
    total: 0,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  setSales: () => {},
  addProductToSales: null,
  setAddProductToSales: () => {},
});
