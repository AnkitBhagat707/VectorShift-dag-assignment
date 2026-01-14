export const showAlert = (message, type = "warning") => {
  window.dispatchEvent(
    new CustomEvent("vs-alert", {
      detail: {
        message,
        type, // "error" | "success" | "warning"
      },
    })
  );
};
