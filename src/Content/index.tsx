import { useContext } from "react";
import MenuContext, { MenuComponents } from "../Menu/MenuContext";

export default function Content() {
  const { menu } = useContext(MenuContext);

  const SelectedComponent = MenuComponents[menu]
  return (
    <div className="overflow-scroll absolute w-full">
      <SelectedComponent />
    </div>
  )
}