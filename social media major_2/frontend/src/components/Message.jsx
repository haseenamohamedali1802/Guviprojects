import { useEffect } from "react";
import { Alert } from "react-bootstrap";

function Message({ variant = "info", children, onClose }) {
  useEffect(() => {
    if (typeof onClose !== "function") return;

    const timer = setTimeout(() => {
      onClose();
    }, 15000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <Alert
      variant={variant}
      dismissible={typeof onClose === "function"}
      onClose={onClose}
    >
      {children}
    </Alert>
  );
}

export default Message;