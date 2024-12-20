import { useState } from 'react'
import MenuContext from '../Menu/MenuContext'
import NotificationContext, { NotificationType } from '../NotificationContext';
import Header from '../Header';
import BottomNav from '../BottomNav';
import Content from '../Content';
export default function Dashboard() {

  const [menu, setMenu] = useState<"sales" | "product" | "financial">("sales")
  const [message, setMessage] = useState<NotificationType>({ text: "", type: "success" });
  return <MenuContext.Provider value={{ menu, setMenu }}>
    <NotificationContext.Provider value={{ message: message, setMessage }}>
      <div className=' h-screen'>
        <Header />
        <Content />
        <BottomNav />
      </div>
    </NotificationContext.Provider>
  </MenuContext.Provider>
}