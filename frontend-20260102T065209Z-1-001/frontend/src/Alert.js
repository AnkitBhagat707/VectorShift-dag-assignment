import { useEffect, useState } from "react";

const Alert = () => {
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      setAlert(e.detail);
      setTimeout(() => setAlert(null), 2500);
    };

    window.addEventListener("vs-alert", handler);
    return () => window.removeEventListener("vs-alert", handler);
  }, []);

  if (!alert) return null;

  return (
    <div className={`vs-alert vs-alert-${alert.type}`}>
      {alert.message}
    </div>
  );
};

export default Alert;
