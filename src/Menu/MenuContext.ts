import { createContext } from "react";
import Product from "../Product";
import Sales from "../Sales";
import Financial from "../Financial";

export type MenuType = "sales" | "product" | "financial";

export const MenuComponents = {
  sales: Sales,
  product: Product,
  financial: Financial,
};

const MenuContext = createContext<{
  menu: MenuType;
  setMenu: React.Dispatch<React.SetStateAction<MenuType>>;
}>({
  menu: "sales",
  setMenu: () => {},
});

export default MenuContext;
