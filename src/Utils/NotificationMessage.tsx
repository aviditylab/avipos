import { Notification } from "rsuite";

export default function NotificationMessage(message: { text: string, type: "success" | "error" }) {
  return (
    <Notification type={message.type} header={`${message.type}!`} closable>
      <p>{`${message.text}`}</p>
    </Notification>
  );
}