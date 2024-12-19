import { useState } from 'react'
import MenuContext, { MenuComponents } from '../Menu/MenuContext'
import NotificationContext, { NotificationType } from '../NotificationContext';
import Header from '../Header';
export default function Dashboard() {

  const [menu, setMenu] = useState<"sales" | "product" | "financial">("sales")
  const SelectedComponent = MenuComponents[menu]
  const [message, setMessage] = useState<NotificationType>({ text: "", type: "success" });
  const [expand, setExpand] = useState(false)
  return <MenuContext.Provider value={{ menu, setMenu }}>
    <NotificationContext.Provider value={{ message: message, setMessage }}>
      <div>
        <Header />
      </div>
    </NotificationContext.Provider>
  </MenuContext.Provider>
}