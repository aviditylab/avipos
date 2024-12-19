import { createContext } from "react";

export interface NotificationType {
  text: string;
  type: "success" | "error";
}

const NotificationContext = createContext<{
  message: NotificationType;
  setMessage: React.Dispatch<React.SetStateAction<NotificationType>>;
}>({ message: { text: "", type: "success" }, setMessage: () => {} });

export default NotificationContext;
